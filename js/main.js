
// ==================== 配置常量 ====================
const CONFIG = {
  DYNAMIC_TEXT_INTERVAL: 4000,
  CAROUSEL_INTERVAL: 4000,
  SCROLL_THRESHOLD: 300
};

// ==================== 数据计算属性函数 ====================
function applyComputedProperties(dataObj, showFirStr) {
  // 创建缓存对象
  const cache = new Map();
  
  // 为数据对象添加计算属性
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

  // 动态更新 roles
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
  
  // 将缓存对象附加到 dataObj，以便在需要时清空缓存
  Object.defineProperty(dataObj, '_cache', {
    value: cache,
    writable: true,
    enumerable: false,
    configurable: true
  });
}

// ==================== 状态变量 ====================
let currentLanguage = 'zh';
let currentData = concertDataZH;
let currentImageList = [];
let currentImageIndex = 0;

// 动态文本状态
let textIndices = [0, 0, 0];
const dynamicTextElements = [];

// 统一管理定时器
const timers = {
  dynamicTexts: [],
  carousel: null
};

// ==================== 辅助函数 ====================

// 获取当前语言的数据对象
function getLangData(zhData, enData) {
    return currentLanguage === 'zh' ? zhData : enData;
}

// 获取翻译文本
function t(zhText, enText) {
    return currentLanguage === 'zh' ? zhText : enText;
}

const langButtons = document.querySelectorAll('.lang-btn');
const totalConcerts = document.getElementById('total-concerts');
const totalArtists = document.getElementById('total-artists');
const totalCities = document.getElementById('total-cities');
const concertsLabel = document.getElementById('total-label');
const artistsLabel = document.getElementById('artists-label');
const citiesLabel = document.getElementById('cities-label');
const footerText = document.getElementById('footer-text');
const siteName = document.getElementById('site-name');
const timeline = document.getElementById('timeline');
const loader = document.getElementById('loader');
const loadingText = document.getElementById('loading-text');
const modal = document.getElementById('imageModal');
const modalImage = document.getElementById('modalImage');
const modalCaption = document.getElementById('modalCaption');
const closeModal = document.getElementById('closeModal');
const prevImageBtn = document.getElementById('prevImage');
const nextImageBtn = document.getElementById('nextImage');
const cityModal = document.getElementById('cityModal');
const cityModalTitle = document.getElementById('city-modal-title');
const cityList = document.getElementById('cityList');
const closeCityModal = document.getElementById('closeCityModal');
const cityCard = document.getElementById('city-card');
const videoModal = document.getElementById('videoModal');
const videoPlayer = document.getElementById('videoPlayer');
const videoModalTitle = document.getElementById('videoModalTitle');
const closeVideoModal = document.getElementById('closeVideoModal');

function initPage() {
    // 初始化语言
    const savedLang = localStorage.getItem('concertJourneyLang');
    if (savedLang && (savedLang === 'zh' || savedLang === 'en')) {
        currentLanguage = savedLang;
    } else {
        currentLanguage = navigator.language.toLowerCase().startsWith('zh') ? 'zh' : 'en';
    }
    
    // 显示 skeleton-loader 文本
    setTimeout(() => {
        const scrambleLines = document.querySelectorAll('.scramble-line');
        
        scrambleLines.forEach((line, index) => {
            const text = line.getAttribute('data-text');
            
            // 确保元素可见
            line.style.opacity = '1';
            line.style.visibility = 'visible';
            line.style.color = '#e0e0ff';
            line.style.display = 'flex';
            
            // 直接显示文本，无动画
            line.textContent = text;
        });
    }, 100);
    
    // 应用计算属性
    applyComputedProperties(concertDataZH, showFirStr);
    applyComputedProperties(concertDataEN, '->   ');
    
    currentData = getLangData(concertDataZH, concertDataEN);
    
    // 注册 Service Worker
    if ('serviceWorker' in navigator) {
        navigator.serviceWorker.register('js/sw.js')
            .then((registration) => {
                console.log('Service Worker 注册成功:', registration.scope);
                // 监听更新
                registration.addEventListener('updatefound', () => {
                     console.log('发现新的 Service Worker 版本');
                });
            })
            .catch((error) => {
                 console.error('Service Worker 注册失败:', error);
            });
    }

    initBgMusic();
    
    // 用户交互后尝试播放音频（解决浏览器自动播放限制）
    let audioInitialized = false;
    const initAudioOnInteraction = () => {
        if (!audioInitialized && !isPlaying && bgMusic.readyState >= 2) {
            tryAutoPlay();
            audioInitialized = true;
        }
    };
    
    // 监听首次用户交互
    document.addEventListener('click', initAudioOnInteraction, { once: true });
    document.addEventListener('touchstart', initAudioOnInteraction, { once: true });
    
    updateLanguageButtons();
    updatePageContent();
    renderTimeline();
    initDataShowcase();
    init3DAlbumShowcase();
}

function updateLanguageButtons() {
    langButtons.forEach(btn => {
        btn.classList.remove('active');
        if (btn.dataset.lang === currentLanguage) {
            btn.classList.add('active');
        }
    });
}

