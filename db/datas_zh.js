var showFirStr = "->   ";

// 从基础数据生成中文数据
function generateZHData() {
    const concerts = concertsBaseData.concerts.map(concert => ({
        id: concert.id,
        artist: concert.artist.zh,
        concertName: concert.concertName.zh,
        theme: concert.theme.zh,
        location: concert.location.zh,
        date: concert.date,
        poster: concert.poster,
        tags: concert.tags.zh,
        description: concert.description.zh,
        images: concert.images.map(img => ({
            src: img.src,
            alt: img.alt.zh
        }))
    }));
    
    const cities = citiesBaseData.map(city => ({
        name: city.name.zh,
        concerts: city.concerts,
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
