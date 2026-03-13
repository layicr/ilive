
let currentLanguage = 'zh';
let currentData = concertDataZH;
let currentImageList = [];
let currentImageIndex = 0;

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
    const savedLang = localStorage.getItem('concertJourneyLang');
    if (savedLang && (savedLang === 'zh' || savedLang === 'en')) {
        currentLanguage = savedLang;
        currentData = currentLanguage === 'zh' ? concertDataZH : concertDataEN;
    } else {
        const browserLang = navigator.language.toLowerCase();
        currentLanguage = browserLang.startsWith('zh') ? 'zh' : 'en';
        currentData = currentLanguage === 'zh' ? concertDataZH : concertDataEN;
    }

    updateLanguageButtons();

    updatePageContent();
    renderTimeline();
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
    currentData.roles.forEach(role => {
        const li = document.createElement('li');
        li.className = 'role-item';
        li.textContent = role;
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

    loadingText.textContent = currentLanguage === 'zh' ? '加载中...' : 'Loading...';

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

closeModal.addEventListener('click', closeImageModal);
prevImageBtn.addEventListener('click', () => navigateImage(-1));
nextImageBtn.addEventListener('click', () => navigateImage(1));
modal.addEventListener('click', function (e) {
    if (e.target === modal) {
        closeImageModal();
    }
});

document.addEventListener('keydown', function (e) {
    if (modal.classList.contains('show')) {
        if (e.key === 'Escape') {
            closeImageModal();
        } else if (e.key === 'ArrowLeft' && currentImageList.length > 0) {
            navigateImage(-1);
        } else if (e.key === 'ArrowRight' && currentImageList.length > 0) {
            navigateImage(1);
        }
    }
});

closeCityModal.addEventListener('click', closeCityModalFunc);
cityModal.addEventListener('click', function (e) {
    if (e.target === cityModal) {
        closeCityModalFunc();
    }
});

langButtons.forEach(btn => {
    btn.addEventListener('click', function () {
        const lang = this.dataset.lang;
        if (lang !== currentLanguage) {
            currentLanguage = lang;
            currentData = currentLanguage === 'zh' ? concertDataZH : concertDataEN;

            updateLanguageButtons();

            localStorage.setItem('concertJourneyLang', currentLanguage);

            updatePageContent();
            renderTimeline();
            
            // 切换音乐
            if (currentData.bgMusic) {
                switchMusicSrc(currentData.bgMusic);
            }
        }
    });
});

document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape') {
        closeImageModal();
        closeCityModalFunc();
    }
});

document.addEventListener('DOMContentLoaded', function () {
    initPage();
});

window.openImageModal = openImageModal;




let currentIndex1 = 0;
let currentIndex2 = 0;
let currentIndex3 = 0;

const dynamicText1 = document.getElementById('dynamic-text-1');
const dynamicText2 = document.getElementById('dynamic-text-2');
const dynamicText3 = document.getElementById('dynamic-text');

// 第一行动态文本
function updateText1() {
    const storiesTextData = currentLanguage === 'zh' ? storiesTextDataZH : storiesTextDataEN;
    const textArray = storiesTextData.text1;

    dynamicText1.style.opacity = '0';
    dynamicText1.style.transition = 'opacity 0.3s ease';

    setTimeout(() => {
        currentIndex1 = (currentIndex1 + 1) % textArray.length;
        dynamicText1.textContent = textArray[currentIndex1];
        dynamicText1.style.opacity = '1';
    }, 300);
}

// 第二行动态文本
function updateText2() {
    const storiesTextData = currentLanguage === 'zh' ? storiesTextDataZH : storiesTextDataEN;
    const textArray = storiesTextData.text2;

    dynamicText2.style.opacity = '0';
    dynamicText2.style.transition = 'opacity 0.3s ease';

    setTimeout(() => {
        currentIndex2 = (currentIndex2 + 1) % textArray.length;
        dynamicText2.textContent = textArray[currentIndex2];
        dynamicText2.style.opacity = '1';
    }, 300);
}