function updatePageContent() {
    document.title = currentData.pageTitle;
    document.documentElement.lang = currentLanguage;

    document.getElementById('profile-label').textContent = currentData.profileLabel;
    document.getElementById('profile-subtitle').textContent = currentData.profileSubtitle;

    const rolesList = document.getElementById('roles-list');
    rolesList.innerHTML = '';
    currentData.roles.forEach((role, index) => {
        const li = document.createElement('li');
        li.className = 'role-item';
        li.textContent = role;
        li.addEventListener('click', function() {
            let targetElement;
            switch(index) {
                case 0:
                    targetElement = document.querySelector('.section-spacing');
                    break;
                case 1:
                    targetElement = document.getElementById('timeline');
                    break;
                case 2:
                    targetElement = document.querySelector('.stats-grid');
                    break;
                default:
                    targetElement = document.getElementById('timeline');
            }
            if (targetElement) {
                targetElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
            }
        });
        rolesList.appendChild(li);
    });

    totalConcerts.textContent = currentData.totalConcerts;
    totalArtists.textContent = currentData.totalArtists;
    totalCities.textContent = currentData.totalCities;

    concertsLabel.textContent = currentData.concertsLabel;
    artistsLabel.textContent = currentData.artistsLabel;
    citiesLabel.textContent = currentData.citiesLabel;

    footerText.textContent = currentData.footerText;
    siteName.textContent = currentData.siteName;

    cityModalTitle.textContent = currentData.modalTitle;

    loadingText.textContent = t('加载中...', 'Loading...');

    renderCityList();
}

function renderCityList() {
    cityList.innerHTML = '';

    currentData.cities.forEach(city => {
        const cityItem = document.createElement('div');
        cityItem.className = 'city-item';

        cityItem.innerHTML = `
            <div class="city-icon">${city.icon}</div>
            <div class="city-info">
                <div class="city-name">${city.name}</div>
                <div class="city-concerts">${currentLanguage === 'zh' ? '举办演唱会：' : 'Concerts: '}${city.concerts}${currentLanguage === 'zh' ? '场' : ''}</div>
            </div>
        `;

        cityList.appendChild(cityItem);
    });
}

