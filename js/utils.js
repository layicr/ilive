/**
 * 工具函数模块
 *
 * @module utils
 * @description 提供通用辅助函数，包括语言切换、XSS防护、时间格式化、性能优化等
 * @requires config.js（CONFIG配置）
 * @requires language.js（currentLanguage变量）
 *
 * 主要功能：
 * - getLangData：根据当前语言获取对应数据对象
 * - t：翻译函数，返回中英文文本
 * - escapeHtml：HTML转义，防止XSS攻击
 * - safeCreateElement：安全创建DOM元素
 * - safeHtml：允许安全标签的HTML处理
 * - formatWishTime：许愿时间格式化
 * - applyComputedProperties：为数据对象添加计算属性
 * - debounce：防抖函数，延迟执行高频事件
 * - throttle：节流函数，限制执行频率
 */

// ==================== 性能优化函数 ====================
/**
 * 防抖函数
 * @param {Function} fn - 需要防抖的函数
 * @param {number} delay - 延迟时间（毫秒）
 * @returns {Function} 防抖后的函数
 * @description 延迟执行函数，在延迟期间多次调用只执行最后一次
 *              适用于 resize、输入验证等场景
 * @example
 * window.addEventListener('resize', debounce(handleResize, 200));
 */
function debounce(fn, delay) {
    let timeoutId = null;
    return function(...args) {
        if (timeoutId) clearTimeout(timeoutId);
        timeoutId = setTimeout(() => {
            fn.apply(this, args);
            timeoutId = null;
        }, delay);
    };
}

/**
 * 节流函数
 * @param {Function} fn - 需要节流的函数
 * @param {number} interval - 执行间隔（毫秒）
 * @returns {Function} 节流后的函数
 * @description 限制函数执行频率，在指定间隔内只执行一次
 *              适用于 scroll、mousemove 等高频事件
 * @example
 * window.addEventListener('scroll', throttle(handleScroll, 100));
 */
function throttle(fn, interval) {
    let lastTime = 0;
    let timeoutId = null;
    return function(...args) {
        const now = Date.now();
        const remaining = interval - (now - lastTime);
        
        if (remaining <= 0 || remaining > interval) {
            if (timeoutId) {
                clearTimeout(timeoutId);
                timeoutId = null;
            }
            lastTime = now;
            fn.apply(this, args);
        } else if (!timeoutId) {
            timeoutId = setTimeout(() => {
                lastTime = Date.now();
                timeoutId = null;
                fn.apply(this, args);
            }, remaining);
        }
    };
}

// ==================== 语言切换函数 ====================

/**
 * 获取指定语言的数据对象
 * @param {Object} zhData - 中文数据对象
 * @param {Object} enData - 英文数据对象
 * @param {string} [lang] - 语言代码，默认使用 currentLanguage
 * @returns {Object} 对应语言的数据对象
 */
function getLangData(zhData, enData, lang) {
    const currentLang = lang || (typeof currentLanguage !== 'undefined' ? currentLanguage : 'zh');
    return currentLang === 'zh' ? zhData : enData;
}

/**
 * 翻译函数
 * @param {string} zhText - 中文文本
 * @param {string} enText - 英文文本
 * @param {string} [lang] - 语言代码，默认使用 currentLanguage
 * @returns {string} 对应语言的文本
 */
function t(zhText, enText, lang) {
    const currentLang = lang || (typeof currentLanguage !== 'undefined' ? currentLanguage : 'zh');
    return currentLang === 'zh' ? zhText : enText;
}

/**
 * HTML转义（防止XSS攻击）
 * @param {string} text - 需要转义的文本
 * @returns {string} 转义后的安全文本
 * @description 转义8种危险字符：& < > " ' ` = /
 */
