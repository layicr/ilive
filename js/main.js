 // ========== 初始化页面 ==========
  $(document).ready(function() {
    // 设置页面标题
    document.title = travelData.pageTitle;
    $('.sidebar-title').text(travelData.sidebarTitle);
    $('.timeline-title span').text(travelData.mainTitle);

    // 渲染左侧地点列表
    renderLocationList();
    
    // 渲染时间轴
    renderTimeline();
    
    // 绑定事件
    bindEvents();
    
    // 默认激活第一个地点
    $('.location-item').first().addClass('active');
    showLocationDetail(1);
});

// ========== 渲染左侧地点列表 ==========
function renderLocationList() {
    const $container = $('#locationListContainer');
    $container.empty();
    
    travelData.locations.forEach(location => {
        const $item = $(`
            <div class="location-item" data-id="${location.id}">
                <div class="location-name">
                    <span>${location.name}</span>
                    <span class="date-tag">${location.date}</span>
                </div>
            </div>
        `);
        $container.append($item);
    });
}

// ========== 渲染时间轴 ==========
function renderTimeline() {
    const $container = $('#timelineContainer');
    $container.empty();
    
    travelData.locations.forEach(location => {
        const $item = $(`
            <div class="timeline-item" data-id="${location.id}">
                <div class="timeline-dot"></div>
                <div class="timeline-content">
                    <div class="timeline-date">${location.date}</div>
                    <div class="timeline-desc">${location.description}</div>
                    <button class="view-img-btn" data-id="${location.id}">查看照片</button>
                    <div class="timeline-img-container" id="imgContainer-${location.id}">
                        <div class="img-slider" id="imgSlider-${location.id}">
                            ${location.images.map((img, index) => `
                                <img src="${img.src}" alt="${img.alt}" class="slider-img ${index === 0 ? 'active' : ''}" data-index="${index}">
                            `).join('')}
                        </div>
                        <div class="thumbnail-container" id="thumbnailContainer-${location.id}">
                            ${location.images.map((img, index) => `
                                <img src="${img.thumbnail}" alt="${img.alt}" class="thumbnail ${index === 0 ? 'active' : ''}" data-index="${index}" data-id="${location.id}">
                            `).join('')}
                        </div>
                        <div class="img-count" id="imgCount-${location.id}">
                            1/${location.images.length}
                        </div>
                        <button class="slider-btn prev-btn" data-id="${location.id}">&lt;</button>
                        <button class="slider-btn next-btn" data-id="${location.id}">&gt;</button>
                    </div>
                </div>
            </div>
        `);
        $container.append($item);
    });
}

// ========== 绑定事件 ==========
function bindEvents() {
    // 左侧地点点击事件
    $('.location-item').on('click', function() {
        const locationId = $(this).data('id');
        $('.location-item').removeClass('active');
        $(this).addClass('active');
        showLocationDetail(locationId);
    });

    // 查看图片按钮点击事件
    $('.view-img-btn').on('click', function() {
        const locationId = $(this).data('id');
        $(`#imgContainer-${locationId}`).slideToggle(300);
    });

    // 轮播图切换按钮事件
    $('.slider-btn').on('click', function() {
        const locationId = $(this).data('id');
        const $slider = $(`#imgSlider-${locationId}`);
        const $thumbnails = $(`#thumbnailContainer-${locationId} .thumbnail`);
        const $count = $(`#imgCount-${locationId}`);
        const isNext = $(this).hasClass('next-btn');
        
        let currentIndex = $slider.find('.slider-img.active').data('index');
        const total = $slider.find('.slider-img').length;
        
        currentIndex = isNext 
            ? (currentIndex + 1) % total 
            : (currentIndex - 1 + total) % total;
        
        // 更新轮播图
        $slider.find('.slider-img').removeClass('active');
        $slider.find(`.slider-img[data-index="${currentIndex}"]`).addClass('active');
        
        // 更新缩略图
        $thumbnails.removeClass('active');
        $thumbnails.filter(`[data-index="${currentIndex}"]`).addClass('active');
        
        // 更新计数
        $count.text(`${currentIndex + 1}/${total}`);
    });

    // 缩略图点击事件
    $('.thumbnail').on('click', function() {
        const locationId = $(this).data('id');
        const index = $(this).data('index');
        const $slider = $(`#imgSlider-${locationId}`);
        const $thumbnails = $(`#thumbnailContainer-${locationId} .thumbnail`);
        const $count = $(`#imgCount-${locationId}`);
        
        // 更新轮播图
        $slider.find('.slider-img').removeClass('active');
        $slider.find(`.slider-img[data-index="${index}"]`).addClass('active');
        
        // 更新缩略图
        $thumbnails.removeClass('active');
        $(this).addClass('active');
        
        // 更新计数
        $count.text(`${index + 1}/${$slider.find('.slider-img').length}`);
    });

    // 图片预览弹窗相关事件
    // 点击轮播图打开弹窗
    $('.slider-img').on('click', function() {
        const src = $(this).attr('src');
        const locationId = $(this).closest('.timeline-item').data('id');
        const index = $(this).data('index');
        
        $('#modalImg').attr('src', src);
        $('#imgModal').fadeIn(300).css({
            display: 'flex'
        });
        
        // 存储当前弹窗的图片信息
        $('#imgModal').data({
            locationId: locationId,
            currentIndex: index,
            total: travelData.locations.find(loc => loc.id === locationId).images.length
        });
    });

    // 关闭弹窗
    $('#closeModal').on('click', function() {
        $('#imgModal').fadeOut(300);
    });

    // 弹窗点击空白处关闭
    $('#imgModal').on('click', function(e) {
        if (e.target === this) {
            $(this).fadeOut(300);
        }
    });

    // 弹窗图片导航
    $('.modal-nav').on('click', function() {
        const $modal = $('#imgModal');
        const locationId = $modal.data('locationId');
        let currentIndex = $modal.data('currentIndex');
        const total = $modal.data('total');
        const isNext = $(this).hasClass('modal-next');
        
        // 计算新索引
        currentIndex = isNext 
            ? (currentIndex + 1) % total 
            : (currentIndex - 1 + total) % total;
        
        // 获取新图片地址
        const newImg = travelData.locations.find(loc => loc.id === locationId).images[currentIndex];
        $('#modalImg').attr('src', newImg.src).attr('alt', newImg.alt);
        
        // 更新弹窗数据
        $modal.data('currentIndex', currentIndex);
    });

    // 键盘导航（左右箭头）
    $(document).on('keydown', function(e) {
        const $modal = $('#imgModal');
        if ($modal.is(':visible')) {
            if (e.key === 'ArrowLeft') {
                $('.modal-prev').click();
            } else if (e.key === 'ArrowRight') {
                $('.modal-next').click();
            } else if (e.key === 'Escape') {
                $('#closeModal').click();
            }
        }
    });
}

// ========== 显示地点详情 ==========
function showLocationDetail(locationId) {
    // 滚动到对应的时间轴项目
    const $timelineItem = $(`.timeline-item[data-id="${locationId}"]`);
    if ($timelineItem.length) {
        $('html, body').animate({
            scrollTop: $timelineItem.offset().top - 100
        }, 500);
    }
}