function renderTimeline() {
    // 性能监控：开始渲染时间轴
    if ('performance' in window) {
        performance.mark('timeline-render-start');
    }
    
    loader.style.display = 'block';
    timeline.innerHTML = '';

    setTimeout(() => {
        const sortedConcerts = [...currentData.concerts].sort((a, b) => {
            return new Date(b.date) - new Date(a.date);
        });

        // 使用 DocumentFragment 批量插入 DOM，减少重排
        const fragment = document.createDocumentFragment();

        sortedConcerts.forEach((concert, index) => {
            const timelineItem = document.createElement('div');
            timelineItem.className = 'timeline-item';
            timelineItem.style.animationDelay = `${index * 0.1}s`;

            let galleryContainer = null;
            if (concert.images && concert.images.length > 0) {
                galleryContainer = document.createElement('div');
                galleryContainer.className = 'gallery';
                
                // 使用 fragment 批量创建 gallery items
                const galleryFragment = document.createDocumentFragment();
                concert.images.forEach((img, imgIndex) => {
                    const galleryItem = createGalleryItem(img, imgIndex, concert.images);
                    galleryFragment.appendChild(galleryItem);
                });
                galleryContainer.appendChild(galleryFragment);
            }

            // 创建主要内容
            const timelineContent = document.createElement('div');
            timelineContent.className = 'timeline-content';
            
            const dateDiv = document.createElement('div');
            dateDiv.className = 'concert-date';
            dateDiv.textContent = concert.date;
            timelineContent.appendChild(dateDiv);
            
            const artistH2 = document.createElement('h2');
            artistH2.className = 'concert-artist';
            artistH2.textContent = concert.artist;
            timelineContent.appendChild(artistH2);
            
            if (concert.concertName) {
                const nameDiv = document.createElement('div');
                nameDiv.className = 'concert-name';
                nameDiv.textContent = concert.concertName;
                timelineContent.appendChild(nameDiv);
            }
            
            const locationDiv = document.createElement('div');
            locationDiv.className = 'concert-location';
            locationDiv.innerHTML = `<i class="fas fa-map-marker-alt"></i> ${concert.location}`;
            timelineContent.appendChild(locationDiv);
            
            if (concert.tags && concert.tags.length > 0) {
                const tagsDiv = document.createElement('div');
                tagsDiv.className = 'concert-tags';
                
                // 使用 fragment 批量创建 tags
                const tagsFragment = document.createDocumentFragment();
                concert.tags.forEach(tag => {
                    const tagSpan = document.createElement('span');
                    tagSpan.className = 'tag';
                    tagSpan.textContent = tag;
                    tagsFragment.appendChild(tagSpan);
                });
                tagsDiv.appendChild(tagsFragment);
                timelineContent.appendChild(tagsDiv);
            }
            
            const descDiv = document.createElement('div');
            descDiv.className = 'concert-description';
            descDiv.innerHTML = concert.description;
            timelineContent.appendChild(descDiv);
            
            if (galleryContainer) {
                timelineContent.appendChild(galleryContainer);
            }
            
            // 添加视频按钮（如果有视频）
            if (concert.video) {
                const videoButton = document.createElement('button');
                videoButton.className = 'video-btn';
                videoButton.innerHTML = '<i class="fas fa-video"></i> ' + t('观看视频', 'Watch Video');
                videoButton.dataset.videoId = concert.video;
                videoButton.dataset.videoTitle = concert.artist + ' - ' + concert.concertName;
                videoButton.addEventListener('click', function() {
                    openVideoModal(this.dataset.videoId, this.dataset.videoTitle);
                });
                timelineContent.appendChild(videoButton);
            }
            
            // 添加视频跳转按钮（如果有视频URL）
            if (concert.videoUrl) {
                const videoLinkButton = document.createElement('button');
                videoLinkButton.className = 'video-link-btn';
                videoLinkButton.innerHTML = '<i class="fas fa-external-link-alt"></i> ' + t('打开视频', 'Open Video');
                videoLinkButton.dataset.videoUrl = concert.videoUrl;
                videoLinkButton.addEventListener('click', function() {
                    window.open(this.dataset.videoUrl, '_blank');
                });
                timelineContent.appendChild(videoLinkButton);
            }
            
            timelineItem.appendChild(timelineContent);
            fragment.appendChild(timelineItem);
        });
        
        // 一次性插入所有 timeline items，只触发一次重排
        timeline.appendChild(fragment);

        loader.style.display = 'none';
        
        // 隐藏骨架屏（等待 GSAP 动画完成）
        const skeletonLoader = document.getElementById('skeleton-loader');
        if (skeletonLoader) {
            // 计算最小等待时间：最后一行动画完成时间 + 缓冲
            const minWaitTime = 3000; // 3秒，确保所有 scramble-line 动画完成
            
            setTimeout(() => {
                skeletonLoader.classList.add('hide');
                setTimeout(() => {
                    skeletonLoader.style.display = 'none';
                }, 300);
            }, minWaitTime);
        }

        observeTimelineItems();
        
        // 性能监控：时间轴渲染完成
        if ('performance' in window) {
            performance.mark('timeline-render-end');
            performance.measure('timeline-render', 'timeline-render-start', 'timeline-render-end');
            
            // 打印性能指标到控制台
            const measure = performance.getEntriesByName('timeline-render')[0];
            if (measure) {
                console.log(`时间轴渲染耗时: ${measure.duration.toFixed(2)}ms`);
            }
        }
        
        // 性能监控：收集关键指标
        if ('PerformanceObserver' in window) {
            // 监控 Largest Contentful Paint (LCP)
            const lcpObserver = new PerformanceObserver((entryList) => {
                const entries = entryList.getEntries();
                const lastEntry = entries[entries.length - 1];
                console.log(`LCP: ${lastEntry.startTime}ms`);
            });
            lcpObserver.observe({ entryTypes: ['largest-contentful-paint'] });
            
            // 监控 First Input Delay (FID)
            const fidObserver = new PerformanceObserver((entryList) => {
                const entries = entryList.getEntries();
                for (const entry of entries) {
                    console.log(`FID: ${entry.processingStart - entry.startTime}ms`);
                }
            });
            fidObserver.observe({ entryTypes: ['first-input'] });
            
            // 监控 Cumulative Layout Shift (CLS)
            let clsValue = 0;
            const clsObserver = new PerformanceObserver((entryList) => {
                for (const entry of entryList.getEntries()) {
                    if (!entry.hadRecentInput) {
                        clsValue += entry.value;
                    }
                }
                console.log(`CLS: ${clsValue}`);
            });
            clsObserver.observe({ entryTypes: ['layout-shift'] });
        }
    }, 800);
}