function escapeHtml(text) {
    if (typeof text !== 'string') return text;

    const escapeMap = {
        '&': '&amp;',
        '<': '&lt;',
        '>': '&gt;',
        '"': '&quot;',
        "'": '&#x27;',
        '/': '&#x2F;',
        '`': '&#x60;',
        '=': '&#x3D;'
    };

    return text.replace(/[&<>"'`=\/]/g, char => escapeMap[char] || char);
}

/**
 * 安全创建DOM元素
 * @param {string} tag - 元素标签名
 * @param {string} [content] - 元素文本内容（自动安全处理）
 * @param {string} [className] - 元素类名
 * @returns {HTMLElement} 创建的DOM元素
 * @description 使用 textContent 自动安全处理内容，替代 innerHTML
 */
function safeCreateElement(tag, content, className) {
    const element = document.createElement(tag);
    if (className) element.className = className;
    if (content) element.textContent = content;
    return element;
}

/**
 * 安全HTML处理（允许特定安全标签）
 * @param {string} html - HTML字符串
 * @returns {string} 处理后的安全HTML
 * @description 允许的安全标签：br, b, i, strong, em, span, p
 *              其他标签全部转义，防止XSS攻击
 */
function safeHtml(html) {
    if (typeof html !== 'string') return html;

    // 允许的安全标签列表
    const allowedTags = ['br', 'b', 'i', 'strong', 'em', 'span', 'p'];

    // 先转义所有 HTML
    let escaped = html
        .replace(/&/g, '&amp;')
        .replace(/</g, '&lt;')
        .replace(/>/g, '&gt;');

    // 恢复允许的安全标签
    allowedTags.forEach(tag => {
        // 恢复开标签 <tag> 和 <tag/>
        escaped = escaped.replace(new RegExp(`&lt;${tag}[^&]*&gt;`, 'gi'), `<${tag}>`);
        escaped = escaped.replace(new RegExp(`&lt;${tag}/&gt;`, 'gi'), `<${tag}/>`);
        escaped = escaped.replace(new RegExp(`&lt;${tag}\\s*/&gt;`, 'gi'), `<${tag}/>`);
        // 恢复闭标签 </tag>
        escaped = escaped.replace(new RegExp(`&lt;/${tag}&gt;`, 'gi'), `</${tag}>`);
    });

    return escaped;
}

/**
 * 输入验证和净化（用于搜索等用户输入）
 * @param {string} input - 用户输入
 * @param {number} maxLength - 最大长度限制（默认100）
 * @returns {string} 验证后的安全输入
 * @description 去除前后空格，限制长度，转义HTML特殊字符，防止XSS注入
 */
function sanitizeInput(input, maxLength = 100) {
    if (typeof input !== 'string') return '';

    // 去除前后空格
    let sanitized = input.trim();

    // 限制长度（防止过长输入）
    if (sanitized.length > maxLength) {
        sanitized = sanitized.substring(0, maxLength);
    }

    // 转义HTML特殊字符（防止XSS）
    sanitized = escapeHtml(sanitized);

    return sanitized;
}

/**
 * 格式化许愿时间
 * @param {string} timeString - 时间字符串（ISO格式）
 * @param {string} [lang] - 语言代码，默认使用 currentLanguage
 * @returns {string} 格式化后的时间文本
 * @description 显示相对时间（刚刚、分钟前、小时前、天前）
 *              超过7天则显示具体日期
 */
function formatWishTime(timeString, lang) {
    const currentLang = lang || (typeof currentLanguage !== 'undefined' ? currentLanguage : 'zh');
    const date = new Date(timeString);
    const now = new Date();
    const diff = now - date;

    // 获取时间格式文本（从配置或后备）
    const getTimeText = (key) => {
        if (typeof currentData !== 'undefined' && currentData.timeFormat) {
            return currentData.timeFormat[key];
        }
        // 后备文本
        const fallback = {
            zh: { justNow: '刚刚', minutesAgo: '分钟前', hoursAgo: '小时前', daysAgo: '天前' },
            en: { justNow: 'Just now', minutesAgo: ' min ago', hoursAgo: ' hours ago', daysAgo: ' days ago' }
        };
        return fallback[currentLang][key];
    };

    if (diff < 60000) return getTimeText('justNow');
    if (diff < 3600000) return Math.floor(diff / 60000) + getTimeText('minutesAgo');
    if (diff < 86400000) return Math.floor(diff / 3600000) + getTimeText('hoursAgo');
    if (diff < 604800000) return Math.floor(diff / 86400000) + getTimeText('daysAgo');

    return date.toLocaleDateString(currentLang === 'zh' ? 'zh-CN' : 'en-US');
}

/**
 * 为数据对象添加计算属性
 * @param {Object} dataObj - 数据对象（concertDataZH 或 concertDataEN）
 * @param {string} showFirStr - 显示前缀字符串
 * @description 添加以下计算属性：
 *              - totalConcerts：演唱会总数
 *              - totalArtists：艺人数目
 *              - totalCities：城市数目
 *              - roles：角色描述数组
 *              使用缓存机制避免重复计算
 */
function applyComputedProperties(dataObj, showFirStr) {
    const cache = new Map();

    Object.defineProperty(dataObj, 'totalConcerts', {
        get: function() {
            const key = 'totalConcerts';
            if (cache.has(key)) return cache.get(key);
            const value = this.concerts.length;
            cache.set(key, value);
            return value;
        },
        enumerable: true,
        configurable: true
    });

    Object.defineProperty(dataObj, 'totalArtists', {
        get: function() {
            const key = 'totalArtists';
            if (cache.has(key)) return cache.get(key);
            const value = new Set(this.concerts.map(c => c.artist)).size;
            cache.set(key, value);
            return value;
        },
        enumerable: true,
        configurable: true
    });

    Object.defineProperty(dataObj, 'totalCities', {
        get: function() {
            const key = 'totalCities';
            if (cache.has(key)) return cache.get(key);
            const value = new Set(this.cities.map(c => c.name)).size;
            cache.set(key, value);
            return value;
        },
        enumerable: true,
        configurable: true
    });

    Object.defineProperty(dataObj, 'roles', {
        get: function() {
            const key = `roles-${showFirStr}`;
            if (cache.has(key)) return cache.get(key);
            const roleTexts = this === concertDataZH ? roleTextsZH : roleTextsEN;
            const value = [
                showFirStr + roleTexts.declaration,
                showFirStr + this.totalConcerts + "   （" + roleTexts.concertsLabel + "）",
                showFirStr + this.totalCities + "   （" + roleTexts.citiesLabel + "）"
            ];
            cache.set(key, value);
            return value;
        },
        enumerable: true,
        configurable: true
    });

    Object.defineProperty(dataObj, '_cache', {
        value: cache,
        writable: true,
        enumerable: false,
        configurable: true
    });
}