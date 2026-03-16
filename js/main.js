
// ==================== 状态变量 ====================
let currentLanguage = 'zh';
let currentData = concertDataZH;
let currentImageList = [];
let currentImageIndex = 0;

// 图表相关状态
let chartInstance = null;
let currentChartIndex = 0;
let rotationInterval = null;
let countdownInterval = null;

// 动态文本状态
let textIndices = [0, 0, 0];
const dynamicTextElements = [];

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

function initPage() {
    // 初始化语言
    const savedLang = localStorage.getItem('concertJourneyLang');
    if (savedLang && (savedLang === 'zh' || savedLang === 'en')) {
        currentLanguage = savedLang;
    } else {
        currentLanguage = navigator.language.toLowerCase().startsWith('zh') ? 'zh' : 'en';
    }
    currentData = getLangData(concertDataZH, concertDataEN);

    initBgMusic();
    updateLanguageButtons();
    updatePageContent();
    renderTimeline();
    initDataShowcase();
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
    loader.style.display = 'block';
    timeline.innerHTML = '';

    setTimeout(() => {
        const sortedConcerts = [...currentData.concerts].sort((a, b) => {
            return new Date(b.date) - new Date(a.date);
        });

        sortedConcerts.forEach((concert, index) => {
            const timelineItem = document.createElement('div');
            timelineItem.className = 'timeline-item';
            timelineItem.style.animationDelay = `${index * 0.1}s`;

            let imagesHTML = '';
            if (concert.images && concert.images.length > 0) {
                imagesHTML = '<div class="gallery">';
                concert.images.forEach((img, imgIndex) => {
                    const imageData = JSON.stringify(concert.images).replace(/'/g, "\\'");
                    imagesHTML += `
                        <div class="gallery-item" onclick='openImageModal("${img.src}", "${img.alt}", ${imageData}, ${imgIndex})'>
                            <img src="${img.src}" alt="${img.alt}" loading="lazy">
                        </div>
                    `;
                });
                imagesHTML += '</div>';
            }

            timelineItem.innerHTML = `
                <div class="timeline-content">
                    <div class="concert-date">${concert.date}</div>
                    <h2 class="concert-artist">${concert.artist}</h2>
                    <div class="concert-name">${concert.concertName || ''}</div>
                    <div class="concert-location">
                        <i class="fas fa-map-marker-alt"></i> ${concert.location}
                    </div>
                    ${concert.tags && concert.tags.length > 0 ? `
                        <div class="concert-tags">
                            ${concert.tags.map(tag => `<span class="tag">${tag}</span>`).join('')}
                        </div>
                    ` : ''}
                    <div class="concert-description">${concert.description}</div>
                    ${imagesHTML}
                </div>
            `;

            timeline.appendChild(timelineItem);
        });

        loader.style.display = 'none';

        observeTimelineItems();
    }, 800);
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
    if (window.scrollY > 300) {
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
    modalImage.src = src;
    modalImage.alt = alt;
    modalCaption.textContent = alt;

    if (imageList && imageList.length > 0) {
        currentImageList = imageList;
        currentImageIndex = startIndex;
    }

    updateModalNavButtons();
    modal.classList.add('show');
}

function closeImageModal() {
    modal.classList.remove('show');
    currentImageList = [];
    currentImageIndex = 0;
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
        modalImage.src = currentImage.src;
        modalImage.alt = currentImage.alt;
        modalCaption.textContent = currentImage.alt;

        setTimeout(() => {
            modalImage.classList.remove('switching');
        }, 30);
    }, 200);

    updateModalNavButtons();
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
        }
    });
});

document.addEventListener('DOMContentLoaded', () => initPage());

function initBgMusic() {
    bgMusicSource.src = currentData.bgMusic || 'music/bgm_cn.mp3';
    bgMusic.load();
    setTimeout(tryAutoPlay, 500);
}

window.openImageModal = openImageModal;

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

// 定时更新
setInterval(() => updateDynamicText(0), 4000);
setInterval(() => updateDynamicText(1), 4000);
setInterval(() => updateDynamicText(2), 4000);

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

// ==================== 数据展示区域：图片墙 + 图表 ====================

// 初始化数据展示区域
function initDataShowcase() {
    initImageWallFromConcerts();
    initChart();
}