// 安全创建画廊项（防止XSS）
function createGalleryItem(img, imgIndex, concertImages) {
    const div = document.createElement('div');
    div.className = 'gallery-item';
    
    // 生成多尺寸图片数据
    const imagesWithVariants = concertImages.map(image => ({
        ...image,
        thumb: image.src.replace('.jpg', '_thumb.jpg'),
        medium: image.src.replace('.jpg', '_medium.jpg')
    }));
    
    div.dataset.images = JSON.stringify(imagesWithVariants);
    div.dataset.index = imgIndex;
    div.addEventListener('click', handleGalleryClick);
    
    const imgElement = document.createElement('img');
    
    // 使用 srcset 提供多尺寸选择（浏览器根据设备像素密度和视口选择）
    const thumbSrc = img.src.replace('.jpg', '_thumb.jpg');
    const mediumSrc = img.src.replace('.jpg', '_medium.jpg');
    
    // 画廊预览使用缩略图，但通过 srcset 让浏览器选择最合适的
    imgElement.src = thumbSrc;  // 默认加载缩略图
    imgElement.srcset = `${thumbSrc} 120w, ${mediumSrc} 300w`;
    imgElement.sizes = "(max-width: 768px) 100px, 120px";  // 移动端100px，桌面端120px
    
    imgElement.alt = img.alt;
    imgElement.loading = 'lazy';
    imgElement.decoding = 'async';  // 异步解码，不阻塞渲染
    
    // 错误处理：增强的错误处理和重试机制
    imgElement.onerror = function() {
        this.errorCount = (this.errorCount || 0) + 1;
        
        if (this.src.includes('_thumb.jpg') || this.src.includes('_medium.jpg')) {
            // 第一次失败：尝试原图
            console.warn(`图片加载失败（尝试 ${this.errorCount}），使用原图:`, img.src);
            this.src = img.src;
            this.srcset = '';  // 清除 srcset
        } else if (this.errorCount < 3) {
            // 第二次失败：重试（带延迟）
            const retryDelay = 500 * this.errorCount;
            console.warn(`原图加载失败（尝试 ${this.errorCount}），${retryDelay}ms 后重试`);
            setTimeout(() => {
                this.src = this.src.split('?')[0] + '?retry=' + this.errorCount;
            }, retryDelay);
        } else {
            // 第三次失败：显示占位图
            console.error(`图片加载失败（尝试 ${this.errorCount}），显示占位图`);
            this.src = 'img/logo.jpg';  // 使用 logo 作为占位图
            this.onerror = null; // 停止重试
        }
    };
    
    div.appendChild(imgElement);
    return div;
}

// 画廊点击事件处理器
function handleGalleryClick(e) {
    const container = e.currentTarget;
    const images = JSON.parse(container.dataset.images);
    const startIndex = parseInt(container.dataset.index, 10);
    const currentImg = images[startIndex];
    
    // 在 modal 中使用中等尺寸图片
    openImageModal(currentImg.medium, currentImg.alt, images, startIndex);
}

function observeTimelineItems() {
    const timelineItems = document.querySelectorAll('.timeline-item');

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, { threshold: 0.1 });

    timelineItems.forEach(item => {
        observer.observe(item);
    });
}

const backToTopBtn = document.getElementById('backToTop');

window.addEventListener('scroll', function () {
    if (window.scrollY > CONFIG.SCROLL_THRESHOLD) {
        backToTopBtn.classList.add('visible');
    } else {
        backToTopBtn.classList.remove('visible');
    }
});

backToTopBtn.addEventListener('click', function () {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});

function openImageModal(src, alt, imageList = null, startIndex = 0) {
    // 使用 srcset 提供多尺寸选择
    const originalSrc = src.replace('_medium.jpg', '.jpg');
    modalImage.src = src;  // 中等尺寸作为默认
    modalImage.srcset = `${src} 800w, ${originalSrc} 1200w`;  // 中等尺寸和原图
    modalImage.sizes = "(max-width: 768px) 90vw, 800px";  // 移动端90vw，桌面端800px
    modalImage.alt = alt;
    modalCaption.textContent = alt;

    if (imageList && imageList.length > 0) {
        currentImageList = imageList;
        currentImageIndex = startIndex;
        
        // 预加载相邻图片
        preloadAdjacentImages(startIndex);
    }

    updateModalNavButtons();
    modal.classList.add('show');
    
    // 添加键盘事件监听
    document.addEventListener('keydown', handleModalKeydown);
    
    // 添加触摸手势支持
    initTouchGestures();
}

function closeImageModal() {
    modal.classList.remove('show');
    currentImageList = [];
    currentImageIndex = 0;
    
    // 移除键盘事件监听
    document.removeEventListener('keydown', handleModalKeydown);
    
    // 清理触摸手势
    cleanupTouchGestures();
}

function navigateImage(direction) {
    if (currentImageList.length === 0) return;

    currentImageIndex += direction;

    if (currentImageIndex < 0) {
        currentImageIndex = currentImageList.length - 1;
    } else if (currentImageIndex >= currentImageList.length) {
        currentImageIndex = 0;
    }

    const currentImage = currentImageList[currentImageIndex];

    modalImage.classList.add('switching');

    setTimeout(() => {
        // 在 modal 中使用中等尺寸图片，并通过 srcset 提供原图选择
        const originalSrc = currentImage.medium.replace('_medium.jpg', '.jpg');
        modalImage.src = currentImage.medium;
        modalImage.srcset = `${currentImage.medium} 800w, ${originalSrc} 1200w`;
        modalImage.alt = currentImage.alt;
        modalCaption.textContent = currentImage.alt;

        setTimeout(() => {
            modalImage.classList.remove('switching');
        }, 30);
    }, 200);

    updateModalNavButtons();
    
    // 预加载相邻图片
    preloadAdjacentImages(currentImageIndex);
}

function updateModalNavButtons() {
    if (currentImageList.length <= 1) {
        prevImageBtn.classList.add('disabled');
        nextImageBtn.classList.add('disabled');
    } else {
        prevImageBtn.classList.remove('disabled');
        nextImageBtn.classList.remove('disabled');
    }
}

// ==================== 图片查看器增强功能 ====================

