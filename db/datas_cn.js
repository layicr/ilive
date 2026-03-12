var totalConcertsVal = '9';
var totalArtistsVal = '8';
var totalCitiesVal = '8';
var showFirStr = "->   ";

const concertDataZH = {
    pageTitle: "Layicr演唱会足迹",
    profileLabel: "我的名字是:",
    profileSubtitle: "这是我们的演唱会，也是你的故事。",
    roles: [
        showFirStr + totalConcertsVal + "   （演唱会）",
        showFirStr + totalCitiesVal + "   （城市）"
    ],
    totalConcerts: totalConcertsVal,
    totalArtists: totalArtistsVal,
    totalCities: totalCitiesVal,
    concertsLabel: "场次",
    artistsLabel: "艺人",
    citiesLabel: "城市",
    footerText: "",
    siteName: "Layicr",
    modalTitle: "演唱会城市",
    cities: [
        { name: "北京", concerts: 1, icon: "🏙️" },
        { name: "南京", concerts: 1, icon: "🍁" },
        { name: "南昌", concerts: 1, icon: "🌅" },
        { name: "清远", concerts: 1, icon: "🏞️" },
        { name: "南宁", concerts: 2, icon: "🌴" },
        { name: "深圳", concerts: 1, icon: "🌃" },
        { name: "佛山", concerts: 1, icon: "🎪" },
        { name: "西安", concerts: 1, icon: "⛩️" }
    ],
    concerts: [
        {
            id: 1,
            artist: "伍佰",
            location: "江西 · 南昌 · 南昌国际体育中心",
            date: "2026.01",
            description: "一场大型的ktv，<br/>一位优秀指挥家，<br/>一首首让人上头歌曲，<br/>一群群已开麦歌友们，<br/><br/>这是我们的演唱会，<br/>从来都是伍佰起个头，<br/>剩下的全交给我们，<br/>我们早把歌词刻进骨血，<br/>在万人同频摇滚里，<br/>把青春唱到淋漓尽致，<br/><br/>先卷起，<br/>遗失在卡带B面的《Last Dance》，，，",
            images: [
                { src: "concert/202601/01/00.jpg", alt: "伍佰演唱会" },
                { src: "concert/202601/01/01.jpg", alt: "伍佰演唱会" },
                { src: "concert/202601/01/02.jpg", alt: "伍佰演唱会" },
                { src: "concert/202601/01/03.jpg", alt: "伍佰演唱会" },
                { src: "concert/202601/01/04.jpg", alt: "伍佰演唱会" },
                { src: "concert/202601/01/05.jpg", alt: "伍佰演唱会" },
                { src: "concert/202601/01/06.jpg", alt: "伍佰演唱会" }
            ]
        },
        {
            id: 2,
            artist: "李荣浩",
            location: "广东 · 清远 · 清远体育中心体育场",
            date: "2026.01",
            description: "此行终究是有些遗憾，<br/>未能听到《歌谣》的live。<br/>倒是一首《海陆风》，<br/>浅浅地抓住了我，<br/>海陆风？<br/>是否蓝天白云，<br/>沿着228国道，<br/>戴耳机骑机车，<br/>迎面扑来的那种富有节奏的呼吸？<br/><br/>那到底是什么的风？<br/>还是不知方向的疯？<br/> 我不知道，<br/><br/> 《紫荆花盛开》，<br/>这歌我也十分喜欢，<br/>是献礼HK回归祖国25周年作品，<br/>对于HK，近十几年去过各大城市，<br/>可HK却始终还没踏足，<br/>去别人世界转转是需要态度，<br/><br/>回程时忽然想起，<br/> 很多年前的我，<br/> 那时还是背包客，<br/> 在台湾极南点鹅銮鼻，<br/> 曾录下一段太平洋的海声，<br/>那就，边听边走，，，",
            images: [
                { src: "concert/202601/02/00.jpg", alt: "李荣浩演唱会" },
                { src: "concert/202601/02/01.jpg", alt: "李荣浩演唱会" },
                { src: "concert/202601/02/02.jpg", alt: "李荣浩演唱会" },
                { src: "concert/202601/02/03.jpg", alt: "李荣浩演唱会" },
                { src: "concert/202601/02/04.jpg", alt: "李荣浩演唱会" },
                { src: "concert/202601/02/05.jpg", alt: "李荣浩演唱会" }
            ]
        },
        {
            id: 3,
            artist: "邓紫棋",
            location: "广西 · 南宁 · 广西体育中心体育场",
            date: "2025.11",
            description: "当《泡沫》、《龙卷风》、《唯一》，一首首熟悉的旋律缓缓响起，<br/>  熟悉的节奏瞬间叩击心房，<br/> 我忍不住放声跟唱，<br/>      那些尘封已久的久远记忆被轻轻唤醒，       <br/> 那些藏在时光里的情绪与片段，       <br/> 都在歌声里慢慢浮现，<br/> <br/>      歌永远不会真正结束，<br/>    『看，我都还记得。』",
            images: [
                { src: "concert/202511/01/00.jpg", alt: "邓紫棋演唱会" },
                { src: "concert/202511/01/01.jpg", alt: "邓紫棋演唱会" },
                { src: "concert/202511/01/02.jpg", alt: "邓紫棋演唱会" },
                { src: "concert/202511/01/03.jpg", alt: "邓紫棋演唱会" },
                { src: "concert/202511/01/05.jpg", alt: "邓紫棋演唱会" },
                { src: "concert/202511/01/06.jpg", alt: "邓紫棋演唱会" }
            ]
        }
       , {
            id: 4,
            artist: "周传雄",
            location: "广西 · 南宁 · 广西体育中心体育场",
            date: "2025.11",
            description: "当行走的CD在现场响起，<br/>情歌的魅力被放大到极致，<br/>小刚那自带深情的嗓音，<br/>每一个音符都仿佛在诉说故事，<br/>那个不畏惧的少年，从未离去，<br/>他，是藏在《黄昏》的尾音里，<br/>他，就等在《记事本》的折页处，<br/>念念不忘的人，<br/>总会以音乐为桥，<br/>来一次跨越时光的相认，<br/><br/>  每一句大合唱，<br/> 藏青春的遗憾与温柔，<br/> 那就再遇见，，，",
            images: [
                { 
                    src: "concert/202511/02/00.jpg", 
                    alt: "周传雄演唱会" 
                },
                { 
                    src: "concert/202511/02/01.jpg", 
                    alt: "周传雄演唱会" 
                },
                { 
                    src: "concert/202511/02/02.jpg", 
                    alt: "周传雄演唱会" 
                },
                { 
                    src: "concert/202511/02/03.jpg", 
                    alt: "周传雄演唱会" 
                },
                { 
                    src: "concert/202511/02/04.jpg", 
                    alt: "周传雄演唱会" 
                }
                ,
                { 
                    src: "concert/202511/02/05.jpg", 
                    alt: "周传雄演唱会" 
                }
                ,
                { 
                    src: "concert/202511/02/06.jpg", 
                    alt: "周传雄演唱会" 
                }
            ]
        },
        {
            id: 5,
            artist: "孙燕姿",
            location: "广东 · 深圳 · 深圳大运中心体育场",
            date: "2025.05",
            description: "跌跌撞撞的人生， <br/>有时觉得或许自己什么都不是，<br/>又或许应该抓住所有的过去，<br/>奋不顾身地再向前进，<br/>从现在开始，<br/>一切就在日落以后，<br/><br/>当《我怀念的》前奏在夜色里响起，   <br/>今夜的星光接住了所有踉跄，        <br/>像忽然有人读懂了你的日记，          <br/>带着过往的赤诚与勇气，          <br/>与曾经跌撞的自己握手言和，         <br/>全场万人同频的合唱，          <br/>我们，     <br/>再义无反顾奔赴前路，，，",
            images: [
                { 
                    src: "concert/202505/00.jpg", 
                    alt: "孙燕姿演唱会" 
                },
                { 
                    src: "concert/202505/02.jpg", 
                    alt: "孙燕姿演唱会" 
                },
                { 
                    src: "concert/202505/03.jpg", 
                    alt: "孙燕姿演唱会" 
                }
                ,
                { 
                    src: "concert/202505/04.jpg", 
                    alt: "孙燕姿演唱会" 
                }
                ,
                { 
                    src: "concert/202505/05.jpg", 
                    alt: "孙燕姿演唱会" 
                }

            ]
        },
        {
            id: 6,
            artist: "任贤齐",
            location: "广东 · 佛山 · 佛山国际体育文化演艺中心	",
            date: "2024.12",
            description: "小齐哥的歌曲，前奏响那瞬间，<br/>拾起多少回忆，青春都回来了，<br/>心就这样被治愈了，<br/>这，是永远看不腻画面，<br/>这，是一件幸福的事情。<br/><br/>少年时代很抽象，<br/>年轻时是个神经病，<br/>到了中年倒像个疯子，<br/>十几岁，我们就如白开水平淡无味，每天都差不多，<br/>二十几岁，你说我们现在没有钱，要不买箱泡面渡完这个月，<br/>三十几岁，某一天你说三十八岁到了能请你喝杯茅台，<br/><br/>呢喃，<br/>两位奔四老男孩，约去听奔六唱歌，<br/>那晚，<br/>迟到的邂逅，你拾起多少青春，<br/>走音，<br/>那些年，南方海边小城，老旧三角形磁带机放着音乐，<br/>小小，<br/>盛夏摇曳的树下，2B的我们，仅有一席地，<br/>对折，<br/>有一种温暖，叫 还有我，<br/>你看，<br/>要抬头仰望的世界，不会那么难以到达？",
            images: [
                { 
                    src: "concert/202412/00.jpg", 
                    alt: "任贤齐演唱会"  
                },
                { 
                    src: "concert/202412/01.jpg", 
                    alt: "任贤齐演唱会"  
                },
                { 
                    src: "concert/202412/02.jpg", 
                    alt: "任贤齐演唱会"  
                },
                { 
                    src: "concert/202412/03.jpg", 
                    alt: "任贤齐演唱会"  
                },
                { 
                    src: "concert/202412/04.jpg", 
                    alt: "任贤齐演唱会"  
                }
            ]
        },
        {
            id: 7,
            artist: "伍佰",
            location: "江苏 · 南京 · 南京奥体中心体育馆	",
            date: "2023.10",
            description: "那年做项目，每天忙得两点一线，<br/>在沙发上睡了整整半年，<br/>天天蹲在大厅放伍佰的歌，<br/>被兄弟们给吐槽许久。<br/>正巧那时南京有伍佰的演唱会，<br/>演唱会票咱是没有抢到，但车票是抢到了，<br/>最后干脆拎着小板凳一路冲到场馆外，<br/><br/>棒棒的，<br/>花二百元去伍佰演唱会在场外唱伍佰的歌给伍佰听，<br/>人生最大的遗憾，<br/>就是好好的听到伍佰好好的唱歌，，，",
            images: [
                { 
                    src: "concert/202310/00.jpg", 
                    alt: "伍佰演唱会"  
                }
            ]
        },
        {
            id: 8,
            artist: "陈奕迅",
            location: "北京 · 国家体育场鸟巢",
            date: "2016.10",
            description: "夏末秋初的北京，<br/>雨中还残留着暑气，<br/>那夜，<br/>我穿过熙攘的人潮走进鸟巢，<br/>只为听一场陈奕迅演唱会，<br/> <br/>当灯光暗下，<br/>音乐响起，<br/>他站在光中。<br/> 唱《淘汰》，<br/>唱《十年》，<br/>唱《你的背包》。<br/>  那些在耳机里循环过千百遍的旋律，<br/>     此刻被赋予实体，<br/>   荧光棒汇成星海，<br/>近五万人的集体呼吸与合唱，<br/>       才发现那些歌早被刻进了许多人的青春里。  <br/> <br/>   最美的还是他轻声说的那句：<br/>     『好久不见。』",
            images: [
                { 
                    src: "concert/201610/01.jpg", 
                    alt: "陈奕迅演唱会" 
                },
                { 
                    src: "concert/201610/02.jpg", 
                    alt: "陈奕迅演唱会" 
                },
                { 
                    src: "concert/201610/03.jpg", 
                    alt: "陈奕迅演唱会" 
                }

            ]
        },
        {
            id: 9,
            artist: "五月天",
            location: "陕西 · 西安 · 陕西省体育场",
            date: "2016.09",
            description: "看着旁边拿着望远镜的小兄弟，      <br/>『请问，你是铁粉？』    <br/>「大哥，我是假粉，我女朋友是铁粉」       <br/>『ohh~~~，那我也是假粉。我不会唱几首呢』       <br/>「大哥，我同样也不会」       <br/>『ohh~~~』     <br/>结果，   <br/>从第一首唱到最后一首，<br/>我扛着单反录了一晚上演唱会，全是旁边小哥的歌声， <br/>他女朋友也录了一晚上，相机对着她旁边的男朋友， <br/>果然都是假粉，  <br/><br/>一直以来觉得自己，  <br/>不是一名合适的五迷， <br/>不象周围可爱的人从第一首跟唱到最后一首， <br/>只是静静的坐着听着，   <br/>十万人合唱的恋爱ing， <br/>举起手机当荧光棒的温柔， <br/>跟着安可安可最后一首歌，  <br/><br/>那别人触不可及的盛夏里，  <br/>风吹雨落，岁月沧桑刻下，  <br/>请好好的，<br/>我们自己就是观众，，，<br/>请不打扰， <br/>那些爱人温柔，，，",
            images: [
                
                { 
                    src: "concert/201609/01.jpg", 
                    alt: "五月天演唱会" 
                }
                ,
                { 
                    src: "concert/201609/02.jpg", 
                    alt: "五月天演唱会" 
                }
                ,
                { 
                    src: "concert/201609/03.jpg", 
                    alt: "五月天演唱会" 
                }
                ,
                { 
                    src: "concert/201609/04.jpg", 
                    alt: "五月天演唱会" 
                },
                { 
                    src: "concert/201609/05.jpg", 
                    alt: "五月天演唱会" 
                }
            ]
        }
    ]
};
