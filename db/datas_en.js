// 从基础数据生成英文数据
function generateENData() {
    const concerts = concertsBaseData.concerts.map(concert => ({
        id: concert.id,
        artist: concert.artist.en,
        concertName: concert.concertName.en,
        theme: concert.theme.en,
        location: concert.location.en,
        date: concert.date,
        poster: concert.poster,
        tags: concert.tags.en,
        description: concert.description.en,
        images: concert.images.map(img => ({
            src: img.src,
            alt: img.alt.en
        })),
        video: concert.video ? concert.video.en : null,
        videoUrl: concert.videoUrl ? concert.videoUrl.en : null
    }));

    // 计算每个城市的演唱会数量
    const cityConcertCounts = {};
    const cityNames = citiesBaseData.map(c => c.name.en);

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
        name: city.name.en,
        concerts: cityConcertCounts[city.name.en] || 0,
        icon: city.icon
    }));

    return { concerts, cities };
}

const { concerts: concertsEN, cities: citiesEN } = generateENData();

const concertDataEN = {
    pageTitle: "layicr's Concert Trail",
    bgMusic: "music/bgm_en.mp3", // English version background music
    profileLabel: "My name is:",
    profileSubtitle: "This is our concert, and it's your story。",

    concertsLabel: "Concerts",
    artistsLabel: "Artists",
    citiesLabel: "Cities",
    footerText: "",
    siteName: "layicr",
    modalTitle: "Tour Cities",
    cities: citiesEN,
    concerts: concertsEN
};

const storiesTextDataEN = {
    text1: [
        "To be honest,",
        "A touch of blue,",
        "Seize the day,"
    ],
    text2: [
        "",
        "",
        ""
    ],
    text3: [
        "An elusive kind of candor pushes us to grow.",
        "Footprints on the road will never cease.",
        "Is the world we look up to so hard to reach?"
    ]
};

const roleTextsEN = {
    declaration: "Declaration?",
    concertsLabel: "Concerts",
    citiesLabel: "Cities"
};

const wishesDataEN = [
    {
        content: "Hope my family and brothers stay healthy and safe",
        time: "2005-01-01 00:00:00",
        likes: 100,
        liked: true
    },
    {
        content: "JJ Lin Concert",
        time: "2025-01-01 00:00:00",
        likes: 30,
        liked: true
    },
    {
        content: "A-Do Concert",
        time: "2025-02-01 00:00:00",
        likes: 28,
        liked: true
    },
    {
        content: "Power Station Concert",
        time: "2025-03-01 00:00:00",
        likes: 25,
        liked: true
    },
    {
        content: "F4 Concert",
        time: "2025-05-01 00:00:00",
        likes: 20,
        liked: true
    },
    {
        content: "Fish Leong Concert",
        time: "2025-06-01 00:00:00",
        likes: 20,
        liked: true
    },
    {
        content: "Nicholas Tse Concert",
        time: "2025-06-01 00:00:00",
        likes: 30,
        liked: true
    },
    {
        content: "Jacky Cheung Concert",
        time: "2025-07-01 00:00:00",
        likes: 30,
        liked: true
    },
    {
        content: "David Tao Concert",
        time: "2025-07-01 00:00:00",
        likes: 30,
        liked: true
    },
    {
        content: "Lee Ann Rimes Concert",
        time: "2025-07-01 00:00:00",
        likes: 30,
        liked: true
    },
    {
        content: "Jonathan Lee Concert",
        time: "2025-07-01 00:00:00",
        likes: 30,
        liked: true
    },
    {
        content: "Wang Feng Concert",
        time: "2025-07-01 00:00:00",
        likes: 30,
        liked: true
    },
    {
        content: "Pu Shu Concert",
        time: "2025-07-01 00:00:00",
        likes: 30,
        liked: true
    },
    {
        content: "Wakin Chau Concert",
        time: "2025-07-01 00:00:00",
        likes: 30,
        liked: true
    },
    {
        content: "Ayal Kom Concert",
        time: "2025-07-01 00:00:00",
        likes: 30,
        liked: true
    },
    {
        content: "Cyndi Wang Concert",
        time: "2025-07-01 00:00:00",
        likes: 30,
        liked: true
    },
    {
        content: "Rainie Yang Concert",
        time: "2025-07-01 00:00:00",
        likes: 30,
        liked: true
    },
    {
        content: "Joker Xue Concert",
        time: "2025-07-01 00:00:00",
        likes: 30,
        liked: true
    },
    {
        content: "Xiao Hu Dui Concert",
        time: "2025-07-01 00:00:00",
        likes: 30,
        liked: true
    },
    {
        content: "5566 Concert",
        time: "2025-07-01 00:00:00",
        likes: 30,
        liked: true
    },
    {
        content: "Wang Jie Concert",
        time: "2025-07-01 00:00:00",
        likes: 30,
        liked: true
    },
    {
        content: "Andy Lau Concert",
        time: "2025-07-01 00:00:00",
        likes: 30,
        liked: true
    }
];
