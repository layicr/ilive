// 演唱会基础数据（多语言结构）
const concertsBaseData = {
    concerts: [
        {
            id: 1,
            artist: { zh: "伍佰", en: "Wu Bai" },
            concertName: { zh: "Rock Star 2", en: "Rock Star 2" },
            theme: {
                zh: "伍佰宣告演唱会以 \"怎么酷怎么排\" 为最高准则，展开一场反套路的摇滚美学实验。他强调 \"这是我们的演唱会，不是我的演唱会\"，将歌迷视为 \"特别来宾\"。演出融合铜管乐、电子音效与现代舞，对经典曲目进行全新改编，旨在打造跨越代际的 \"万人KTV\" 现场。",
                en: "Wu Bai declares that the concert follows the principle of 'however cool it can be arranged', launching an anti-routine rock aesthetic experiment. He emphasizes 'this is our concert, not mine,' treating fans as 'special guests.' The performance blends brass instruments, electronic sound effects, and modern dance, offering fresh reinterpretations of classic tracks to create an intergenerational '10,000-person KTV' experience."
            },
            location: { zh: "江西 · 南昌 · 南昌国际体育中心", en: "Jiangxi · Nanchang" },
            date: "2026.01",
            poster: "concert/poster/20260109.jpg",
            tags: {
                zh: ["KTV", "指挥家", "歌友", "伍佰", "摇滚", "青春", "Last Dance", "Rock Star 2"],
                en: ["KTV", "Conductor", "Fans", "Wu Bai", "Rock", "Youth", "Last Dance", "Rock Star 2"]
            },
            description: {
                zh: "一场大型的ktv，<br/>一位优秀指挥家，<br/>一首首让人上头歌曲，<br/>一群群已开麦歌友们，<br/><br/>这是我们的演唱会，<br/>从来都是伍佰起个头，<br/>剩下的全交给我们，<br/>我们早把歌词刻进骨血，<br/>在万人同频摇滚里，<br/>把青春唱到淋漓尽致，<br/><br/>先卷起，<br/>遗失在卡带B面的《Last Dance》，，，",
                en: "It was a massive KTV session,<br/>With an outstanding conductor,<br/>One addictive song after another,<br/>A crowd of fans who were already singing along,<br/><br/>This was our concert,<br/>It always started with Wu Bai leading the way,<br/>And left the rest entirely up to us,<br/>We had long ago engraved the lyrics into our bones,<br/>In the synchronized rock of tens of thousands,<br/>We sang our youth to its most vivid expression,<br/><br/>Let it rise first,<br/>The 『Last Dance』 lost on Side B of the cassette,,," 
            },
            images: [
                { src: "concert/202601/01/00.jpg", alt: { zh: "伍佰演唱会", en: "Wu Bai Concert" } },
                { src: "concert/202601/01/01.jpg", alt: { zh: "伍佰演唱会", en: "Wu Bai Concert" } },
                { src: "concert/202601/01/02.jpg", alt: { zh: "伍佰演唱会", en: "Wu Bai Concert" } },
                { src: "concert/202601/01/03.jpg", alt: { zh: "伍佰演唱会", en: "Wu Bai Concert" } },
                { src: "concert/202601/01/04.jpg", alt: { zh: "伍佰演唱会", en: "Wu Bai Concert" } },
                { src: "concert/202601/01/05.jpg", alt: { zh: "伍佰演唱会", en: "Wu Bai Concert" } },
                { src: "concert/202601/01/06.jpg", alt: { zh: "伍佰演唱会", en: "Wu Bai Concert" } }
            ],
            video: {
                zh: "BV1ZuQqBaEBm",
                en: "BV1ZuQqBaEBm"
            },
            videoUrl: {
                zh: "https://space.bilibili.com/29825132/lists/7719548",
                en: "https://space.bilibili.com/29825132/lists/7719548"
            }
        },
        {
            id: 2,
            artist: { zh: "李荣浩", en: "Li Ronghao" },
            concertName: { zh: "黑马", en: "Dark Horse" },
            theme: {
                zh: "主题源自其第八张创作专辑《黑马》，旨在传递 \"黑马不是不合群，是听天不由命，我们每个人都是一匹黑马\" 的精神。舞台中心矗立巨型黑马艺术装置，整场演出是一场关于坚持、梦想与自我突破的音乐叙事，旨在唤醒每个人心中的潜能。",
                en: "The theme originates from his eighth original album 'Dark Horse,' aiming to convey the spirit that 'a dark horse isn't antisocial, but refuses to accept fate. Each of us is a dark horse.' A giant dark horse art installation stands at the center of the stage, making the entire show a musical narrative about perseverance, dreams, and self-breakthrough, awakening the potential within everyone."
            },
            location: { zh: "广东 · 清远 · 清远体育中心体育场", en: "Guangdong · Qingyuan" },
            date: "2026.01",
            poster: "concert/poster/20260102.jpg",
            tags: {
                zh: ["歌谣", "李荣浩", "海陆风", "机车", "紫荆花盛开", "香港", "旅行", "背包客", "台湾", "鹅銮鼻", "太平洋", "黑马"],
                en: ["Ballad", "Li Ronghao", "Sea-Land Breeze", "Motorcycle", "Bauhinia in Bloom", "Hong Kong", "Travel", "Backpacker", "Taiwan", "Eluanbi", "Pacific Ocean", "Ocean Sound","Dark Horse"]
            },
            description: {
                zh: "此行终究是有些遗憾，<br/>未能听到《歌谣》的live。<br/>倒是一首《海陆风》，<br/>浅浅地抓住了我，<br/>海陆风？<br/>是否蓝天白云，<br/>沿着228国道，<br/>戴耳机骑机车，<br/>迎面扑来的那种富有节奏的呼吸？<br/><br/>那到底是什么的风？<br/>还是不知方向的疯？<br/> 我不知道，<br/><br/> 《紫荆花盛开》，<br/>这歌我也十分喜欢，<br/>是献礼HK回归祖国25周年作品，<br/>对于HK，近十几年去过各大城市，<br/>可HK却始终还没踏足，<br/>去别人世界转转是需要态度，<br/><br/>回程时忽然想起，<br/> 很多年前的我，<br/> 那时还是背包客，<br/> 在台湾极南点鹅銮鼻，<br/> 曾录下一段太平洋的海声，<br/>那就，边听边走，，，",
                en: "This trip ended with some regrets after all,<br/>I didn't get to hear a live performance of 『Ballad』.<br/>Instead, a song called 『Sea-Land Breeze』,<br/>Gently captured my heart,<br/>Sea-Land Breeze?<br/>Was it the blue skies and white clouds,<br/>Riding along National Highway 228 on a motorcycle with headphones on,<br/>That rhythmic breath rushing towards your face?<br/><br/>What kind of wind was that really?<br/>Or was it a directionless madness?<br/> I don't know,<br/><br/> 『Bauhinia in Full Bloom』,<br/>I also like this song very much,<br/>It was a work commemorating the 25th anniversary of HK's return to the motherland,<br/>Over the past decade or so, I've visited many major cities,<br/>But I still haven't set foot in HK,<br/>It takes an attitude to step into someone else's world,<br/><br/>On the way back, I suddenly remembered,<br/> Myself from many years ago,<br/> When I was still a backpacker,<br/> At Taiwan's southernmost point, Eluanbi,<br/> I once recorded the sound of the Pacific Ocean,<br/>So then, listening as I walk,,," 
            },
            images: [
                { src: "concert/202601/02/00.jpg", alt: { zh: "李荣浩演唱会", en: "Li Ronghao Concert" } },
                { src: "concert/202601/02/01.jpg", alt: { zh: "李荣浩演唱会", en: "Li Ronghao Concert" } },
                { src: "concert/202601/02/02.jpg", alt: { zh: "李荣浩演唱会", en: "Li Ronghao Concert" } },
                { src: "concert/202601/02/03.jpg", alt: { zh: "李荣浩演唱会", en: "Li Ronghao Concert" } },
                { src: "concert/202601/02/04.jpg", alt: { zh: "李荣浩演唱会", en: "Li Ronghao Concert" } },
                { src: "concert/202601/02/05.jpg", alt: { zh: "李荣浩演唱会", en: "Li Ronghao Concert" } }
            ],
            video: {
                zh: "BV1ADfCB5EYL",
                en: "BV1ADfCB5EYL"
            },
            videoUrl: {
                zh: "https://space.bilibili.com/29825132/lists/7719488",
                en: "https://space.bilibili.com/29825132/lists/7719488"
            }
        },
        {
            id: 3,
            artist: { zh: "邓紫棋", en: "G.E.M." },
            concertName: { zh: "I AM GLORIA 2.0", en: "I AM GLORIA 2.0" },
            theme: {
                zh: "\"I AM GLORIA\"是邓紫棋暌违六年举办的巡演。她表示，在这六年间世界发生了巨大变化，肆虐的疫情、接二连三的他国战争以及各种天灾人祸，导致许多人都像行走在荒漠里，在迷惘中渴望着驱散黑暗的曙光。邓紫棋希望可以通过歌声诉说自己经历孤独黑暗、渴望光明和自我救赎的过程，用音乐激荡人们的心灵。",
                en: "I AM GLORIA is G.E.M.'s tour after a six-year hiatus. She says that during these six years, the world has changed dramatically. The rampant pandemic, successive wars in other countries, and various natural and man-made disasters have left many people walking through a desert, longing for light that dispels darkness in confusion. G.E.M. hopes to use her voice to tell her story of experiencing loneliness and darkness, yearning for light and self-redemption, inspiring people's souls through music."
            },
            location: { zh: "广西 · 南宁 · 广西体育中心体育场", en: "Guangxi · Nanning" },
            date: "2025.11",
            poster: "concert/poster/20251130.jpg",
            tags: {
                zh: ["邓紫棋", "泡沫", "龙卷风", "唯一", "记忆", "情感", "时光", "I AM GLORIA"],
                en: ["G.E.M.", "Bubbles", "Tornado", "The One", "Memory", "Emotion", "I AM GLORIA"]
            },
            description: {
                zh: "当《泡沫》、《龙卷风》、《唯一》，一首首熟悉的旋律缓缓响起，<br/>  熟悉的节奏瞬间叩击心房，<br/> 我忍不住放声跟唱，<br/>      那些尘封已久的久远记忆被轻轻唤醒，       <br/> 那些藏在时光里的情绪与片段，       <br/> 都在歌声里慢慢浮现，<br/> <br/>      歌永远不会真正结束，<br/>    『看，我都还记得。』",
                en: "When familiar melodies like 『Bubbles』, 『Tornado』, 『The One』 slowly began to play,<br/>  The familiar rhythm instantly struck a chord in my heart,<br/>  I couldn't help but sing along loudly,<br/>       Those long-sealed, distant memories were gently awakened,       <br/>  The emotions and fragments hidden within time,       <br/>  All slowly surfaced within the songs,<br/> <br/>       A song never truly ends,<br/>    『See, I still remember.』" 
            },
            images: [
                { src: "concert/202511/01/00.jpg", alt: { zh: "邓紫棋演唱会", en: "G.E.M. Concert" } },
                { src: "concert/202511/01/01.jpg", alt: { zh: "邓紫棋演唱会", en: "G.E.M. Concert" } },
                { src: "concert/202511/01/02.jpg", alt: { zh: "邓紫棋演唱会", en: "G.E.M. Concert" } },
                { src: "concert/202511/01/03.jpg", alt: { zh: "邓紫棋演唱会", en: "G.E.M. Concert" } },
                { src: "concert/202511/01/05.jpg", alt: { zh: "邓紫棋演唱会", en: "G.E.M. Concert" } },
                { src: "concert/202511/01/06.jpg", alt: { zh: "邓紫棋演唱会", en: "G.E.M. Concert" } }
            ],
            video: {
                zh: "BV1g9Q6BFEMe",
                en: "BV1g9Q6BFEMe"
            },
            videoUrl: {
                zh: "https://space.bilibili.com/29825132/lists/7719554",
                en: "https://space.bilibili.com/29825132/lists/7719554"
            }
        },
        {
            id: 4,
            artist: { zh: "周传雄", en: "Steve Chou" },
            concertName: { zh: "念念不忘・再遇见", en: "Unforgettable・Reunion" },
            theme: {
                zh: "主题寓意\"念念不忘，必有回响\"。这是周传雄的首轮大型体育场巡演，旨在以 \"庆典\" 为核心概念，与歌迷进行一场盛大的重逢。演唱会带领观众在《黄昏》、《寂寞沙洲冷》等时代金曲中，与曾经的自己温柔相拥，重温青春记忆。",
                en: "The theme implies 'if you never forget, there will be an echo.' This is Steve Chou's first large-scale stadium tour, aiming to use 'celebration' as the core concept for a grand reunion with fans. The concert leads the audience through timeless classics like 'Twilight' and 'Lonely Sandbar Cold,' gently embracing their former selves and reliving youthful memories."
            },
            location: { zh: "广西 · 南宁 · 广西体育中心体育场", en: "Guangxi · Nanning" },
            date: "2025.11",
            poster: "concert/poster/20251115.jpg",
            tags: {
                zh: ["行走CD", "小刚", "情歌", "周传雄", "黄昏", "记事本", "念念不忘", "再遇见"],
                en: ["Walking CD", "Xiao Gang", "Love Song", "Steve Chou", "Dusk", "Notebook", "Unforgettable", "Reunion"]
            },
            description: {
                zh: "当行走的CD在现场响起，<br/>情歌的魅力被放大到极致，<br/>小刚那自带深情的嗓音，<br/>每一个音符都仿佛在诉说故事，<br/>那个不畏惧的少年，从未离去，<br/>他，是藏在《黄昏》的尾音里，<br/>他，就等在《记事本》的折页处，<br/>念念不忘的人，<br/>总会以音乐为桥，<br/>来一次跨越时光的相认，<br/><br/>  每一句大合唱，<br/> 藏青春的遗憾与温柔，<br/> 那就再遇见，，，",
                en: "When the walking CD played live,<br/>The charm of love songs was amplified to the extreme,<br/>Xiao Gang's voice, inherently full of deep emotion,<br/>Every note seemed to tell a story,<br/>That fearless young man never left,<br/>He is hidden in the trailing note of 『Twilight』,<br/>He waits right at the folded page of 『Notebook』,<br/>Those who remember fondly,<br/>Will always use music as a bridge,<br/>For a reunion that transcends time,<br/><br/>  Every line of the chorus,<br/>  Hides the regrets and tenderness of youth,<br/>  So let's meet again,,," 
            },
            images: [
                { src: "concert/202511/02/00.jpg", alt: { zh: "周传雄演唱会", en: "Steve Chou Concert" } },
                { src: "concert/202511/02/01.jpg", alt: { zh: "周传雄演唱会", en: "Steve Chou Concert" } },
                { src: "concert/202511/02/02.jpg", alt: { zh: "周传雄演唱会", en: "Steve Chou Concert" } },
                { src: "concert/202511/02/03.jpg", alt: { zh: "周传雄演唱会", en: "Steve Chou Concert" } },
                { src: "concert/202511/02/04.jpg", alt: { zh: "周传雄演唱会", en: "Steve Chou Concert" } },
                { src: "concert/202511/02/05.jpg", alt: { zh: "周传雄演唱会", en: "Steve Chou Concert" } },
                { src: "concert/202511/02/06.jpg", alt: { zh: "周传雄演唱会", en: "Steve Chou Concert" } }
            ],
            video: {
                zh: "BV1aS6sB4EiC",
                en: "BV1aS6sB4EiC"
            },
            videoUrl: {
                zh: "https://space.bilibili.com/29825132/lists/7719512",
                en: "https://space.bilibili.com/29825132/lists/7719512"
            }
        },
        {
            id: 5,
            artist: { zh: "孙燕姿", en: "Stefanie Sun" },
            concertName: { zh: "AUT NIHILO", en: "AUT NIHILO" },
            theme: {
                zh: "孙燕姿说，既然\"不能在日落前相聚\"，那就\"在日落之后好好庆祝\"。巡演的主题旨在\"将生命中的每一个日落串起\"，更深层的含义则是\"日落前的灿烂，日落后的勇气，一切都是值得从零开始\"。孙燕姿也希望再次与观众创造美好的回忆。",
                en: "Stefanie Sun says, since 'we couldn't gather before sunset,' then 'let's celebrate beautifully after sunset.' The tour's theme aims to 'string together every sunset in life,' with the deeper meaning being 'the brilliance before sunset, the courage after sunset, everything is worth starting from zero.' Stefanie Sun also hopes to create beautiful memories with the audience again through this tour."
            },
            location: { zh: "广东 · 深圳 · 深圳湾体育中心", en: "Guangdong · Shenzhen" },
            date: "2025.05",
            poster: "concert/poster/20250518.jpg",
            tags: {
                zh: ["我怀念的", "孙燕姿", "天黑黑", "遇见", "绿光", "尚好的青春", "逆光", "AUT NIHILO"],
                en: ["What I Miss", "Stefanie Sun", "Cloudy Day", "Encounter", "Green Light", "Good Youth", "Against the Light", "AUT NIHILO"]
            },
            description: {
                zh: "当《我怀念的》前奏在夜色里响起，<br/>今晚的星光收集了我们所有人的跌跌撞撞，<br/>像有人突然读懂了你的日记，<br/>带着过去的赤诚与勇气，<br/>与当年那个跌跌撞撞的自己和解，<br/>全场数万人的同步合唱，<br/>我们，<br/>再次向未来的路横冲直撞,,,",
                en: "When the prelude of 『What I Miss』 echoed in the night,   <br/>The starlight tonight caught all our stumbles,        <br/>As if someone suddenly understood your diary,          <br/>Carrying the sincerity and courage of the past,          <br/>Making peace with the stumbling self of yesteryears,         <br/>The synchronized chorus of tens of thousands in the venue,          <br/>We,     <br/>Once again rush headlong towards the road ahead,,," 
            },
            images: [
                { src: "concert/202505/00.jpg", alt: { zh: "孙燕姿演唱会", en: "Stefanie Sun Concert" } },
                { src: "concert/202505/02.jpg", alt: { zh: "孙燕姿演唱会", en: "Stefanie Sun Concert" } },
                { src: "concert/202505/03.jpg", alt: { zh: "孙燕姿演唱会", en: "Stefanie Sun Concert" } },
                { src: "concert/202505/04.jpg", alt: { zh: "孙燕姿演唱会", en: "Stefanie Sun Concert" } },
                { src: "concert/202505/05.jpg", alt: { zh: "孙燕姿演唱会", en: "Stefanie Sun Concert" } }
            ],
            video: {
                zh: "BV1g9Q6BFEnW",
                en: "BV1g9Q6BFEnW"
            },
            videoUrl: {
                zh: "https://space.bilibili.com/29825132/lists/7719553",
                en: "https://space.bilibili.com/29825132/lists/7719553"
            }
        },
        {
            id: 6,
            artist: { zh: "任贤齐", en: "Richie Jen" },
            concertName: { zh: "齐迹在路上", en: "Miracle on the Road" },
            theme: {
                zh: "以\"齐迹在路上\"为名，寓意\"奇迹在路上\"。此次巡演不仅是一场音乐演出，更是一场汇聚集体记忆、制造共鸣奇迹的温暖旅程，以任贤齐的音乐足迹为线索，既是对歌手个人生涯的致敬，也是对一代人青春的回响与致敬。",
                en: "Richie Jen Live 2024 is not just a concert, but a warm journey that gathers collective memories and creates resonant miracles, using Richie Jen's musical footprints as a clue. It is a tribute to the singer's personal career and a reverberation and homage to the youth of a generation."
            },
            location: { zh: "广东 · 佛山 · 佛山体育馆", en: "Guangdong · Foshan" },
            date: "2024.12",
            poster: "concert/poster/20241208.jpg",
            tags: {
                zh: ["小齐哥", "青春记忆", "治愈", "成长", "友情", "中年", "怀旧", "任贤齐", "磁带机", "沿海小镇", "陪伴"],
                en: ["Brother Qi", "Youth Memories", "Healing", "Growth", "Friendship", "Middle Age", "Nostalgia", "Richie Jen", "Tape Player", "Coastal Town", "Companion"]
            },
            description: {
                zh: "小齐哥的歌一响起，<br/>就拾起了那么多回忆，青春扑面而来，<br/>心就这么被治愈了，<br/>这，是一场看不腻的风景，<br/>这，是一件幸福的事情。<br/><br/>青春是抽象的，<br/>年少时我们像疯子，<br/>人到中年，我们更像疯子，<br/>十几岁时我们像白开水，每天都差不多，<br/>二十几岁时说没钱，可能买包泡面也能过一个月，<br/>三十几岁时，有一天你说等我们三十八岁的时候，我可以请你喝一杯茅台，<br/><br/>碎碎念，<br/>两个快四十的男孩，约着听一个快六十的人唱歌，<br/>那一夜，<br/>迟到的相遇，你找回多少青春，<br/>走调，<br/>那些年，在南方沿海小镇，老旧的三角磁带机转着音乐，<br/>小小，<br/>仲夏摇曳的树下，我们两个笨蛋，只有方寸地，<br/>对折，<br/>有种温暖叫『我还在这里』，<br/>你看，<br/>抬头仰望的世界，是不是难以到达？",
                en: "The moment Brother Qi's songs began to play,<br/>So many memories were picked up, youth came rushing back,<br/>My heart was healed just like that,<br/>This, is a scene never tires of watching,<br/>This, is a blissful thing.<br/><br/>Adolescence is abstract,<br/>In youth, we were like lunatics,<br/>Reaching middle age, we seem more like madmen,<br/>In our teens, we were as plain as boiled water, every day much the same,<br/>In our twenties, we said we had no money, maybe buy a box of instant noodles to get through the month,<br/>In our thirties, one day you said when we turn thirty-eight, I can treat you to a glass of Moutai,<br/><br/>Muttering,<br/>Two almost-forty-year-old boys, made a date to listen to an almost-sixty-year-old sing,<br/>That night,<br/>A belated encounter, how much youth did you reclaim,<br/>Off-key,<br/>Those years, in a small southern coastal town, an old triangular tape player spun music,<br/>Tiny,<br/>Under the swaying trees of midsummer, us two blockheads, with just a spot of ground,<br/>Fold in half,<br/>There is a warmth called 『I'm still here』,<br/>You see,<br/>The world we look up to, isn't it that hard to reach?" 
            },
            images: [
                { src: "concert/202412/00.jpg", alt: { zh: "任贤齐演唱会", en: "Richie Jen Concert" } },
                { src: "concert/202412/01.jpg", alt: { zh: "任贤齐演唱会", en: "Richie Jen Concert" } },
                { src: "concert/202412/02.jpg", alt: { zh: "任贤齐演唱会", en: "Richie Jen Concert" } },
                { src: "concert/202412/03.jpg", alt: { zh: "任贤齐演唱会", en: "Richie Jen Concert" } },
                { src: "concert/202412/04.jpg", alt: { zh: "任贤齐演唱会", en: "Richie Jen Concert" } }
            ],
            video: {
                zh: "BV1MB6xB9EV7",
                en: "BV1MB6xB9EV7"
            },
            videoUrl: {
                zh: "https://space.bilibili.com/29825132/lists/7719476",
                en: "https://space.bilibili.com/29825132/lists/7719476"
            }
        },
        {
            id: 7,
            artist: { zh: "伍佰", en: "Wu Bai" },
            concertName: { zh: "Rock Star", en: "Rock Star" },
            theme: {
                zh: "\"Rock Star\"系列巡演的首轮，旨在重新开启观众对摇滚乐的视野与认知。伍佰宣称\"我唱的不是情歌，是人生\"，演唱会横跨历年专辑的曲目，展现其音乐风格的转变与作为摇滚巨星的核心力量。",
                en: "The first round of the 'Rock Star' series tour aims to reopen the audience's vision and understanding of rock music. Wu Bai declares 'I'm not singing love songs, I'm singing life,' spanning tracks from albums over the years, showcasing the transformation of his musical style and the core power of being a rock star."
            },
            location: { zh: "江苏 · 南京 · 南京奥体中心体育馆", en: "Jiangsu · Nanjing" },
            date: "2023.10",
            poster: "concert/poster/20231013.jpg",
            tags: {
                zh: ["伍佰", "场外", "遗憾", "奋斗", "友情", "怀旧", "音乐粉丝", "坚持", "Rock Star"],
                en: ["Wu Bai", "Outside Venue", "Regret", "Struggle", "Friendship", "Nostalgia", "Music Fan", "Persistence","Rock Star"]
            },
            description: {
                zh: "那年做项目，每天忙得两点一线，<br/>在沙发上睡了整整半年，<br/>天天蹲在大厅放伍佰的歌，<br/>被兄弟们给吐槽许久。<br/>正巧那时南京有伍佰的演唱会，<br/>演唱会票咱是没有抢到，但车票是抢到了，<br/>最后干脆拎着小板凳一路冲到场馆外，<br/><br/>棒棒的，<br/>花二百元去伍佰演唱会在场外唱伍佰的歌给伍佰听，<br/>人生最大的遗憾，<br/>就是好好的听到伍佰好好的唱歌，，，",
                en: "That year, working on a project, busy every day shuttling between two points,<br/>Slept on the sofa for a full six months,<br/>Played Wu Bai's songs every day in the lobby,<br/>Got quite a few complaints from the guys.<br/>Coincidentally, Wu Bai had a concert in Nanjing around that time,<br/>Didn't manage to snag concert tickets, but did get train tickets,<br/>Ended up grabbing a small stool and rushing straight to the venue,<br/><br/>Awesome,<br/>Spent two hundred to go listen to Wu Bai sing Wu Bai's songs outside Wu Bai's concert,<br/>The biggest regret in life,<br/>Is hearing Wu Bai sing properly, so properly,,," 
            },
            images: [
                { src: "concert/202310/00.jpg", alt: { zh: "伍佰演唱会", en: "Wu Bai Concert" } }
            ]
        },
        {
            id: 8,
            artist: { zh: "陈奕迅", en: "Eason Chan" },
            concertName: { zh: "Another Eason's LIFE", en: "Another Eason's LIFE" },
            theme: {
                zh: "主题围绕 \"LIFE\"（生活），陈奕迅亲自从数百首作品中挑选与生命相关的歌曲，希望观众能 用心感受及体会生命中发生的每件小事之影响力及重要性，并投放多一些情怀发掘人生不同的意义。",
                en: "The theme revolves around 'LIFE.' Eason Chan personally selected life-related songs from hundreds of works, hoping the audience can feel and experience the influence and importance of every little thing that happens in life, and invest more emotion to discover different meanings of life."
            },
            location: { zh: "北京 · 国家体育场鸟巢", en: "Beijing · Bird's Nest" },
            date: "2016.10",
            poster: "concert/poster/20161021.jpg",
            tags: {
                zh: ["陈奕迅", "鸟巢", "淘汰", "十年", "你的背包", "荧光棒", "好久不见"],
                en: ["Eason Chan", "Bird's Nest", "Elimination", "Ten Years", "Your Backpack", "Glow Stick", "Long Time No See"]
            },
            description: {
                zh: "夏末秋初的北京，<br/>雨中还残留着暑气，<br/>那夜，<br/>我穿过熙攘的人潮走进鸟巢，<br/>只为听一场陈奕迅演唱会，<br/> <br/>当灯光暗下，<br/>音乐响起，<br/>他站在光中。<br/> 唱《淘汰》，<br/>唱《十年》，<br/>唱《你的背包》。<br/>  那些在耳机里循环过千百遍的旋律，<br/>     此刻被赋予实体，<br/>   荧光棒汇成星海，<br/>近五万人的集体呼吸与合唱，<br/>       才发现那些歌早被刻进了许多人的青春里。  <br/> <br/>   最美的还是他轻声说的那句：<br/>     『好久不见。』",
                en: "Beijing in late summer, early autumn,<br/>The lingering summer heat still clung to the rainy air,<br/>That night,<br/>I walked through the bustling crowd into the Bird's Nest,<br/>Just to attend a Eason Chan concert,<br/> <br/>When the lights dimmed,<br/>And the music began to play,<br/>He stood in the light.<br/> Sang 『Elimination』,<br/>Sang 『Ten Years』,<br/>Sang 『Your Backpack』.<br/>   Those melodies replayed a thousand times in headphones,<br/>      Now given physical form,<br/>    Glow sticks converged into a sea of stars,<br/>The collective breath and chorus of nearly fifty thousand people,<br/>       I realized then those songs had long been etched into the youth of so many.  <br/> <br/>   The most beautiful part was still when he softly said:<br/>     『Long time no see.』" 
            },
            images: [
                { src: "concert/201610/01.jpg", alt: { zh: "陈奕迅演唱会", en: "Eason Chan Concert" } },
                { src: "concert/201610/02.jpg", alt: { zh: "陈奕迅演唱会", en: "Eason Chan Concert" } },
                { src: "concert/201610/03.jpg", alt: { zh: "陈奕迅演唱会", en: "Eason Chan Concert" } }
            ]
        },
        {
            id: 9,
            artist: { zh: "五月天", en: "Mayday" },
            concertName: { zh: "Just Rock It 2016", en: "Just Rock It 2016" },
            theme: {
                zh: "演唱会以\"生老病死就是一场人生派对\"为主题，鼓励观众正面迎战。2016年巡演以高成本打造炫目舞台，并融入当时新专辑《自传》的概念，是一场充满能量、情怀与万人集体狂欢的摇滚派对。",
                en: "The concert uses 'birth, aging, sickness, and death are a life party' as its theme, encouraging the audience to face challenges head-on. The 2016 tour created a dazzling stage at high cost and incorporated concepts from the then-new album 'Autobiography,' making it a rock party full of energy, sentiment, and collective celebration for thousands of people."
            },
            location: { zh: "陕西 · 西安 · 陕西省体育场", en: "Shaanxi · Xi'an" },
            date: "2016.09",
            poster: "concert/poster/20160903.jpg",
            tags: {
                zh: ["五月天", "单反", "恋爱ing", "安可", "万人合唱", "温柔", "不打扰", "Just Rock It"],
                en: ["Fans", "DSLR", "Mayday", "Love-ing", "Encore", "Mass Chorus", "Tenderness", "Don't Disturb","Just Rock It"]
            },
            description: {
                zh: "看着旁边拿着望远镜的小兄弟，      <br/>『请问，你是铁粉？』    <br/>「大哥，我是假粉，我女朋友是铁粉」       <br/>『ohh~~~，那我也是假粉。我不会唱几首呢』       <br/>「大哥，我同样也不会」       <br/>『ohh~~~』     <br/>结果，   <br/>从第一首唱到最后一首，<br/>我扛着单反录了一晚上演唱会，全是旁边小哥的歌声， <br/>他女朋友也录了一晚上，相机对着她旁边的男朋友， <br/>果然都是假粉，  <br/><br/>一直以来觉得自己，  <br/>不是一名合适的五迷， <br/>不象周围可爱的人从第一首跟唱到最后一首， <br/>只是静静的坐着听着，   <br/>十万人合唱的恋爱ing， <br/>举起手机当荧光棒的温柔， <br/>跟着安可安可最后一首歌，  <br/><br/>那别人触不可及的盛夏里，  <br/>风吹雨落，岁月沧桑刻下，  <br/>请好好的，<br/>我们自己就是观众，，，<br/>请不打扰， <br/>那些爱人温柔，，，",
                en: "Looking at the little brother next to me holding binoculars,      <br/>『Excuse me, are you a hardcore fan?』    <br/>「Bro, I'm a fake fan, my girlfriend is the hardcore one」       <br/>『ohh~~~, then I'm a fake fan too. I don't know many songs』       <br/>「Bro, I don't either」       <br/>『ohh~~~』     <br/>In the end,   <br/>From the first song to the last,<br/>I held up a DSLR recording the entire concert, full of the guy's singing next to me, <br/>His girlfriend also recorded all night, her camera pointed at her boyfriend beside her, <br/>All fake fans indeed,  <br/><br/>I've always felt,  <br/>I'm not a proper Wumii (Mayday fan), <br/>Unlike the lovely people around me singing along from the first to the last song, <br/>I just sat quietly listening,   <br/>The hundred-thousand-person chorus of 『Love-ing』, <br/>Raising phones as glow sticks for 『Tenderness』, <br/>Following the encore, encore, the final song,  <br/><br/>In that summer beyond others' reach,  <br/>Wind blows, rain falls, Under the vicissitudes of time,  <br/>Please be well,<br/>We ourselves are the audience,,,<br/>Please don't disturb, <br/>Those gentle lovers,,," 
            },
            images: [
                { src: "concert/201609/01.jpg", alt: { zh: "五月天演唱会", en: "Mayday Concert" } },
                { src: "concert/201609/02.jpg", alt: { zh: "五月天演唱会", en: "Mayday Concert" } },
                { src: "concert/201609/03.jpg", alt: { zh: "五月天演唱会", en: "Mayday Concert" } },
                { src: "concert/201609/04.jpg", alt: { zh: "五月天演唱会", en: "Mayday Concert" } },
                { src: "concert/201609/05.jpg", alt: { zh: "五月天演唱会", en: "Mayday Concert" } }
            ]
        }
    ]
};

// 城市数据
const citiesBaseData = [
    { name: { zh: "北京", en: "Beijing" }, concerts: 1, icon: "🏙️" },
    { name: { zh: "南京", en: "Nanjing" }, concerts: 1, icon: "🍁" },
    { name: { zh: "南昌", en: "Nanchang" }, concerts: 1, icon: "🌅" },
    { name: { zh: "清远", en: "Qingyuan" }, concerts: 1, icon: "🏞️" },
    { name: { zh: "南宁", en: "Nanning" }, concerts: 2, icon: "🌴" },
    { name: { zh: "深圳", en: "Shenzhen" }, concerts: 1, icon: "🌃" },
    { name: { zh: "佛山", en: "Foshan" }, concerts: 1, icon: "🎪" },
    { name: { zh: "西安", en: "Xi'an" }, concerts: 1, icon: "⛩️" }
];
