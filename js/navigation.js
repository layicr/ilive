/**
 * 导航和切换功能模块
 *
 * @module navigation
 * @description 处理返回顶部、城市模态框、视频模态框、反馈按钮等导航功能
 * @requires config.js（CONFIG配置：滚动阈值、GitHub URL）
 * @requires language.js（currentLanguage、currentData变量）
 *
 * 主要功能：
 * - 返回顶部：使用 IntersectionObserver 检测页面顶部，高效显示/隐藏按钮
 * - 城市模态框：显示演唱会举办城市列表
 * - 视频模态框：嵌入式播放演唱会视频（YouTube iframe）
 * - 视频跳转：外部链接打开视频页面
 * - 反馈按钮：跳转GitHub Issues页面
 *
 * DOM元素：
 * - backToTopBtn：返回顶部按钮
 * - cityModal：城市模态框容器
 * - cityList：城市列表容器
 * - videoModal：视频模态框容器
 * - videoPlayer：视频播放器（iframe）
 * - feedbackBtn：反馈按钮
 *
 * @performance 使用 IntersectionObserver 替代 scroll 事件监听，减少主线程阻塞
 */

// ==================== DOM 元素引用 ====================
const backToTopBtn = document.getElementById('backToTop');
const cityModal = document.getElementById('cityModal');
const cityModalTitle = document.getElementById('city-modal-title');
const cityList = document.getElementById('cityList');
const closeCityModal = document.getElementById('closeCityModal');
const cityCard = document.getElementById('city-card');
const videoModal = document.getElementById('videoModal');
const videoPlayer = document.getElementById('videoPlayer');
const videoModalTitle = document.getElementById('videoModalTitle');
const closeVideoModal = document.getElementById('closeVideoModal');
const feedbackBtn = document.getElementById('feedbackBtn');

// ==================== 返回顶部功能 ====================
/**
 * 创建顶部哨兵元素用于 IntersectionObserver 检测
 * @description 在页面顶部放置一个不可见的哨兵元素，当哨兵离开视口时显示返回顶部按钮
 * @performance 比 scroll 事件更高效，不会阻塞主线程
 */
const topSentinel = document.createElement('div');
topSentinel.id = 'top-sentinel';
topSentinel.style.cssText = 'position: absolute; top: 0; height: 1px; width: 100%; pointer-events: none; visibility: hidden;';
document.body.prepend(topSentinel);

/**
 * IntersectionObserver 回调：控制返回顶部按钮显示
 * @param {IntersectionObserverEntry[]} entries - 观察条目数组
 */
function handleTopSentinelIntersection(entries) {
    const [entry] = entries;
    // 哨兵离开视口 = 页面已向下滚动 = 显示返回顶部按钮
    if (!entry.isIntersecting) {
        backToTopBtn.classList.add('visible');
    } else {
        backToTopBtn.classList.remove('visible');
    }
}

/**
 * 创建 IntersectionObserver 监听顶部哨兵
 * @description rootMargin 定义触发区域，负值表示哨兵必须完全离开视口才触发
 */
const topObserver = new IntersectionObserver(handleTopSentinelIntersection, {
    root: null,           // 使用视口作为根
    rootMargin: `-${CONFIG.SCROLL_THRESHOLD}px 0px 0px 0px`, // 滚动超过阈值时触发
    threshold: 0          // 任何可见性变化都触发
});

// 开始观察哨兵元素
topObserver.observe(topSentinel);

backToTopBtn.addEventListener('click', function() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});

// 城市模态框控制
function openCityModal() {
    cityModal.classList.add('show');
}

function closeCityModalFunc() {
    cityModal.classList.remove('show');
}

cityCard.addEventListener('click', openCityModal);
closeCityModal.addEventListener('click', closeCityModalFunc);
cityModal.addEventListener('click', e => e.target === cityModal && closeCityModalFunc());

// 视频模态框控制
function openVideoModal(videoId, title) {
    if (!videoId) return;

    const embedUrl = `https://player.bilibili.com/player.html?bvid=${videoId}&autoplay=1`;
    videoPlayer.src = embedUrl;
    videoModalTitle.textContent = title;
    videoModal.classList.add('show');
    document.body.style.overflow = 'hidden';
}

function closeVideoModalFunc() {
    videoModal.classList.remove('show');
    videoPlayer.src = '';
    document.body.style.overflow = '';
}

closeVideoModal.addEventListener('click', closeVideoModalFunc);
videoModal.addEventListener('click', e => {
    if (e.target === videoModal || e.target.classList.contains('video-modal-content')) {
        closeVideoModalFunc();
    }
});

// ESC键关闭视频模态框
document.addEventListener('keydown', e => {
    if (e.key === 'Escape' && videoModal.classList.contains('show')) {
        closeVideoModalFunc();
    }
});

// 反馈按钮功能
function getFeedbackUrl() {
    const title = currentData.feedback.urlTitle;
    const body = currentData.feedback.urlBody;
    return `${CONFIG.GITHUB_ISSUES_URL}?title=${encodeURIComponent(title)}&body=${body}`;
}

feedbackBtn.addEventListener('click', () => {
    window.open(getFeedbackUrl(), '_blank');
});

// ESC键关闭所有模态框（全局）
document.addEventListener('keydown', e => {
    if (e.key === 'Escape') {
        closeImageModal();
        closeCityModalFunc();
    }
});