// 键盘快捷键处理
function handleModalKeydown(e) {
    if (!modal.classList.contains('show')) return;
    
    switch (e.key) {
        case 'Escape':
            e.preventDefault();
            closeImageModal();
            break;
        case 'ArrowLeft':
            e.preventDefault();
            navigateImage(-1);
            break;
        case 'ArrowRight':
            e.preventDefault();
            navigateImage(1);
            break;
    }
}

// 触摸手势支持
let touchStartX = 0;
let touchStartY = 0;
let touchStartTime = 0;
let isTouching = false;

function initTouchGestures() {
    if (!('ontouchstart' in window)) return;
    
    modal.addEventListener('touchstart', handleTouchStart, { passive: true });
    modal.addEventListener('touchmove', handleTouchMove, { passive: true });
    modal.addEventListener('touchend', handleTouchEnd, { passive: true });
}

function cleanupTouchGestures() {
    modal.removeEventListener('touchstart', handleTouchStart);
    modal.removeEventListener('touchmove', handleTouchMove);
    modal.removeEventListener('touchend', handleTouchEnd);
}

// 预加载相邻图片
function preloadAdjacentImages(currentIndex) {
    if (currentImageList.length <= 1) return;
    
    const prevIndex = (currentIndex - 1 + currentImageList.length) % currentImageList.length;
    const nextIndex = (currentIndex + 1) % currentImageList.length;
    
    const imagesToPreload = [
        currentImageList[prevIndex],
        currentImageList[nextIndex]
    ];
    
    imagesToPreload.forEach(image => {
        // 预加载中等尺寸图片
        const mediumImg = new Image();
        mediumImg.src = image.medium;
        
        // 可选：预加载原图（在后台加载，不阻塞）
        const originalImg = new Image();
        originalImg.src = image.medium.replace('_medium.jpg', '.jpg');
    });
}

function handleTouchStart(e) {
    const touch = e.touches[0];
    touchStartX = touch.clientX;
    touchStartY = touch.clientY;
    touchStartTime = Date.now();
    isTouching = true;
}

function handleTouchMove(e) {
    if (!isTouching || currentImageList.length <= 1) return;
    
    const touch = e.touches[0];
    const deltaX = touch.clientX - touchStartX;
    const deltaY = touch.clientY - touchStartY;
    
    // 水平滑动切换图片
    if (Math.abs(deltaX) > Math.abs(deltaY) && Math.abs(deltaX) > 10) {
        // 添加视觉反馈
        const opacity = Math.max(0.5, 1 - Math.abs(deltaX) / 200);
        modalImage.style.opacity = opacity;
    }
}

function handleTouchEnd(e) {
    if (!isTouching || currentImageList.length <= 1) return;
    
    const touch = e.changedTouches[0];
    const deltaX = touch.clientX - touchStartX;
    const deltaY = touch.clientY - touchStartY;
    const deltaTime = Date.now() - touchStartTime;
    
    isTouching = false;
    modalImage.style.opacity = 1;
    
    // 判断是否为有效的滑动手势
    const minSwipeDistance = 50; // 最小滑动距离
    const maxSwipeTime = 1000; // 最大滑动时间
    
    if (Math.abs(deltaX) > Math.abs(deltaY) && 
        Math.abs(deltaX) > minSwipeDistance && 
        deltaTime < maxSwipeTime) {
        
        // 左滑：下一张，右滑：上一张
        const direction = deltaX > 0 ? -1 : 1;
        navigateImage(direction);
    }
}

function openCityModal() {
    cityModal.classList.add('show');
}

function closeCityModalFunc() {
    cityModal.classList.remove('show');
}

cityCard.addEventListener('click', openCityModal);

// 模态框事件处理
closeModal.addEventListener('click', closeImageModal);
modal.addEventListener('click', e => e.target === modal && closeImageModal());

closeCityModal.addEventListener('click', closeCityModalFunc);
cityModal.addEventListener('click', e => e.target === cityModal && closeCityModalFunc());

// 视频模态框控制
function openVideoModal(videoId, title) {
    if (!videoId) return;
    
    // B站嵌入URL格式
    const embedUrl = `https://player.bilibili.com/player.html?bvid=${videoId}&autoplay=1`;
    videoPlayer.src = embedUrl;
    videoModalTitle.textContent = title;
    videoModal.classList.add('show');
    
    // 阻止背景滚动
    document.body.style.overflow = 'hidden';
}

