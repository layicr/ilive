
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