// 第三行动态文本（带高亮动画）
function playHighlightAnimation() {
    dynamicText3.classList.remove('animate');
    void dynamicText3.offsetWidth;
    dynamicText3.classList.add('animate');
}

function updateText3() {
    const storiesTextData = currentLanguage === 'zh' ? storiesTextDataZH : storiesTextDataEN;
    const textArray = storiesTextData.text3;

    dynamicText3.style.opacity = '0';
    dynamicText3.style.transition = 'opacity 0.3s ease';

    setTimeout(() => {
        currentIndex3 = (currentIndex3 + 1) % textArray.length;
        dynamicText3.textContent = textArray[currentIndex3];
        dynamicText3.style.opacity = '1';

        setTimeout(() => {
            playHighlightAnimation();
        }, 100);
    }, 300);
}

// 初始化文本
function initStoriesText() {
    const storiesTextData = currentLanguage === 'zh' ? storiesTextDataZH : storiesTextDataEN;
    dynamicText1.textContent = storiesTextData.text1[0];
    dynamicText2.textContent = storiesTextData.text2[0];
    dynamicText3.textContent = storiesTextData.text3[0];

    setTimeout(() => {
        playHighlightAnimation();
    }, 500);
}

// 监听语言切换
document.querySelectorAll('.lang-btn').forEach(btn => {
    btn.addEventListener('click', function () {
        setTimeout(() => {
            initStoriesText();
        }, 100);
    });
});

// 页面加载初始化
initStoriesText();

// 定时更新
setInterval(updateText1, 4000);
setInterval(updateText2, 4000);
setInterval(updateText3, 4000);

// 音乐播放器控制
const bgMusic = document.getElementById('bgMusic');
const bgMusicSource = document.getElementById('bgMusicSource');
const musicToggle = document.getElementById('musicToggle');
const musicIcon = document.getElementById('musicIcon');
const musicWave = document.getElementById('musicWave');
let isPlaying = false;

// 切换音乐源
function switchMusicSrc(musicSrc) {
    const wasPlaying = isPlaying;
    const currentTime = bgMusic.currentTime;
    
    bgMusicSource.src = musicSrc;
    bgMusic.load();
    
    if (wasPlaying) {
        bgMusic.play().then(() => {
            bgMusic.currentTime = 0;
        }).catch(() => {
            isPlaying = false;
            musicToggle.classList.remove('playing');
            musicWave.classList.remove('active');
            musicIcon.className = 'fas fa-music';
        });
    }
}

// 尝试自动播放（可能会被浏览器阻止）
function tryAutoPlay() {
    bgMusic.volume = 0.5;
    const playPromise = bgMusic.play();
    
    if (playPromise !== undefined) {
        playPromise.then(() => {
            // 自动播放成功
            isPlaying = true;
            musicToggle.classList.add('playing');
            musicWave.classList.add('active');
            musicIcon.className = 'fas fa-pause';
        }).catch(() => {
            // 自动播放被阻止，需要用户交互
            isPlaying = false;
            musicToggle.classList.remove('playing');
            musicWave.classList.remove('active');
            musicIcon.className = 'fas fa-music';
        });
    }
}

// 切换播放/暂停
musicToggle.addEventListener('click', function() {
    if (isPlaying) {
        bgMusic.pause();
        musicToggle.classList.remove('playing');
        musicWave.classList.remove('active');
        musicIcon.className = 'fas fa-music';
    } else {
        bgMusic.play();
        musicToggle.classList.add('playing');
        musicWave.classList.add('active');
        musicIcon.className = 'fas fa-pause';
    }
    isPlaying = !isPlaying;
});

// 页面加载后尝试自动播放
document.addEventListener('DOMContentLoaded', function() {
    // 设置初始音乐源
    bgMusicSource.src = currentData.bgMusic || 'music/bgm_cn.mp3';
    bgMusic.load();
    
    setTimeout(tryAutoPlay, 500);
});