function closeVideoModalFunc() {
    videoModal.classList.remove('show');
    videoPlayer.src = '';
    
    // 恢复背景滚动
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

// 图片导航
prevImageBtn.addEventListener('click', () => navigateImage(-1));
nextImageBtn.addEventListener('click', () => navigateImage(1));

// 键盘导航
document.addEventListener('keydown', e => {
    if (modal.classList.contains('show')) {
        if (e.key === 'Escape') closeImageModal();
        else if (e.key === 'ArrowLeft' && currentImageList.length > 0) navigateImage(-1);
        else if (e.key === 'ArrowRight' && currentImageList.length > 0) navigateImage(1);
    }
    if (e.key === 'Escape') {
        closeImageModal();
        closeCityModalFunc();
    }
});

langButtons.forEach(btn => {
    btn.addEventListener('click', function () {
        const lang = this.dataset.lang;
        if (lang !== currentLanguage) {
            // 清理所有定时器
            clearAllTimers();
            
            currentLanguage = lang;
            currentData = getLangData(concertDataZH, concertDataEN);

            updateLanguageButtons();
            localStorage.setItem('concertJourneyLang', currentLanguage);
            updatePageContent();
            renderTimeline();

            if (currentData.bgMusic) {
                switchMusicSrc(currentData.bgMusic);
            }

            initDataShowcase();
            init3DAlbumShowcase();
            
            // 重新初始化并启动动态文本
            initStoriesText();
            startDynamicTextTimers();
        }
    });
});

// ==================== 全局错误处理 ====================
// 处理 JavaScript 运行时错误
window.addEventListener('error', (e) => {
  console.error('全局错误:', e.error);
  // 可以在这里添加错误上报逻辑
  // 例如：sendErrorToAnalytics(e.error)
});

// 处理未处理的 Promise 拒绝
window.addEventListener('unhandledrejection', (e) => {
  console.error('未处理的Promise拒绝:', e.reason);
  e.preventDefault(); // 防止浏览器显示错误
});

// ==================== 性能监控 ====================
// 标记关键性能节点
if ('performance' in window) {
  performance.mark('app-init-start');
}

document.addEventListener('DOMContentLoaded', () => {
  performance.mark('dom-ready');
  initPage();
  performance.mark('app-init-end');
  performance.measure('app-initialization', 'app-init-start', 'app-init-end');
});

function initBgMusic() {
    bgMusicSource.src = currentData.bgMusic || 'music/bgm_cn.mp3';
    bgMusic.load();
    
    // 预加载音频数据（使用AudioContext）
    if ('AudioContext' in window || 'webkitAudioContext' in window) {
        const audioContext = new (window.AudioContext || window.webkitAudioContext)();
        fetch(currentData.bgMusic || 'music/bgm_cn.mp3')
            .then(response => response.arrayBuffer())
            .then(data => audioContext.decodeAudioData(data))
            .catch(() => console.log('Audio preloading failed'));
    }
    
    // 延迟尝试自动播放
    setTimeout(tryAutoPlay, 500);
}

// 语言切换时清理所有定时器
function clearAllTimers() {
  timers.dynamicTexts.forEach(clearInterval);
  timers.dynamicTexts = [];
  if (timers.carousel) {
    clearInterval(timers.carousel);
    timers.carousel = null;
  }
}

// ==================== 动态文本 ====================

const dynamicText1 = document.getElementById('dynamic-text-1');
const dynamicText2 = document.getElementById('dynamic-text-2');
const dynamicText3 = document.getElementById('dynamic-text');

dynamicTextElements.push(dynamicText1, dynamicText2, dynamicText3);

// 播放高亮动画
function playHighlightAnimation() {
    dynamicText3.classList.remove('animate');
    void dynamicText3.offsetWidth;
    dynamicText3.classList.add('animate');
}

// 更新动态文本（通用函数）
function updateDynamicText(textIndex) {
    const storiesTextData = getLangData(storiesTextDataZH, storiesTextDataEN);
    const textArrays = [storiesTextData.text1, storiesTextData.text2, storiesTextData.text3];
    const textArray = textArrays[textIndex];
    const element = dynamicTextElements[textIndex];

    if (!element || textArray.length === 0) return;

    element.style.opacity = '0';
    element.style.transition = 'opacity 0.3s ease';

    setTimeout(() => {
        textIndices[textIndex] = (textIndices[textIndex] + 1) % textArray.length;
        element.textContent = textArray[textIndices[textIndex]];
        element.style.opacity = '1';

        // 第三个文本需要高亮动画
        if (textIndex === 2) {
            setTimeout(playHighlightAnimation, 100);
        }
    }, 300);
}

// 初始化文本
function initStoriesText() {
    const storiesTextData = getLangData(storiesTextDataZH, storiesTextDataEN);
    dynamicTextElements.forEach((el, i) => {
        if (el && storiesTextData[`text${i + 1}`]) {
            el.textContent = storiesTextData[`text${i + 1}`][0];
        }
    });
    setTimeout(playHighlightAnimation, 500);
}

// 监听语言切换
document.querySelectorAll('.lang-btn').forEach(btn => {
    btn.addEventListener('click', () => setTimeout(initStoriesText, 100));
});

// 页面加载初始化
initStoriesText();

// 启动动态文本定时器
function startDynamicTextTimers() {
  timers.dynamicTexts.push(
    setInterval(() => updateDynamicText(0), CONFIG.DYNAMIC_TEXT_INTERVAL),
    setInterval(() => updateDynamicText(1), CONFIG.DYNAMIC_TEXT_INTERVAL),
    setInterval(() => updateDynamicText(2), CONFIG.DYNAMIC_TEXT_INTERVAL)
  );
}

// 定时更新
startDynamicTextTimers();

// 音乐播放器控制
const bgMusic = document.getElementById('bgMusic');
const bgMusicSource = document.getElementById('bgMusicSource');
const musicToggle = document.getElementById('musicToggle');
const musicIcon = document.getElementById('musicIcon');
const musicWave = document.getElementById('musicWave');
let isPlaying = false;

// 更新音乐播放器UI状态
function updateMusicUI(playing) {
    musicToggle.classList.toggle('playing', playing);
    musicWave.classList.toggle('active', playing);
    musicIcon.className = playing ? 'fas fa-pause' : 'fas fa-music';
}

// 切换音乐源
function switchMusicSrc(musicSrc) {
    const wasPlaying = isPlaying;
    bgMusicSource.src = musicSrc;
    bgMusic.load();

    if (wasPlaying) {
        bgMusic.play().then(() => {
            bgMusic.currentTime = 0;
        }).catch(() => updateMusicUI(false));
    }
}

// 尝试自动播放
function tryAutoPlay() {
    bgMusic.volume = 0.5;
    const playPromise = bgMusic.play();

    if (playPromise !== undefined) {
        playPromise.then(() => updateMusicUI(true)).catch(() => updateMusicUI(false));
    }
}

// 切换播放/暂停
musicToggle.addEventListener('click', function() {
    if (isPlaying) {
        bgMusic.pause();
    } else {
        bgMusic.play();
    }
    isPlaying = !isPlaying;
    updateMusicUI(isPlaying);
});


// 初始化数据展示区域
function initDataShowcase() {
        // 延迟初始化懒加载，确保 DOM 已渲染
    setTimeout(initLazyLoad, 100);
}



// 创建图片项（带懒加载和占位符）
function createImageItem(item) {
    const div = document.createElement('div');
    div.className = 'image-item';

    // 使用低质量占位符 + 懒加载
    div.innerHTML = `
        <img 
            src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'%3E%3Crect fill='%23f0f0f0'/%3E%3C/svg%3E" 
            data-src="${item.img}" 
            alt="${item.title}"
            class="lazy-load"
            onerror="this.src='img/logo.jpg'"
        >
    `;

    return div;
}

// 图片懒加载 Observer
function initLazyLoad() {
    const lazyImages = document.querySelectorAll('.lazy-load');
    
    if ('IntersectionObserver' in window) {
        const imageObserver = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const img = entry.target;
                    img.src = img.dataset.src;
                    img.classList.remove('lazy-load');
                    img.classList.add('lazy-loaded');
                    imageObserver.unobserve(img);
                }
            });
        }, { rootMargin: '200px' }); // 提前 200px 开始加载，减少白屏

        lazyImages.forEach(img => imageObserver.observe(img));
    } else {
        // 兼容不支持 IntersectionObserver 的浏览器
        lazyImages.forEach(img => {
            img.src = img.dataset.src;
        });
    }
}

