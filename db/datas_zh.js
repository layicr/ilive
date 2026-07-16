const showFirStr = "->   ";

// 从基础数据生成中文数据
function generateZHData() {
    const concerts = concertsBaseData.concerts.map(concert => ({
        id: concert.id,
        artist: concert.artist.zh,
        concertName: concert.concertName.zh,
        theme: concert.theme.zh,
        location: concert.location.zh,
        seat: concert.seat ? concert.seat.zh : null,
        price: concert.price ? concert.price.zh : null,
        date: concert.date,
        poster: concert.poster,
        tags: concert.tags.zh,
        description: concert.description.zh,
        images: concert.images.map(img => ({
            src: img.src,
            alt: img.alt.zh
        })),
        video: concert.video ? concert.video.zh : null,
        videoUrl: concert.videoUrl ? concert.videoUrl.zh : null,
        songlist: processSonglist(concert.songlist, 'zh')
    }));

    // 计算每个城市的演唱会数量
    const cityConcertCounts = {};
    const cityNames = citiesBaseData.map(c => c.name.zh);

    concerts.forEach(concert => {
        // 遍历所有城市名称，找到位置字符串中包含的城市
        for (const cityName of cityNames) {
            if (concert.location.includes(cityName)) {
                cityConcertCounts[cityName] = (cityConcertCounts[cityName] || 0) + 1;
                break;
            }
        }
    });

    const cities = citiesBaseData.map(city => ({
        name: city.name.zh,
        concerts: cityConcertCounts[city.name.zh] || 0,
        icon: city.icon
    }));

    return { concerts, cities };
}

const { concerts: concertsZH, cities: citiesZH } = generateZHData();

const concertDataZH = {
    pageTitle: "Layicr演唱会足迹",
    bgMusic: "music/bgm_cn.mp3", // 中文版本背景音乐
    profileLabel: "我的名字是:",
    profileSubtitle: "这是我们的演唱会，也是你的故事。",

    concertsLabel: "场次",
    artistsLabel: "艺人",
    citiesLabel: "城市",
    footerText: "",
    siteName: "Layicr",
    modalTitle: "演唱会城市",
    ticketModalTitle: "演唱会足迹",

    // 按钮文本
    buttons: {
        songlist: "查看歌单",
        watchVideo: "观看视频",
        openVideo: "打开视频",
        backToTop: "返回顶部",
        feedback: "反馈问题"
    },

    // 工具提示文本
    tooltips: {
        musicToggle: "播放/暂停背景音乐",
        musicToggleAria: "播放/暂停背景音乐",
        feedback: "反馈问题",
        feedbackAria: "反馈问题到GitHub",
        backToTop: "返回顶部",
        backToTopAria: "返回页面顶部"
    },

    // 加载和状态文本
    status: {
        loading: "加载中..."
    },

    // 歌单文本
    songlist: {
        totalSongs: "共 {count} 首歌曲",
        searchPlaceholder: "搜索歌曲..."
    },

    // 反馈URL参数
    feedback: {
        urlTitle: "[问题反馈]",
        urlBody: "问题描述：%0A%0A请在此处详细描述您遇到的问题..."
    },

    // 城市列表文本
    cityList: {
        concertsPrefix: "举办演唱会：",
        concertsSuffix: "场"
    },

    // 许愿墙文本
    wishWall: {
        title: "许愿墙",
        countPrefix: "已有 ",
        countSuffix: " 个心愿",
        emptyMessage: "还没有人许愿，来做第一个许愿的人吧！"
    },

    // 时间格式文本
    timeFormat: {
        justNow: "刚刚",
        minutesAgo: "分钟前",
        hoursAgo: "小时前",
        daysAgo: "天前"
    },

    // 错误提示文本
    errorMessages: {
        generic: "操作失败，请稍后重试",
        network: "网络连接失败，请检查网络",
        loadFailed: "加载失败，请刷新页面",
        musicPlay: "音乐播放失败",
        imageLoad: "图片加载失败"
    },

    cities: citiesZH,
    concerts: concertsZH
};


const storiesTextDataZH = {
    text1: [
        "说真的，",
        "一抹蓝，",
        "争朝夕，"
    ],
    text2: [
        "",
        "",
        ""
    ],
    text3: [
        "似有若无的坦荡，强迫我们成长。",
        "路上的脚印，永远不会停歇。",
        "抬头仰望的世界，是不是难以到达？"
    ]
};

const roleTextsZH = {
    declaration: "宣言？   xuān yán？",
    concertsLabel: "演唱会",
    citiesLabel: "城市"
};

const wishesDataZH = [
    {
        content: "希望家人和兄弟们身体健康，平安喜乐",
        time: "2005-01-01 00:00:00",
        likes: 100,
        liked: true
    },
    {
        content: "林俊杰演唱会",
        time: "2025-01-01 00:00:00",
        likes: 30,
        liked: true
    },
    {
        content: "阿杜演唱会",
        time: "2025-02-01 00:00:00",
        likes: 28,
        liked: true
    },
    {
        content: "F4演唱会",
        time: "2025-05-01 00:00:00",
        likes: 20,
        liked: true
    },
    {
        content: "梁静茹演唱会",
        time: "2025-06-01 00:00:00",
        likes: 20,
        liked: true
    },
     {
        content: "谢霆锋演唱会",
        time: "2025-06-01 00:00:00",
        likes: 30,
        liked: true
    },
     {
        content: "张学友演唱会",
        time: "2025-07-01 00:00:00",
        likes: 30,
        liked: true
    },
     {
        content: "陶喆演唱会",
        time: "2025-07-01 00:00:00",
        likes: 30,
        liked: true
    },
    {
        content: "刘若英演唱会",
        time: "2025-07-01 00:00:00",
        likes: 30,
        liked: true
    },
    {
        content: "李宗盛演唱会",
        time: "2025-07-01 00:00:00",
        likes: 30,
        liked: true
    },
    {
        content: "汪峰演唱会",
        time: "2025-07-01 00:00:00",
        likes: 30,
        liked: true
    },
    {
        content: "朴树演唱会",
        time: "2025-07-01 00:00:00",
        likes: 30,
        liked: true
    },
    {
        content: "周华健演唱会",
        time: "2025-07-01 00:00:00",
        likes: 30,
        liked: true
    },
    {
        content: "张震岳演唱会",
        time: "2025-07-01 00:00:00",
        likes: 30,
        liked: true
    },
    {
        content: "王心凌演唱会",
        time: "2025-07-01 00:00:00",
        likes: 30,
        liked: true
    },
    {
        content: "杨丞琳演唱会",
        time: "2025-07-01 00:00:00",
        likes: 30,
        liked: true
    },
    {
        content: "薛之谦演唱会",
        time: "2025-07-01 00:00:00",
        likes: 30,
        liked: true
    },
    {
        content: "小虎队演唱会",
        time: "2025-07-01 00:00:00",
        likes: 30,
        liked: true
    },
    {
        content: "5566演唱会",
        time: "2025-07-01 00:00:00",
        likes: 30,
        liked: true
    },
    {
        content: "王杰演唱会",
        time: "2025-07-01 00:00:00",
        likes: 30,
        liked: true
    },
    {
        content: "陈小春演唱会",
        time: "2025-07-01 00:00:00",
        likes: 30,
        liked: true
    }
];
