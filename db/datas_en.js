const concertDataEN = {
    pageTitle: "layicr's Concert Trail",
    bgMusic: "music/bgm_en.mp3", // English version background music
    profileLabel: "My name is:",
    profileSubtitle: "This is our concert, and it’s your story。",
    roles: [
        showFirStr + "Declaration?",
        showFirStr + totalConcertsVal + "   （Concerts）",
        showFirStr + totalCitiesVal + "   （Cities）"
    ],
    totalConcerts: totalConcertsVal,
    totalArtists: totalArtistsVal,
    totalCities: totalCitiesVal,
    concertsLabel: "Concerts",
    artistsLabel: "Artists",
    citiesLabel: "Cities",
    footerText: "",
    siteName: "layicr",
    modalTitle: "Tour Cities",
    cities: [
        { name: "Beijing", concerts: 1, icon: "🏙️" },
        { name: "Nanjing", concerts: 1, icon: "🍁" },
        { name: "Nanchang", concerts: 1, icon: "🌅" },
        { name: "Qingyuan", concerts: 1, icon: "🏞️" },
        { name: "Nanning", concerts: 2, icon: "🌴" },
        { name: "Shenzhen", concerts: 1, icon: "🌃" },
        { name: "Foshan", concerts: 1, icon: "🎪" },
        { name: "Xi'an", concerts: 1, icon: "⛩️" }
    ],
    concerts: [
        {
            id: 1,
            artist: "Wu Bai",
            location: "Jiangxi · Nanchang",
            date: "2026.01",
            tags: ["KTV", "Conductor", "Fans", "Concert", "Wu Bai", "Rock", "Youth", "Last Dance"],
            description: "It was a massive KTV session,<br/>With an outstanding conductor,<br/>One addictive song after another,<br/>A crowd of fans who were already singing along,<br/><br/>This was our concert,<br/>It always started with Wu Bai leading the way,<br/>And left the rest entirely up to us,<br/>We had long ago engraved the lyrics into our bones,<br/>In the synchronized rock of tens of thousands,<br/>We sang our youth to its most vivid expression,<br/><br/>Let it rise first,<br/>The 『Last Dance』 lost on Side B of the cassette,,,",
            images: [
                { src: "concert/202601/01/00.jpg", alt: "Wu Bai Concert" },
                { src: "concert/202601/01/01.jpg", alt: "Wu Bai Concert" },
                { src: "concert/202601/01/02.jpg", alt: "Wu Bai Concert" },
                { src: "concert/202601/01/03.jpg", alt: "Wu Bai Concert" },
                { src: "concert/202601/01/04.jpg", alt: "Wu Bai Concert" },
                { src: "concert/202601/01/05.jpg", alt: "Wu Bai Concert" },
                { src: "concert/202601/01/06.jpg", alt: "Wu Bai Concert" }

            ]
        },
        {
            id: 2,
            artist: "Li Ronghao",
            location: "Guangdong · Qingyuan",
            date: "2026.01",
            tags: ["Ballad", "Li Ronghao", "Sea-Land Breeze", "Motorcycle", "Bauhinia in Bloom", "Hong Kong", "Travel", "Backpacker", "Taiwan", "Eluanbi", "Pacific Ocean", "Ocean Sound"],
            description: "This trip ended with some regrets after all,<br/>I didn't get to hear a live performance of 『Ballad』.<br/>Instead, a song called 『Sea-Land Breeze』,<br/>Gently captured my heart,<br/>Sea-Land Breeze?<br/>Was it the blue skies and white clouds,<br/>Riding along National Highway 228 on a motorcycle with headphones on,<br/>That rhythmic breath rushing towards your face?<br/><br/>What kind of wind was that really?<br/>Or was it a directionless madness?<br/> I don't know,<br/><br/> 『Bauhinia in Full Bloom』,<br/>I also like this song very much,<br/>It was a work commemorating the 25th anniversary of HK's return to the motherland,<br/>Over the past decade or so, I've visited many major cities,<br/>But I still haven't set foot in HK,<br/>It takes an attitude to step into someone else's world,<br/><br/>On the way back, I suddenly remembered,<br/> Myself from many years ago,<br/> When I was still a backpacker,<br/> At Taiwan's southernmost point, Eluanbi,<br/> I once recorded the sound of the Pacific Ocean,<br/>So then, listening as I walk,,,",
            images: [
                { src: "concert/202601/02/00.jpg", alt: "Li Ronghao Concert" },
                { src: "concert/202601/02/01.jpg", alt: "Li Ronghao Concert" },
                { src: "concert/202601/02/02.jpg", alt: "Li Ronghao Concert" },
                { src: "concert/202601/02/03.jpg", alt: "Li Ronghao Concert" },
                { src: "concert/202601/02/04.jpg", alt: "Li Ronghao Concert" },
                { src: "concert/202601/02/05.jpg", alt: "Li Ronghao Concert" }
            ]
        },
        {
            id: 3,
            artist: "G.E.M.",
            location: "Guangxi · Nanning",
            date: "2025.11",
            tags: ["G.E.M.", "Bubbles", "Tornado", "The One", "Memory", "Emotion", "Time"],
            description: "When familiar melodies like 『Bubbles』, 『Tornado』, 『The One』 slowly began to play,<br/>  The familiar rhythm instantly struck a chord in my heart,<br/>  I couldn't help but sing along loudly,<br/>       Those long-sealed, distant memories were gently awakened,       <br/>  The emotions and fragments hidden within time,       <br/>  All slowly surfaced within the songs,<br/> <br/>       A song never truly ends,<br/>    『See, I still remember.』",
            images: [
                { src: "concert/202511/01/00.jpg", alt: "G.E.M. Concert" },
                { src: "concert/202511/01/01.jpg", alt: "G.E.M. Concert" },
                { src: "concert/202511/01/02.jpg", alt: "G.E.M. Concert" },
                { src: "concert/202511/01/03.jpg", alt: "G.E.M. Concert" },
                { src: "concert/202511/01/05.jpg", alt: "G.E.M. Concert" },
                { src: "concert/202511/01/06.jpg", alt: "G.E.M. Concert" }
            ]
        },
        {
            id: 4,
            artist: "Steve Chou",
            location: "Guangxi · Nanning",
            date: "2025.11",
            tags: ["Walking CD", "Xiao Gang", "Love Song", "Steve Chou", "Dusk", "Notebook", "Regret", "Meet Again"],
            description: "When the walking CD played live,<br/>The charm of love songs was amplified to the extreme,<br/>Xiao Gang's voice, inherently full of deep emotion,<br/>Every note seemed to tell a story,<br/>That fearless young man never left,<br/>He is hidden in the trailing note of 『Dusk』,<br/>He waits right at the folded page of 『Notebook』,<br/>Those who remember fondly,<br/>Will always use music as a bridge,<br/>For a reunion that transcends time,<br/><br/>  Every line of the chorus,<br/>  Hides the regrets and tenderness of youth,<br/>  So let's meet again,,,",
            images: [
                {
                    src: "concert/202511/02/00.jpg",
                    alt: "Steve Chou Concert"
                },
                {
                    src: "concert/202511/02/01.jpg",
                    alt: "Steve Chou Concert"
                },
                {
                    src: "concert/202511/02/02.jpg",
                    alt: "Steve Chou Concert"
                },
                {
                    src: "concert/202511/02/03.jpg",
                    alt: "Steve Chou Concert"
                },
                {
                    src: "concert/202511/02/04.jpg",
                    alt: "Steve Chou Concert"
                }
                ,
                {
                    src: "concert/202511/02/05.jpg",
                    alt: "Steve Chou Concert"
                }
                ,
                {
                    src: "concert/202511/02/06.jpg",
                    alt: "Steve Chou Concert"
                }

            ]
        },
        {
            id: 5,
            artist: "Stefanie Sun",
            location: "Guangdong · Shenzhen",
            date: "2025.05",
            tags: ["What I Miss", "Stefanie Sun", "Lost", "Courage", "Move Forward", "Mass Chorus", "Growth"],
            description: "This stumbling journey of life, <br/>Sometimes I feel perhaps I am nothing at all,<br/>Or perhaps I should grasp all of the past,<br/>And charge forward once more with reckless abandon,<br/>Starting from now,<br/>Everything begins after sunset,<br/><br/>When the intro of 『What I Miss』 echoed in the night,   <br/>The starlight tonight caught all our stumbles,        <br/>As if someone suddenly understood your diary,          <br/>Carrying the sincerity and courage of the past,          <br/>Making peace with the stumbling self of yesteryears,         <br/>The synchronized chorus of tens of thousands in the venue,          <br/>We,     <br/>Once again rush headlong towards the road ahead,,,",
            images: [
                {
                    src: "concert/202505/00.jpg",
                    alt: "Stefanie Sun Concert"
                },
                {
                    src: "concert/202505/02.jpg",
                    alt: "Stefanie Sun Concert"
                },
                {
                    src: "concert/202505/03.jpg",
                    alt: "Stefanie Sun Concert"
                }
                ,
                {
                    src: "concert/202505/04.jpg",
                    alt: "Stefanie Sun Concert"
                }
                ,
                {
                    src: "concert/202505/05.jpg",
                    alt: "Stefanie Sun Concert"
                }
            ]
        },
        {
            id: 6,
            artist: "Richie Jen",
            location: "Guangdong · Foshan",
            date: "2024.12",
            tags: ["Brother Qi", "Youth Memories", "Healing", "Growth", "Friendship", "Middle Age", "Nostalgia", "Richie Jen", "Tape Player", "Coastal Town", "Midsummer", "Companion"],
            description: "The moment Brother Qi's songs began to play,<br/>So many memories were picked up, youth came rushing back,<br/>My heart was healed just like that,<br/>This, is a scene never tires of watching,<br/>This, is a blissful thing.<br/><br/>Adolescence is abstract,<br/>In youth, we were like lunatics,<br/>Reaching middle age, we seem more like madmen,<br/>In our teens, we were as plain as boiled water, every day much the same,<br/>In our twenties, we said we had no money, maybe buy a box of instant noodles to get through the month,<br/>In our thirties, one day you said when we turn thirty-eight, I can treat you to a glass of Moutai,<br/><br/>Muttering,<br/>Two almost-forty-year-old boys, made a date to listen to an almost-sixty-year-old sing,<br/>That night,<br/>A belated encounter, how much youth did you reclaim,<br/>Off-key,<br/>Those years, in a small southern coastal town, an old triangular tape player spun music,<br/>Tiny,<br/>Under the swaying trees of midsummer, us two blockheads, with just a spot of ground,<br/>Fold in half,<br/>There is a warmth called 『I'm still here』,<br/>You see,<br/>The world we look up to, isn't it that hard to reach?",
            images: [
                {
                    src: "concert/202412/00.jpg",
                    alt: "Richie Jen Concert"
                },
                {
                    src: "concert/202412/01.jpg",
                    alt: "Richie Jen Concert"
                },
                {
                    src: "concert/202412/02.jpg",
                    alt: "Richie Jen Concert"
                },
                {
                    src: "concert/202412/03.jpg",
                    alt: "Richie Jen Concert"
                },
                {
                    src: "concert/202412/04.jpg",
                    alt: "Richie Jen Concert"
                }
            ]
        },
        {
            id: 7,
            artist: "Wu Bai",
            location: "Jiangsu · Nanjing",
            date: "2023.10",
            tags: ["Wu Bai", "Ticket Snatching", "Outside Venue", "Regret", "Struggle", "Friendship", "Nostalgia", "Music Fan", "Persistence"],
            description: "That year, working on a project, busy every day shuttling between two points,<br/>Slept on the sofa for a full six months,<br/>Played Wu Bai's songs every day in the lobby,<br/>Got quite a few complaints from the guys.<br/>Coincidentally, Wu Bai had a concert in Nanjing around that time,<br/>Didn't manage to snag concert tickets, but did get train tickets,<br/>Ended up grabbing a small stool and rushing straight to the venue,<br/><br/>Awesome,<br/>Spent two hundred to go listen to Wu Bai sing Wu Bai's songs outside Wu Bai's concert,<br/>The biggest regret in life,<br/>Is hearing Wu Bai sing properly, so properly,,,",
            images: [
                {
                    src: "concert/202310/00.jpg",
                    alt: "Wu Bai Concert"
                }
            ]
        },
        {
            id: 8,
            artist: "Eason Chan",
            location: "Beijing · Bird's Nest",
            date: "2016.10",
            tags: ["Eason Chan", "Bird's Nest", "Elimination", "Ten Years", "Your Backpack", "Glow Stick", "Long Time No See"],
            description: "Beijing in late summer, early autumn,<br/>The lingering summer heat still clung to the rainy air,<br/>That night,<br/>I walked through the bustling crowd into the Bird's Nest,<br/>Just to attend a Eason Chan concert,<br/> <br/>When the lights dimmed,<br/>And the music began to play,<br/>He stood in the light.<br/> Sang 『Elimination』,<br/>Sang 『Ten Years』,<br/>Sang 『Your Backpack』.<br/>   Those melodies replayed a thousand times in headphones,<br/>      Now given physical form,<br/>    Glow sticks converged into a sea of stars,<br/>The collective breath and chorus of nearly fifty thousand people,<br/>       I realized then those songs had long been etched into the youth of so many.  <br/> <br/>   The most beautiful part was still when he softly said:<br/>     『Long time no see.』",
            images: [
                {
                    src: "concert/201610/01.jpg",
                    alt: "Eason Chan Concert"
                },
                {
                    src: "concert/201610/02.jpg",
                    alt: "Eason Chan Concert"
                },
                {
                    src: "concert/201610/03.jpg",
                    alt: "Eason Chan Concert"
                }

            ]
        },
        {
            id: 9,
            artist: "Mayday",
            location: "Shaanxi · Xi'an",
            date: "2016.09",
            tags: ["Fans", "DSLR", "Mayday", "Love-ing", "Encore", "Mass Chorus", "Tenderness", "Don't Disturb"],
            description: "Looking at the little brother next to me holding binoculars,      <br/>『Excuse me, are you a hardcore fan?』    <br/>「Bro, I'm a fake fan, my girlfriend is the hardcore one」       <br/>『ohh~~~, then I'm a fake fan too. I don't know many songs』       <br/>「Bro, I don't either」       <br/>『ohh~~~』     <br/>In the end,   <br/>From the first song to the last,<br/>I held up a DSLR recording the entire concert, full of the guy's singing next to me, <br/>His girlfriend also recorded all night, her camera pointed at her boyfriend beside her, <br/>All fake fans indeed,  <br/><br/>I've always felt,  <br/>I'm not a proper Wumii (Mayday fan), <br/>Unlike the lovely people around me singing along from the first to the last song, <br/>I just sat quietly listening,   <br/>The hundred-thousand-person chorus of 『Love-ing』, <br/>Raising phones as glow sticks for 『Tenderness』, <br/>Following the encore, encore, the final song,  <br/><br/>In that summer beyond others' reach,  <br/>Wind blows, rain falls, Under the vicissitudes of time,  <br/>Please be well,<br/>We ourselves are the audience,,,<br/>Please don't disturb, <br/>Those gentle lovers,,,",
            images: [
                {
                    src: "concert/201609/01.jpg",
                    alt: "Mayday Concert"
                }
                ,
                {
                    src: "concert/201609/02.jpg",
                    alt: "Mayday Concert"
                }
                ,
                {
                    src: "concert/201609/03.jpg",
                    alt: "Mayday Concert"
                }
                ,
                {
                    src: "concert/201609/04.jpg",
                    alt: "Mayday Concert"
                },
                {
                    src: "concert/201609/05.jpg",
                    alt: "Mayday Concert"
                }
            ]
        }
    ]
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