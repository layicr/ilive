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
    
    const cities = citiesBaseData.map(city => ({
        name: city.name.en,
        concerts: city.concerts,
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