// ==================== 3D专辑展示功能 ====================
function init3DAlbumShowcase() {
    // 检查是否存在专辑展示区域
    const albumStack = document.getElementById('albumStack');
    if (!albumStack) return;
    
    // 清理旧的轮播定时器（防止语言切换时多个轮播同时运行）
    if (timers.carousel) {
        clearInterval(timers.carousel);
        timers.carousel = null;
    }
    
    // 移除旧的事件监听器（防止重复绑定）
    const newAlbumStack = albumStack.cloneNode(true);
    albumStack.parentNode.replaceChild(newAlbumStack, albumStack);
    
    // 清空现有内容（用于语言切换时重新初始化）
    newAlbumStack.innerHTML = '';
    
    // 设备检测
    const isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
    const isSmallScreen = window.innerWidth <= 768;
    
    // 根据设备调整动画参数
    const ANIMATION_DURATION = isMobile ? 0.7 : 1.0;
    const ANIMATION_EASE = isMobile ? "power2.out" : "power3.inOut";
    
    // 从 concertDataZH.concerts 转换专辑数据
    const albums = currentData.concerts.map(concert => ({
        id: concert.id,
        title: concert.concertName,
        subtitle: concert.artist,
        date: concert.date,
        intro: concert.theme,
        image: concert.poster
    }));

    // 当前选中的专辑索引
    let currentAlbumIndex = 0;
    
    // 触摸滑动变量
    let touchStartX = 0;
    let touchStartY = 0;
    let touchEndX = 0;
    let touchEndY = 0;
    
    // 生成专辑卡片
    albums.forEach((album, index) => {
        const card = document.createElement('div');
        card.className = 'album-card';
        card.id = `album-${album.id}`;
        card.dataset.index = index;
        
        card.innerHTML = `
            <div class="album-cover">
                <img class="album-cover-img" src="${album.image}" alt="${album.title}">
            </div>
        `;
        
        newAlbumStack.appendChild(card);
        
        // 点击事件
        card.addEventListener('click', () => {
            selectAlbum(index);
        });
    });

    // 初始化专辑堆叠
    function initAlbumStack() {
        applyCarouselLayout(0);
        // 初始化详情面板显示第一个专辑的信息
        if (albums.length > 0) {
            const firstAlbum = albums[0];
            document.getElementById('detailTitle').textContent = firstAlbum.title;
            document.getElementById('detailSubtitle').textContent = firstAlbum.subtitle;
            document.getElementById('detailDate').textContent = `${firstAlbum.date} `;
            document.getElementById('albumIntro').textContent = firstAlbum.intro;
        }
    }

    // 旋转视图布局参数
    const carouselParams = {
        radius: isSmallScreen ? 220 : 320,
        selectedX: isSmallScreen ? 100 : 200,
        selectedY: isSmallScreen ? 40 : 90,
        selectedScale: isSmallScreen ? 1.3 : 1.4
    };
    
    // 应用旋转视图布局
    function applyCarouselLayout(selectedIndex = 0) {
        const cards = document.querySelectorAll('.album-card');
        const { radius, selectedX, selectedY, selectedScale } = carouselParams;
        
        cards.forEach((card, i) => {
            const isSelected = i === selectedIndex;
            const diff = Math.abs(i - selectedIndex);
            const scale = isSmallScreen ? (0.85 - diff * 0.06) : (0.9 - diff * 0.05);
            
            if (isSelected) {
                gsap.to(card, {
                    duration: ANIMATION_DURATION,
                    x: selectedX,
                    y: selectedY,
                    z: radius + 50,
                    rotationY: 0,
                    rotationX: 0,
                    scale: selectedScale,
                    ease: ANIMATION_EASE
                });
                card.style.zIndex = cards.length + 1;
            } else {
                const angle = (i / cards.length) * Math.PI * 2;
                gsap.to(card, {
                    duration: ANIMATION_DURATION,
                    x: Math.sin(angle) * radius,
                    y: 0,
                    z: Math.cos(angle) * radius - radius,
                    rotationY: (angle * 180 / Math.PI) - 90,
                    rotationX: 0,
                    scale: Math.max(scale, 0.6),
                    ease: ANIMATION_EASE
                });
                card.style.zIndex = cards.length - diff;
            }
        });
    }

    // 选择专辑 - 旋转视图布局
    function selectAlbum(index) {
        if (index === currentAlbumIndex) return;
        
        currentAlbumIndex = index;
        const selectedAlbum = albums[index];
        
        // 更新详情面板
        document.getElementById('detailTitle').textContent = selectedAlbum.title;
        document.getElementById('detailSubtitle').textContent = selectedAlbum.subtitle;
        document.getElementById('detailDate').textContent = `${selectedAlbum.date} `;
        document.getElementById('albumIntro').textContent = selectedAlbum.intro;
        
        // 应用旋转视图布局
        applyCarouselLayout(index);
    }

    // 触摸滑动事件
    newAlbumStack.addEventListener('touchstart', function(e) {
        touchStartX = e.touches[0].clientX;
        touchStartY = e.touches[0].clientY;
    }, { passive: true });
    
    newAlbumStack.addEventListener('touchend', function(e) {
        touchEndX = e.changedTouches[0].clientX;
        touchEndY = e.changedTouches[0].clientY;
        
        const diffX = touchStartX - touchEndX;
        const diffY = touchStartY - touchEndY;
        
        if (Math.abs(diffX) > Math.abs(diffY) && Math.abs(diffX) > 40) {
            if (diffX > 0 && currentAlbumIndex < albums.length - 1) {
                selectAlbum(currentAlbumIndex + 1);
            } else if (diffX < 0 && currentAlbumIndex > 0) {
                selectAlbum(currentAlbumIndex - 1);
            }
        }
    }, { passive: true });

    // 窗口大小变化处理
    let resizeTimeout;
    window.addEventListener('resize', function() {
        clearTimeout(resizeTimeout);
        resizeTimeout = setTimeout(function() {
            applyCarouselLayout(currentAlbumIndex);
        }, 250);
    });

    // 页面加载完成动画
    setTimeout(() => {
        // 初始动画序列
        gsap.from(".album-stack-container", { 
            duration: 1.3, 
            x: isSmallScreen ? 0 : -40, 
            opacity: 0, 
            delay: 0.5, 
            ease: "back.out(1.6)" 
        });
        
        gsap.from(".detail-panel", { 
            duration: 1.3, 
            x: isSmallScreen ? 0 : 40, 
            opacity: 0, 
            delay: 0.7, 
            ease: "back.out(1.6)" 
        });
    }, 100);
    
    // 初始化专辑堆叠
    initAlbumStack();
    
    // 自动轮播 - 无限循环
    timers.carousel = setInterval(() => {
        const nextIndex = (currentAlbumIndex + 1) % albums.length;
        selectAlbum(nextIndex);
    }, CONFIG.CAROUSEL_INTERVAL);
    
    // 鼠标悬停停止轮播
    newAlbumStack.addEventListener('mouseenter', () => {
        if (timers.carousel) {
            clearInterval(timers.carousel);
            timers.carousel = null;
        }
    });
    
    // 鼠标移出恢复轮播
    newAlbumStack.addEventListener('mouseleave', () => {
        if (!timers.carousel) {
            timers.carousel = setInterval(() => {
                const nextIndex = (currentAlbumIndex + 1) % albums.length;
                selectAlbum(nextIndex);
            }, CONFIG.CAROUSEL_INTERVAL);
        }
    });
}