// 初始化图片墙（从 concerts 数据读取）
function initImageWallFromConcerts() {
    const column1Track = document.getElementById('column1-track');
    const column2Track = document.getElementById('column2-track');

    if (!column1Track || !column2Track) return;

    column1Track.innerHTML = '';
    column2Track.innerHTML = '';

    // 从 concerts 数据构建海报数据
    const posterData = currentData.concerts.map(c => ({
        id: c.id,
        artist: c.artist,
        title: c.concertName || c.artist + ' Concert',
        img: c.poster || (c.images && c.images[0] ? c.images[0].src : '')
    }));

    // 三组数据实现交替滚动效果
    // column1: 正向 [1,2,3,4,5,1,2,3,4,5]
    // column2: 反向 [5,4,3,2,1,5,4,3,2,1]
    // column3: 打乱后正向 [随机,随机,随机,随机,随机,随机,随机,随机,随机,随机]
    const column1Data = [...posterData, ...posterData];
    const column2Data = [...posterData].reverse().concat([...posterData].reverse());
    
    // 打乱 column3 的顺序
    const shuffledPosterData = [...posterData].sort(() => Math.random() - 0.5);
    const column3Data = [...shuffledPosterData, ...shuffledPosterData];

    // 获取第三列元素
    const column3Track = document.getElementById('column3-track');

    // 填充 column1（正向滚动：从第一张到最后一张）
    column1Data.forEach(item => {
        column1Track.appendChild(createImageItem(item));
    });

    // 填充 column2（反向滚动：从最后一张到第一张）
    column2Data.forEach(item => {
        column2Track.appendChild(createImageItem(item));
    });

    // 填充 column3（正向滚动：从第一张到最后一张）
    if (column3Track) {
        column3Data.forEach(item => {
            column3Track.appendChild(createImageItem(item));
        });
    }

    // 滚动时间：一组图片的时间，无限循环
    const itemCount = posterData.length;
    const scrollDuration = itemCount * 3;

    column1Track.style.animationDuration = `${scrollDuration}s`;
    column1Track.style.animationIterationCount = 'infinite';
    column1Track.style.animationTimingFunction = 'linear';

    column2Track.style.animationDuration = `${scrollDuration}s`;
    column2Track.style.animationIterationCount = 'infinite';
    column2Track.style.animationTimingFunction = 'linear';

    if (column3Track) {
        column3Track.style.animationDuration = `${scrollDuration}s`;
        column3Track.style.animationIterationCount = 'infinite';
        column3Track.style.animationTimingFunction = 'linear';
    }
}

// 创建图片项
function createImageItem(item) {
    const div = document.createElement('div');
    div.className = 'image-item';

    div.innerHTML = `
        <img src="${item.img}" alt="${item.title}" onerror="this.src='img/logo.jpg'">
    `;

    return div;
}

// 初始化图表
function initChart() {
    const chartContainer = document.getElementById('chart-container');
    if (!chartContainer) return;

    if (chartInstance) {
        chartInstance.dispose();
    }

    chartInstance = echarts.init(chartContainer);
    renderProvinceChart();

    window.addEventListener('resize', () => chartInstance?.resize());
}

// 渲染省份分布图表
function renderProvinceChart() {
    const provinceData = {};
    currentData.concerts.forEach(concert => {
        const province = concert.location.split('·')[0].trim();
        provinceData[province] = (provinceData[province] || 0) + 1;
    });

    const colors = ['#3498db', '#2ecc71', '#e74c3c', '#f39c12', '#9b59b6', '#1abc9c', '#d35400', '#16a085'];

    const option = {
        tooltip: {
            trigger: 'item',
            formatter: `{b} : {c} ${t('场', '')} ({d}%)`
        },
        legend: {
            top: 'bottom',
            left: 'center',
            textStyle: { color: '#7f8c8d', fontSize: 11 }
        },
        series: [{
            name: t('省份分布', 'Province'),
            type: 'pie',
            radius: ['35%', '65%'],
            avoidLabelOverlap: false,
            itemStyle: {
                borderRadius: 8,
                borderColor: '#fff',
                borderWidth: 2
            },
            label: { show: false, position: 'center' },
            emphasis: {
                label: {
                    show: true,
                    fontSize: 14,
                    fontWeight: 'bold',
                    color: '#2c3e50'
                }
            },
            labelLine: { show: false },
            data: Object.entries(provinceData).map(([name, value], index) => ({
                name,
                value,
                itemStyle: { color: colors[index % colors.length] }
            }))
        }]
    };

    chartInstance.setOption(option);
}