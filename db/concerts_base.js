// B站链接配置
const Bil_Url = {
    videoBaseUrl: 'https://www.bilibili.com/video/',     // 单曲视频基础URL
    spaceBaseUrl: 'https://space.bilibili.com/29825132/lists/'  // 用户合集基础URL
};

/**
 * 处理 songlist 中的 link 字段
 * @param {Array} songlist - 原始 songlist 数组
 * @param {string} lang - 语言 'zh' | 'en'
 * @returns {Array} 处理后的 songlist，每项为字符串或 {name, link} 对象
 */
function processSonglist(songlist, lang) {
    if (!songlist) return null;
    return songlist.map(song => {
        const link = song.link ? (typeof song.link === 'string' ? song.link : song.link[lang]) : null;
        return link ? { name: song[lang], link } : song[lang];
    });
}

// 演唱会基础数据（多语言结构）
const concertsBaseData = {
    concerts: [
        {
            id: 1,
            artist: { zh: "五月天", en: "Mayday" },
            concertName: { zh: "Just Rock It 2016", en: "Just Rock It 2016" },
            theme: {
                zh: "演唱会以\"生老病死就是一场人生派对\"为主题，鼓励观众正面迎战。2016年巡演以高成本打造炫目舞台，并融入当时新专辑《自传》的概念，是一场充满能量、情怀与万人集体狂欢的摇滚派对。",
                en: "The concert uses 'birth, aging, sickness, and death are a life party' as its theme, encouraging the audience to face challenges head-on. The 2016 tour created a dazzling stage at high cost and incorporated concepts from the then-new album 'Autobiography,' making it a rock party full of energy, sentiment, and collective celebration for thousands of people."
            },
            location: { zh: "陕西 · 西安 · 陕西省体育场", en: "Shaanxi · Xi'an" },
            date: "2016.09.03",
            poster: "concert/poster/20160903.jpg",
            tags: {
                zh: ["五月天", "单反", "恋爱ing", "安可", "万人合唱", "温柔", "不打扰", "Just Rock It"],
                en: ["Fans", "DSLR", "Mayday", "Love-ing", "Encore", "Mass Chorus", "Tenderness", "Don't Disturb", "Just Rock It"]
            },
            description: {
                zh: "看着旁边拿着望远镜的小兄弟，      <br/>『请问，你是铁粉？』    <br/>「大哥，我是假粉，我女朋友是铁粉」       <br/>『ohh~~~，那我也是假粉。我不会唱几首呢』       <br/>「大哥，我同样也不会」       <br/>『ohh~~~』     <br/>结果，   <br/>从第一首唱到最后一首，<br/>我扛着单反录了一晚上演唱会，全是旁边小哥的歌声， <br/>他女朋友也录了一晚上，相机对着她旁边的男朋友， <br/>果然都是假粉，  <br/><br/>一直以来觉得自己，  <br/>不是一名合适的五迷， <br/>不象周围可爱的人从第一首跟唱到最后一首， <br/>只是静静的坐着听着，   <br/>十万人合唱的恋爱ing， <br/>举起手机当荧光棒的温柔， <br/>跟着安可安可最后一首歌，  <br/><br/>那别人触不可及的盛夏里，  <br/>风吹雨落，岁月沧桑刻下，  <br/>请好好的，<br/>我们自己就是观众，，，<br/>请不打扰， <br/>那些爱人温柔，，，",
                en: "Looking at the little brother next to me holding binoculars,      <br/>『Excuse me, are you a hardcore fan?』    <br/>「Bro, I'm a fake fan, my girlfriend is the hardcore one」       <br/>『ohh~~~, then I'm a fake fan too. I don't know many songs』       <br/>「Bro, I don't either」       <br/>『ohh~~~』     <br/>In the end,   <br/>From the first song to the last,<br/>I held up a DSLR recording the entire concert, full of the guy's singing next to me, <br/>His girlfriend also recorded all night, her camera pointed at her boyfriend beside her, <br/>All fake fans indeed,  <br/><br/>I've always felt,  <br/>I'm not a proper Wumii (Mayday fan), <br/>Unlike the lovely people around me singing along from the first to the last song, <br/>I just sat quietly listening,   <br/>The hundred-thousand-person chorus of 『Love-ing』, <br/>Raising phones as glow sticks for 『Tenderness』, <br/>Following the encore, encore, the final song,  <br/><br/>In that summer beyond others' reach,  <br/>Wind blows, rain falls, Under the vicissitudes of time,  <br/>Please be well,<br/>We ourselves are the audience,,,<br/>Please don't disturb, <br/>Those gentle lovers,,,"
            },
            images: [
                { src: "concert/20160903/01.jpg", alt: { zh: "五月天演唱会", en: "Mayday Concert" } },
                { src: "concert/20160903/02.jpg", alt: { zh: "五月天演唱会", en: "Mayday Concert" } },
                { src: "concert/20160903/03.jpg", alt: { zh: "五月天演唱会", en: "Mayday Concert" } },
                { src: "concert/20160903/04.jpg", alt: { zh: "五月天演唱会", en: "Mayday Concert" } },
                { src: "concert/20160903/05.jpg", alt: { zh: "五月天演唱会", en: "Mayday Concert" } }
            ],
            songlist: [
                { zh: "Do You Ever Shine", en: "Do You Ever Shine" },
                { zh: "三个傻瓜", en: "Three Fools" },
                { zh: "你不是真正的快乐", en: "You Are Not Truly Happy" },
                { zh: "为爱而生", en: "Born For Love" },
                { zh: "孙悟空", en: "Sun Wukong" },
                { zh: "雌雄同体", en: "Androgyny" },
                { zh: "人生海海", en: "Life Is Like Ocean" },
                { zh: "终结孤单", en: "End Loneliness" },
                { zh: "轧车", en: "Rolling Car" },
                { zh: "离开地球表面", en: "Leave The Earth's Surface" },
                { zh: "诺亚方舟", en: "Noah's Ark" },
                { zh: "知足", en: "Contentment" },
                { zh: "疯狂世界", en: "Crazy World" },
                { zh: "笑忘歌", en: "Laugh And Forget Song" },
                { zh: "如烟", en: "Like Smoke" },
                { zh: "好好", en: "Well" },
                { zh: "干杯", en: "Cheers" },
                { zh: "怪兽solo+将军令", en: "Monster Solo + General's Order" },
                { zh: "入阵曲", en: "Battle Song" },
                { zh: "我不愿让你一个人", en: "I Don't Want You To Be Alone" },
                { zh: "憨人", en: "Fool" },
                { zh: "任意门", en: "Any Door" },
                { zh: "倔强", en: "Stubborn" },
                { zh: "派对动物", en: "Party Animal" },
                { zh: "伤心的人别听慢歌", en: "Sad People Don't Listen Slow Songs" },
                { zh: "如果我们不曾相遇", en: "If We Never Met" },
                { zh: "温柔", en: "Tenderness" },
                { zh: "后来的我们", en: "Later Us" },
                { zh: "突然好想你", en: "Suddenly Miss You" },
                { zh: "OAOA", en: "OAOA" },
                { zh: "顽固", en: "Stubbornness" },
                { zh: "恋爱ING", en: "Love ING" }
            ]
        },
        {
            id: 2,
            artist: { zh: "陈奕迅", en: "Eason Chan" },
            concertName: { zh: "Another Eason's LIFE", en: "Another Eason's LIFE" },
            theme: {
                zh: "主题围绕 \"LIFE\"（生活），陈奕迅亲自从数百首作品中挑选与生命相关的歌曲，希望观众能 用心感受及体会生命中发生的每件小事之影响力及重要性，并投放多一些情怀发掘人生不同的意义。",
                en: "The theme revolves around 'LIFE.' Eason Chan personally selected life-related songs from hundreds of works, hoping the audience can feel and experience the influence and importance of every little thing that happens in life, and invest more emotion to discover different meanings of life."
            },
            location: { zh: "北京 · 北京 · 国家体育场鸟巢", en: "Beijing · Bird's Nest" },
            date: "2016.10.21",
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
                { src: "concert/20161021/01.jpg", alt: { zh: "陈奕迅演唱会", en: "Eason Chan Concert" } },
                { src: "concert/20161021/02.jpg", alt: { zh: "陈奕迅演唱会", en: "Eason Chan Concert" } },
                { src: "concert/20161021/03.jpg", alt: { zh: "陈奕迅演唱会", en: "Eason Chan Concert" } }
            ],
            songlist: [
                { zh: "娱乐天空", en: "Entertainment Sky" },
                { zh: "早开的长途班", en: "Early Long Distance Bus" },
                { zh: "路一直都在", en: "The Road Is Always There" },
                { zh: "淘汰", en: "Elimination" },
                { zh: "无条件", en: "Unconditional" },
                { zh: "好久不见 + 不如不见", en: "Long Time No See + Better Not Meet" },
                { zh: "四季圈", en: "Four Seasons Circle" },
                { zh: "不如承诺来的简单", en: "Simpler Than A Promise" },
                { zh: "浮城", en: "Floating City" },
                { zh: "我们都寂寞", en: "We Are All Lonely" },
                { zh: "闪", en: "Flash" },
                { zh: "变色龙", en: "Chameleon" },
                { zh: "2001 太空漫游", en: "2001 Space Odyssey" },
                { zh: "多少", en: "How Much" },
                { zh: "可以了", en: "It's Okay" },
                { zh: "富士山下", en: "Under Mount Fuji" },
                { zh: "沙龙", en: "Salon" },
                { zh: "Welcome to the future", en: "Welcome to the future" },
                { zh: "时代巨轮", en: "Wheel of Time" },
                { zh: "结束开始", en: "End Start" },
                { zh: "怕死", en: "Afraid of Death" },
                { zh: "夕阳无限好", en: "Sunset Is Infinitely Good" },
                { zh: "今日", en: "Today" },
                { zh: "我的快乐时代", en: "My Happy Era" },
                { zh: "春夏秋冬（翻唱张国荣）", en: "Spring Summer Autumn Winter (Cover Leslie Cheung)" },
                { zh: "夜空中最亮的星（翻唱逃跑计划）", en: "The Brightest Star in the Night Sky (Cover Escape Plan)" },
                { zh: "I DO", en: "I DO" },
                { zh: "不要说话", en: "Don't Speak" },
                { zh: "十年", en: "Ten Years" }
            ]
        }, {
            id: 3,
            artist: { zh: "伍佰", en: "Wu Bai" },
            concertName: { zh: "Rock Star", en: "Rock Star" },
            theme: {
                zh: "\"Rock Star\"系列巡演的首轮，旨在重新开启观众对摇滚乐的视野与认知。伍佰宣称\"我唱的不是情歌，是人生\"，演唱会横跨历年专辑的曲目，展现其音乐风格的转变与作为摇滚巨星的核心力量。",
                en: "The first round of the 'Rock Star' series tour aims to reopen the audience's vision and understanding of rock music. Wu Bai declares 'I'm not singing love songs, I'm singing life,' spanning tracks from albums over the years, showcasing the transformation of his musical style and the core power of being a rock star."
            },
            location: { zh: "江苏 · 南京 · 南京奥体中心体育馆", en: "Jiangsu · Nanjing" },
            date: "2023.10.13",
            poster: "concert/poster/20231013.jpg",
            tags: {
                zh: ["伍佰", "场外", "遗憾", "奋斗", "友情", "怀旧", "音乐粉丝", "坚持", "Rock Star"],
                en: ["Wu Bai", "Outside Venue", "Regret", "Struggle", "Friendship", "Nostalgia", "Music Fan", "Persistence", "Rock Star"]
            },
            description: {
                zh: "那年做项目，每天忙得两点一线，<br/>在沙发上睡了整整半年，<br/>天天蹲在大厅放伍佰的歌，<br/>被兄弟们给吐槽许久。<br/>正巧那时南京有伍佰的演唱会，<br/>演唱会票咱是没有抢到，但车票是抢到了，<br/>最后干脆拎着小板凳一路冲到场馆外，<br/><br/>棒棒的，<br/>花二百元去伍佰演唱会在场外唱伍佰的歌给伍佰听，<br/>人生最大的遗憾，<br/>就是好好的听到伍佰好好的唱歌，，，",
                en: "That year, working on a project, busy every day shuttling between two points,<br/>Slept on the sofa for a full six months,<br/>Played Wu Bai's songs every day in the lobby,<br/>Got quite a few complaints from the guys.<br/>Coincidentally, Wu Bai had a concert in Nanjing around that time,<br/>Didn't manage to snag concert tickets, but did get train tickets,<br/>Ended up grabbing a small stool and rushing straight to the venue,<br/><br/>Awesome,<br/>Spent two hundred to go listen to Wu Bai sing Wu Bai's songs outside Wu Bai's concert,<br/>The biggest regret in life,<br/>Is hearing Wu Bai sing properly, so properly,,,"
            },
            images: [
                { src: "concert/20231013/00.jpg", alt: { zh: "伍佰演唱会", en: "Wu Bai Concert" } }
            ],
            songlist: [
                { zh: "海浪", en: "Ocean Waves" },
                { zh: "上瘾了", en: "Addicted" },
                { zh: "风火", en: "Wind and Fire" },
                { zh: "黄色月亮", en: "Yellow Moon" },
                { zh: "泪桥", en: "Bridge of Tears" },
                { zh: "Last Dance", en: "Last Dance" },
                { zh: "一点点", en: "A Little Bit" },
                { zh: "怎样歌", en: "How Song" },
                { zh: "浪人情歌", en: "Wanderer's Love Song" },
                { zh: "挪威的森林", en: "Norwegian Wood" },
                { zh: "被动", en: "Passive" },
                { zh: "夏夜晚风", en: "Summer Night Wind" },
                { zh: "彩虹", en: "Rainbow" },
                { zh: "白鸽", en: "White Dove" },
                { zh: "树风", en: "Tree Wind" },
                { zh: "背叛", en: "Betrayal" },
                { zh: "纯白的起点", en: "Pure White Beginning" },
                { zh: "妳是我的完美", en: "You Are My Perfect" },
                { zh: "皇后的高跟鞋", en: "Queen's High Heels" },
                { zh: "原本当初", en: "Originally" },
                { zh: "钉子花", en: "Nail Flower" },
                { zh: "梦醒时分", en: "When the Dream Awakens" },
                { zh: "世界第一等", en: "Number One in the World" },
                { zh: "你是我的花朵", en: "You Are My Flower" },
                { zh: "九重天", en: "Nine Heavens" },
                { zh: "突然的自我", en: "Unexpected Self" },
                { zh: "再度重相逢", en: "Meet Again" },
                { zh: "爱你一万年", en: "Love You For Ten Thousand Years" },
                { zh: "痛哭的人", en: "The One Who Cries" },
                { zh: "亲爱的妳", en: "Dear You" },
                { zh: "一亲红颜", en: "Touching Beauty" },
                { zh: "与你到永久", en: "With You Forever" },
                { zh: "我会好好的", en: "I Will Be Fine" },
                { zh: "心爱的再会啦", en: "My Beloved See You Again" }
            ]
        }, {
            id: 4,
            artist: { zh: "任贤齐", en: "Richie Jen" },
            concertName: { zh: "齐迹在路上", en: "Miracle on the Road" },
            theme: {
                zh: "以\"齐迹在路上\"为名，寓意\"奇迹在路上\"。此次巡演不仅是一场音乐演出，更是一场汇聚集体记忆、制造共鸣奇迹的温暖旅程，以任贤齐的音乐足迹为线索，既是对歌手个人生涯的致敬，也是对一代人青春的回响与致敬。",
                en: "Richie Jen Live 2024 is not just a concert, but a warm journey that gathers collective memories and creates resonant miracles, using Richie Jen's musical footprints as a clue. It is a tribute to the singer's personal career and a reverberation and homage to the youth of a generation."
            },
            location: { zh: "广东 · 佛山 · 佛山体育馆", en: "Guangdong · Foshan" },
            date: "2024.12.08",
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
                { src: "concert/20241208/00.jpg", alt: { zh: "任贤齐演唱会", en: "Richie Jen Concert" } },
                { src: "concert/20241208/01.jpg", alt: { zh: "任贤齐演唱会", en: "Richie Jen Concert" } },
                { src: "concert/20241208/02.jpg", alt: { zh: "任贤齐演唱会", en: "Richie Jen Concert" } },
                { src: "concert/20241208/03.jpg", alt: { zh: "任贤齐演唱会", en: "Richie Jen Concert" } },
                { src: "concert/20241208/04.jpg", alt: { zh: "任贤齐演唱会", en: "Richie Jen Concert" } }
            ],
            video: {
                zh: "BV1MB6xB9EV7",
                en: "BV1MB6xB9EV7"
            },
            videoUrl: {
                zh: Bil_Url.spaceBaseUrl + '7719476',
                en: Bil_Url.spaceBaseUrl + '7719476'
            },
            songlist: [
                { zh: "心太软", en: "Heart Too Soft" },
                { zh: "伤心太平洋", en: "Sad Pacific", link: Bil_Url.videoBaseUrl + 'BV13a6xBZEB3' },
                { zh: "对面的女孩看过来", en: "Look Over Here, Girl" },
                { zh: "浪花一朵朵", en: "A Spray of Waves" },
                { zh: "天涯", en: "The End of the World" },
                { zh: "我是一只鱼", en: "I Am A Fish" },
                { zh: "任逍遥", en: "Free and Unfettered" },
                { zh: "春天花会开", en: "Spring Flowers Will Bloom", link: Bil_Url.videoBaseUrl + 'BV11o6CBeEYZ' },
                { zh: "只爱你一个人", en: "Only Love You" },
                { zh: "依靠", en: "Depend On" },
                { zh: "很受伤", en: "Very Hurt" },
                { zh: "天使也一样", en: "Angel Is the Same" },
                { zh: "流着泪的你的脸", en: "Your Face With Tears" },
                { zh: "兄弟", en: "Brothers", link: Bil_Url.videoBaseUrl + 'BV1Y86xBFEYU' },
                { zh: "花好月圆夜", en: "Flowers Bloom Under Full Moon" },
                { zh: "有梦的人", en: "People With Dreams", link: Bil_Url.videoBaseUrl + 'BV1MB6xB9EV7' },
                { zh: "一念关山", en: "One Thought of the Mountain", link: Bil_Url.videoBaseUrl + 'BV1AS6xBjEGL' },
                { zh: "想你啦", en: "Missing You" },
                { zh: "你是我老婆", en: "You Are My Wife" },
                { zh: "漂洋过海来看你", en: "Cross the Ocean to See You" },
                { zh: "给你幸福", en: "Give You Happiness" },
                { zh: "还有我", en: "And Me" },
                { zh: "星语心愿", en: "Star Wish" },
                { zh: "烛光", en: "Candlelight" },
                { zh: "爱江山更爱美人", en: "Love the Kingdom More Than Beauty" },
                { zh: "沧海一声笑", en: "Laugh of the Sea", link: Bil_Url.videoBaseUrl + 'BV1uq6xBsETL' },
                { zh: "花太香", en: "Flower Too Fragrant" },
                { zh: "爱的路上只有我和你", en: "Only Me and You on the Road of Love" },
                { zh: "橘子香水", en: "Orange Perfume" },
                { zh: "死不了", en: "Can't Die" },
                { zh: "哭个痛快", en: "Cry Heartily" },
                { zh: "诛仙我回来", en: "Zhu Xian I Return" },
                { zh: "在路上", en: "On the Road" },
                { zh: "任性", en: "Willful", link: Bil_Url.videoBaseUrl + 'BV1c4jBzTEyC' },
                { zh: "男儿当自强", en: "A Man Should Be Strong" },
                { zh: "一生何求", en: "What to Seek in Life" },
                { zh: "让一切随风", en: "Let Everything Go with the Wind" },
                { zh: "海阔天空", en: "Boundless Sky" }
            ]
        }, {
            id: 5,
            artist: { zh: "孙燕姿", en: "Stefanie Sun" },
            concertName: { zh: "AUT NIHILO", en: "AUT NIHILO" },
            theme: {
                zh: "孙燕姿说，既然\"不能在日落前相聚\"，那就\"在日落之后好好庆祝\"。巡演的主题旨在\"将生命中的每一个日落串起\"，更深层的含义则是\"日落前的灿烂，日落后的勇气，一切都是值得从零开始\"。孙燕姿也希望再次与观众创造美好的回忆。",
                en: "Stefanie Sun says, since 'we couldn't gather before sunset,' then 'let's celebrate beautifully after sunset.' The tour's theme aims to 'string together every sunset in life,' with the deeper meaning being 'the brilliance before sunset, the courage after sunset, everything is worth starting from zero.' Stefanie Sun also hopes to create beautiful memories with the audience again through this tour."
            },
            location: { zh: "广东 · 深圳 · 深圳湾体育中心", en: "Guangdong · Shenzhen" },
            date: "2025.05.18",
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
                { src: "concert/20250518/00.jpg", alt: { zh: "孙燕姿演唱会", en: "Stefanie Sun Concert" } },
                { src: "concert/20250518/02.jpg", alt: { zh: "孙燕姿演唱会", en: "Stefanie Sun Concert" } },
                { src: "concert/20250518/03.jpg", alt: { zh: "孙燕姿演唱会", en: "Stefanie Sun Concert" } },
                { src: "concert/20250518/04.jpg", alt: { zh: "孙燕姿演唱会", en: "Stefanie Sun Concert" } },
                { src: "concert/20250518/05.jpg", alt: { zh: "孙燕姿演唱会", en: "Stefanie Sun Concert" } }
            ],
            video: {
                zh: "BV1g9Q6BFEnW",
                en: "BV1g9Q6BFEnW"
            },
            videoUrl: {
                zh: Bil_Url.spaceBaseUrl + '7719553',
                en: Bil_Url.spaceBaseUrl + '7719553'
            },
            songlist: [
                { zh: "极美", en: "Extremely Beautiful" },
                { zh: "我要的幸福", en: "The Happiness I Want" },
                { zh: "超快感", en: "Super Speed" },
                { zh: "绿光", en: "Green Light" },
                { zh: "神奇", en: "Magical" },
                { zh: "我的爱", en: "My Love" },
                { zh: "我不爱", en: "I Don't Love" },
                { zh: "我不难过", en: "I'm Not Sad" },
                { zh: "隐形人", en: "Invisible Man" },
                { zh: "奔", en: "Run" },
                { zh: "风筝", en: "Kite" },
                { zh: "逃亡", en: "Escape" },
                { zh: "完美的一天", en: "A Perfect Day" },
                { zh: "The Moment", en: "The Moment", link: Bil_Url.videoBaseUrl + 'BV1g9Q6BFEnW' },
                { zh: "遇见", en: "Encounter" },
                { zh: "我怀念的", en: "What I Miss" },
                { zh: "平日快乐", en: "Happy Ordinary Days" },
                { zh: "第一天", en: "First Day" },
                { zh: "逆光", en: "Against the Light" },
                { zh: "天黑黑", en: "Cloudy Day" },
                { zh: "Stefanie", en: "Stefanie" },
                { zh: "彩虹金刚", en: "Rainbow King Kong" },
                { zh: "随堂测验", en: "Pop Quiz" },
                { zh: "真的", en: "Really" },
                { zh: "祝你开心", en: "Wish You Happy" },
                { zh: "克卜勒", en: "Kepler" },
                { zh: "没有人的方向", en: "Direction With No One" },
                { zh: "一样的夏天", en: "Same Summer" },
                { zh: "雨天", en: "Rainy Day" },
                { zh: "当冬夜渐暖", en: "When Winter Night Warms" },
                { zh: "爱情证书", en: "Love Certificate" },
                { zh: "漩涡", en: "Vortex" },
                { zh: "我也很想他", en: "I Miss Him Too" }
            ]
        }, {
            id: 6,
            artist: { zh: "周传雄", en: "Steve Chou" },
            concertName: { zh: "念念不忘・再遇见", en: "Unforgettable・Reunion" },
            theme: {
                zh: "主题寓意\"念念不忘，必有回响\"。这是周传雄的首轮大型体育场巡演，旨在以 \"庆典\" 为核心概念，与歌迷进行一场盛大的重逢。演唱会带领观众在《黄昏》、《寂寞沙洲冷》等时代金曲中，与曾经的自己温柔相拥，重温青春记忆。",
                en: "The theme implies 'if you never forget, there will be an echo.' This is Steve Chou's first large-scale stadium tour, aiming to use 'celebration' as the core concept for a grand reunion with fans. The concert leads the audience through timeless classics like 'Twilight' and 'Lonely Sandbar Cold,' gently embracing their former selves and reliving youthful memories."
            },
            location: { zh: "广西 · 南宁 · 广西体育中心体育场", en: "Guangxi · Nanning" },
            date: "2025.11.15",
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
                { src: "concert/20251115/00.jpg", alt: { zh: "周传雄演唱会", en: "Steve Chou Concert" } },
                { src: "concert/20251115/01.jpg", alt: { zh: "周传雄演唱会", en: "Steve Chou Concert" } },
                { src: "concert/20251115/02.jpg", alt: { zh: "周传雄演唱会", en: "Steve Chou Concert" } },
                { src: "concert/20251115/03.jpg", alt: { zh: "周传雄演唱会", en: "Steve Chou Concert" } },
                { src: "concert/20251115/04.jpg", alt: { zh: "周传雄演唱会", en: "Steve Chou Concert" } },
                { src: "concert/20251115/05.jpg", alt: { zh: "周传雄演唱会", en: "Steve Chou Concert" } },
                { src: "concert/20251115/06.jpg", alt: { zh: "周传雄演唱会", en: "Steve Chou Concert" } }
            ],
            video: {
                zh: "BV1aS6sB4EiC",
                en: "BV1aS6sB4EiC"
            },
            videoUrl: {
                zh: Bil_Url.spaceBaseUrl + '7719512',
                en: Bil_Url.spaceBaseUrl + '7719512'
            },
            songlist: [
                { zh: "花香", en: "Flower Fragrance", link: Bil_Url.videoBaseUrl + 'BV1CsF5zaEfU' },
                { zh: "蓝色土耳其", en: "Blue Turkey", link: Bil_Url.videoBaseUrl + 'BV17E6xBqEXL' },
                { zh: "记事本", en: "Notebook", link: Bil_Url.videoBaseUrl + 'BV18mZaBXEQD' },
                { zh: "弱水三千", en: "Three Thousand Weak Waters", link: Bil_Url.videoBaseUrl + 'BV1SmZaBXEqr' },
                { zh: "孤单的习惯", en: "Habit of Loneliness" },
                { zh: "今宵酒醒何处", en: "Where Will I Wake Tonight" },
                { zh: "我该怎么爱你", en: "How Should I Love You" },
                { zh: "我的心太乱", en: "My Heart Is Too Messy", link: Bil_Url.videoBaseUrl + 'BV1YCZaBxEFs' },
                { zh: "关不上的窗", en: "Window That Won't Close", link: Bil_Url.videoBaseUrl + 'BV1YCZaBxEKo' },
                { zh: "哈萨雅琪", en: "Hasayaqi", link: Bil_Url.videoBaseUrl + 'BV1YCZaBxEw2' },
                { zh: "You Should Try", en: "You Should Try" },
                { zh: "再出发", en: "Start Again", link: Bil_Url.videoBaseUrl + 'BV1hyZaBRE13' },
                { zh: "哈啰", en: "Hello" },
                { zh: "滴滴滴滴", en: "Di Di Di Di" },
                { zh: "暖风", en: "Warm Wind" },
                { zh: "伤痛无声", en: "Silent Pain" },
                { zh: "幸福的瞬间", en: "Moment of Happiness", link: Bil_Url.videoBaseUrl + 'BV1QyZaBREwQ' },
                { zh: "末班车", en: "Last Bus" },
                { zh: "男人海洋", en: "Man's Ocean", link: Bil_Url.videoBaseUrl + 'BV1nG6xBrEWi' },
                { zh: "我在身边", en: "I'm By Your Side", link: Bil_Url.videoBaseUrl + 'BV1L7ZYBAE2E' },
                { zh: "给你的歌", en: "Song For You" },
                { zh: "出卖", en: "Betrayal", link: Bil_Url.videoBaseUrl + 'BV15AF5zmExf' },
                { zh: "冬天的秘密", en: "Winter's Secret", link: Bil_Url.videoBaseUrl + 'BV1A2FVzbEuy' },
                { zh: "我难过", en: "I'm Sad" },
                { zh: "快乐练习曲", en: "Practice of Happiness" },
                { zh: "忘记", en: "Forget", link: Bil_Url.videoBaseUrl + 'BV1r86sBgEDp' },
                { zh: "再见北极雪", en: "Goodbye Arctic Snow", link: Bil_Url.videoBaseUrl + 'BV1hmZaBXEKs' },
                { zh: "寂寞边界", en: "Lonely Boundary" },
                { zh: "青花", en: "Blue Flower", link: Bil_Url.videoBaseUrl + 'BV1oH6xBvEzn' },
                { zh: "黄昏", en: "Dusk", link: Bil_Url.videoBaseUrl + 'BV1SG6sBQEcN' },
                { zh: "有没有一首歌会让你想起我", en: "Is There A Song That Makes You Think of Me", link: Bil_Url.videoBaseUrl + 'BV1aS6sB4EiC' },
                { zh: "寂寞沙洲冷", en: "Lonely Sandbar", link: Bil_Url.videoBaseUrl + 'BV1xF6xBSECo' }
            ]
        }, {
            id: 7,
            artist: { zh: "邓紫棋", en: "G.E.M." },
            concertName: { zh: "I AM GLORIA 2.0", en: "I AM GLORIA 2.0" },
            theme: {
                zh: "\"I AM GLORIA\"是邓紫棋暌违六年举办的巡演。她表示，在这六年间世界发生了巨大变化，肆虐的疫情、接二连三的他国战争以及各种天灾人祸，导致许多人都像行走在荒漠里，在迷惘中渴望着驱散黑暗的曙光。邓紫棋希望可以通过歌声诉说自己经历孤独黑暗、渴望光明和自我救赎的过程，用音乐激荡人们的心灵。",
                en: "I AM GLORIA is G.E.M.'s tour after a six-year hiatus. She says that during these six years, the world has changed dramatically. The rampant pandemic, successive wars in other countries, and various natural and man-made disasters have left many people walking through a desert, longing for light that dispels darkness in confusion. G.E.M. hopes to use her voice to tell her story of experiencing loneliness and darkness, yearning for light and self-redemption, inspiring people's souls through music."
            },
            location: { zh: "广西 · 南宁 · 广西体育中心体育场", en: "Guangxi · Nanning" },
            date: "2025.11.30",
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
                { src: "concert/20251130/00.jpg", alt: { zh: "邓紫棋演唱会", en: "G.E.M. Concert" } },
                { src: "concert/20251130/01.jpg", alt: { zh: "邓紫棋演唱会", en: "G.E.M. Concert" } },
                { src: "concert/20251130/02.jpg", alt: { zh: "邓紫棋演唱会", en: "G.E.M. Concert" } },
                { src: "concert/20251130/03.jpg", alt: { zh: "邓紫棋演唱会", en: "G.E.M. Concert" } },
                { src: "concert/20251130/05.jpg", alt: { zh: "邓紫棋演唱会", en: "G.E.M. Concert" } },
                { src: "concert/20251130/06.jpg", alt: { zh: "邓紫棋演唱会", en: "G.E.M. Concert" } }
            ],
            video: {
                zh: "BV1g9Q6BFEMe",
                en: "BV1g9Q6BFEMe"
            },
            videoUrl: {
                zh: Bil_Url.spaceBaseUrl + '7719554',
                en: Bil_Url.spaceBaseUrl + '7719554'
            },
            songlist: [
                { zh: "摩天动物园", en: "Skyscraper Zoo", link: Bil_Url.videoBaseUrl + 'BV1eGXEBrEWe' },
                { zh: "灰狼", en: "Grey Wolf" },
                { zh: "来自天堂的魔鬼", en: "Devil from Heaven", link: Bil_Url.videoBaseUrl + 'BV1pqXEBsEPC' },
                { zh: "光年之外", en: "Light Years Away", link: Bil_Url.videoBaseUrl + 'BV1Y5XEBgEQG' },
                { zh: "差不多姑娘", en: "Almost Girl", link: Bil_Url.videoBaseUrl + 'BV1WeXEB4EcR' },
                { zh: "透明", en: "Transparent", link: Bil_Url.videoBaseUrl + 'BV1v3XEBGELq' },
                { zh: "HELL", en: "HELL" },
                { zh: "孤独", en: "Lonely" },
                { zh: "冰河时代", en: "Ice Age", link: Bil_Url.videoBaseUrl + 'BV1duXEBCE8E' },
                { zh: "于是", en: "So", link: Bil_Url.videoBaseUrl + 'BV1X7XEBMEMM' },
                { zh: "再见", en: "Goodbye", link: Bil_Url.videoBaseUrl + 'BV1e9XEBCEXa' },
                { zh: "你不是第一个离开的人", en: "You're Not the First to Leave", link: Bil_Url.videoBaseUrl + 'BV1v3XEBGEvN' },
                { zh: "睡公主", en: "Sleeping Princess", link: Bil_Url.videoBaseUrl + 'BV1pqXEBsEPM' },
                { zh: "A.I.N.Y.", en: "A.I.N.Y.", link: Bil_Url.videoBaseUrl + 'BV1CvXEBdE7z' },
                { zh: "Where Did U Go", en: "Where Did U Go", link: Bil_Url.videoBaseUrl + 'BV1CvXEBdE8M' },
                { zh: "存在", en: "Existence" },
                { zh: "你把我灌醉", en: "You Drunk Me", link: Bil_Url.videoBaseUrl + 'BV1V9XEBCEDT' },
                { zh: "你不是真正的快乐", en: "You're Not Truly Happy", link: Bil_Url.videoBaseUrl + 'BV1pqXEBsEHJ' },
                { zh: "红蔷薇白玫瑰", en: "Red Rose White Rose", link: Bil_Url.videoBaseUrl + 'BV1WeXEB4E2q' },
                { zh: "唯一", en: "The One", link: Bil_Url.videoBaseUrl + 'BV1V9XEBCEC7' },
                { zh: "句号", en: "Period", link: Bil_Url.videoBaseUrl + 'BV1kqXEBsEeC' },
                { zh: "GLORIA", en: "GLORIA" },
                { zh: "You Raise Me Up", en: "You Raise Me Up" },
                { zh: "让世界暂停一分钟", en: "Let the World Pause for a Minute", link: Bil_Url.videoBaseUrl + 'BV1R3XEBGE4y' },
                { zh: "老人与海", en: "Old Man and the Sea" },
                { zh: "多远都要在一起", en: "Together No Matter How Far", link: Bil_Url.videoBaseUrl + 'BV1kBXEB9EMe' },
                { zh: "FIND YOU", en: "FIND YOU" },
                { zh: "喜欢你", en: "Like You", link: Bil_Url.videoBaseUrl + 'BV1e5XEBgEMD' },
                { zh: "夜的尽头", en: "End of the Night", link: Bil_Url.videoBaseUrl + 'BV1n6XEBpEu4' },
                { zh: "倒数", en: "Countdown", link: Bil_Url.videoBaseUrl + 'BV1HBXEB9ETW' },
                { zh: "新的心跳", en: "New Heartbeat", link: Bil_Url.videoBaseUrl + 'BV1WeXEB4EUT' },
                { zh: "泡沫", en: "Bubble", link: Bil_Url.videoBaseUrl + 'BV1g9Q6BFEMe' },
                { zh: "我的秘密", en: "My Secret" },
                { zh: "回忆的沙漏", en: "Sands of Memories" },
                { zh: "少年与海", en: "Youth and the Sea" },
                { zh: "海阔天空", en: "Boundless Sky", link: Bil_Url.videoBaseUrl + 'BV1ECXEBnEdo' },
                { zh: "天空没有极限", en: "Sky Has No Limit", link: Bil_Url.videoBaseUrl + 'BV1HBXEB9E3z' },
                { zh: "龙卷风", en: "Tornado", link: Bil_Url.videoBaseUrl + 'BV1HBXEB9EEg' }
            ]
        }, {
            id: 8,
            artist: { zh: "李荣浩", en: "Li Ronghao" },
            concertName: { zh: "黑马", en: "Dark Horse" },
            theme: {
                zh: "主题源自其第八张创作专辑《黑马》，旨在传递 \"黑马不是不合群，是听天不由命，我们每个人都是一匹黑马\" 的精神。舞台中心矗立巨型黑马艺术装置，整场演出是一场关于坚持、梦想与自我突破的音乐叙事，旨在唤醒每个人心中的潜能。",
                en: "The theme originates from his eighth original album 'Dark Horse,' aiming to convey the spirit that 'a dark horse isn't antisocial, but refuses to accept fate. Each of us is a dark horse.' A giant dark horse art installation stands at the center of the stage, making the entire show a musical narrative about perseverance, dreams, and self-breakthrough, awakening the potential within everyone."
            },
            location: { zh: "广东 · 清远 · 清远体育中心体育场", en: "Guangdong · Qingyuan" },
            date: "2026.01.02",
            poster: "concert/poster/20260102.jpg",
            tags: {
                zh: ["歌谣", "李荣浩", "海陆风", "机车", "紫荆花盛开", "香港", "旅行", "背包客", "台湾", "鹅銮鼻", "太平洋", "黑马"],
                en: ["Ballad", "Li Ronghao", "Sea-Land Breeze", "Motorcycle", "Bauhinia in Bloom", "Hong Kong", "Travel", "Backpacker", "Taiwan", "Eluanbi", "Pacific Ocean", "Ocean Sound", "Dark Horse"]
            },
            description: {
                zh: "此行终究是有些遗憾，<br/>未能听到《歌谣》的live。<br/>倒是一首《海陆风》，<br/>浅浅地抓住了我，<br/>海陆风？<br/>是否蓝天白云，<br/>沿着228国道，<br/>戴耳机骑机车，<br/>迎面扑来的那种富有节奏的呼吸？<br/><br/>那到底是什么的风？<br/>还是不知方向的疯？<br/> 我不知道，<br/><br/> 《紫荆花盛开》，<br/>这歌我也十分喜欢，<br/>是献礼HK回归祖国25周年作品，<br/>对于HK，近十几年去过各大城市，<br/>可HK却始终还没踏足，<br/>去别人世界转转是需要态度，<br/><br/>回程时忽然想起，<br/> 很多年前的我，<br/> 那时还是背包客，<br/> 在台湾极南点鹅銮鼻，<br/> 曾录下一段太平洋的海声，<br/>那就，边听边走，，，",
                en: "This trip ended with some regrets after all,<br/>I didn't get to hear a live performance of 『Ballad』.<br/>Instead, a song called 『Sea-Land Breeze』,<br/>Gently captured my heart,<br/>Sea-Land Breeze?<br/>Was it the blue skies and white clouds,<br/>Riding along National Highway 228 on a motorcycle with headphones on,<br/>That rhythmic breath rushing towards your face?<br/><br/>What kind of wind was that really?<br/>Or was it a directionless madness?<br/> I don't know,<br/><br/> 『Bauhinia in Full Bloom』,<br/>I also like this song very much,<br/>It was a work commemorating the 25th anniversary of HK's return to the motherland,<br/>Over the past decade or so, I've visited many major cities,<br/>But I still haven't set foot in HK,<br/>It takes an attitude to step into someone else's world,<br/><br/>On the way back, I suddenly remembered,<br/> Myself from many years ago,<br/> When I was still a backpacker,<br/> At Taiwan's southernmost point, Eluanbi,<br/> I once recorded the sound of the Pacific Ocean,<br/>So then, listening as I walk,,,"
            },
            images: [
                { src: "concert/20260102/00.jpg", alt: { zh: "李荣浩演唱会", en: "Li Ronghao Concert" } },
                { src: "concert/20260102/01.jpg", alt: { zh: "李荣浩演唱会", en: "Li Ronghao Concert" } },
                { src: "concert/20260102/02.jpg", alt: { zh: "李荣浩演唱会", en: "Li Ronghao Concert" } },
                { src: "concert/20260102/03.jpg", alt: { zh: "李荣浩演唱会", en: "Li Ronghao Concert" } },
                { src: "concert/20260102/04.jpg", alt: { zh: "李荣浩演唱会", en: "Li Ronghao Concert" } },
                { src: "concert/20260102/05.jpg", alt: { zh: "李荣浩演唱会", en: "Li Ronghao Concert" } }
            ],
            video: {
                zh: "BV1ADfCB5EYL",
                en: "BV1ADfCB5EYL"
            },
            videoUrl: {
                zh: Bil_Url.spaceBaseUrl + '7719488',
                en: Bil_Url.spaceBaseUrl + '7719488'
            },
            songlist: [
                { zh: "黑马", en: "Dark Horse", link: Bil_Url.videoBaseUrl + 'BV1ADfCB5EYL' },
                { zh: "快让我在雪地上撒点儿野", en: "Let Me Go Wild on the Snow" },
                { zh: "嗯", en: "Hmm" },
                { zh: "走走", en: "Walk", link: Bil_Url.videoBaseUrl + 'BV1FTQUBeEJB' },
                { zh: "鸿门宴", en: "Hongmen Banquet", link: Bil_Url.videoBaseUrl + 'BV1e7QUBdEqm' },
                { zh: "海陆风", en: "Sea and Land Wind" },
                { zh: "一百", en: "One Hundred" },
                { zh: "名字", en: "Name", link: Bil_Url.videoBaseUrl + 'BV14RfBBKEX9' },
                { zh: "乌梅子酱", en: "Plum Sauce", link: Bil_Url.videoBaseUrl + 'BV1BgQUBhEb1' },
                { zh: "戒烟", en: "Quit Smoking", link: Bil_Url.videoBaseUrl + 'BV1K1fCBmEgD' },
                { zh: "李白", en: "Li Bai", link: Bil_Url.videoBaseUrl + 'BV12xfyBJEwF' },
                { zh: "模特", en: "Model", link: Bil_Url.videoBaseUrl + 'BV1oEf8BZEbb' },
                { zh: "年少有为", en: "Young and Promising", link: Bil_Url.videoBaseUrl + 'BV1xuASz3EdS' },
                { zh: "不将就", en: "Won't Compromise", link: Bil_Url.videoBaseUrl + 'BV1MPASzyEyJ' },
                { zh: "麻雀", en: "Sparrow", link: Bil_Url.videoBaseUrl + 'BV1bmAbz9EKo' },
                { zh: "爸爸妈妈", en: "Mom and Dad", link: Bil_Url.videoBaseUrl + 'BV1LkQ6BqEFt' },
                { zh: "老街", en: "Old Street", link: Bil_Url.videoBaseUrl + 'BV1DxQUBnE7x' },
                { zh: "喜剧之王", en: "King of Comedy", link: Bil_Url.videoBaseUrl + 'BV1BgQUBhEpk' },
                { zh: "作曲家", en: "Composer", link: Bil_Url.videoBaseUrl + 'BV15yQ6BKEac' },
                { zh: "不遗憾", en: "No Regrets", link: Bil_Url.videoBaseUrl + 'BV1WxQ6BEE5U' },
                { zh: "等着等着就老了", en: "Waiting Until I'm Old" },
                { zh: "都一样", en: "All the Same" },
                { zh: "恋人", en: "Lover", link: Bil_Url.videoBaseUrl + 'BV1JYQ6BCEBP' },
                { zh: "拿走了什么", en: "What Was Taken" },
                { zh: "慢慢喜欢你", en: "Slowly Like You" },
                { zh: "丑八怪", en: "Ugly Monster", link: Bil_Url.videoBaseUrl + 'BV1pxQ6BEEy9' },
                { zh: "不再见", en: "No More Seeing", link: Bil_Url.videoBaseUrl + 'BV1WWQ6BSEby' },
                { zh: "女儿国", en: "Kingdom of Women", link: Bil_Url.videoBaseUrl + 'BV1irQ6BMEKg' },
                { zh: "慢冷", en: "Slowly Cold", link: Bil_Url.videoBaseUrl + 'BV184QUBSE8a' },
                { zh: "落俗", en: "Cliché" },
                { zh: "乐团", en: "Band", link: Bil_Url.videoBaseUrl + 'BV1DxQUBnEeR' },
                { zh: "歌谣", en: "Ballad" },
                { zh: "紫荆花盛开", en: "Bauhinia in Bloom", link: Bil_Url.videoBaseUrl + 'BV1izQ6BzEev' },
                { zh: "脱胎换骨", en: "Reborn" },
                { zh: "假面", en: "Mask", link: Bil_Url.videoBaseUrl + 'BV1Epf1B3ERr' },
                { zh: "Made Me a Man（嘉宾：王嘉尔）", en: "Made Me a Man (Guest: Wang Jiaer)" }
            ]
        }, {
            id: 9,
            artist: { zh: "伍佰", en: "Wu Bai" },
            concertName: { zh: "Rock Star 2", en: "Rock Star 2" },
            theme: {
                zh: "伍佰宣告演唱会以 \"怎么酷怎么排\" 为最高准则，展开一场反套路的摇滚美学实验。他强调 \"这是我们的演唱会，不是我的演唱会\"，将歌迷视为 \"特别来宾\"。演出融合铜管乐、电子音效与现代舞，对经典曲目进行全新改编，旨在打造跨越代际的 \"万人KTV\" 现场。",
                en: "Wu Bai declares that the concert follows the principle of 'however cool it can be arranged', launching an anti-routine rock aesthetic experiment. He emphasizes 'this is our concert, not mine,' treating fans as 'special guests.' The performance blends brass instruments, electronic sound effects, and modern dance, offering fresh reinterpretations of classic tracks to create an intergenerational '10,000-person KTV' experience."
            },
            location: { zh: "江西 · 南昌 · 南昌国际体育中心", en: "Jiangxi · Nanchang" },
            date: "2026.01.09",
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
                { src: "concert/20260109/00.jpg", alt: { zh: "伍佰演唱会", en: "Wu Bai Concert" } },
                { src: "concert/20260109/01.jpg", alt: { zh: "伍佰演唱会", en: "Wu Bai Concert" } },
                { src: "concert/20260109/02.jpg", alt: { zh: "伍佰演唱会", en: "Wu Bai Concert" } },
                { src: "concert/20260109/03.jpg", alt: { zh: "伍佰演唱会", en: "Wu Bai Concert" } },
                { src: "concert/20260109/04.jpg", alt: { zh: "伍佰演唱会", en: "Wu Bai Concert" } },
                { src: "concert/20260109/05.jpg", alt: { zh: "伍佰演唱会", en: "Wu Bai Concert" } },
                { src: "concert/20260109/06.jpg", alt: { zh: "伍佰演唱会", en: "Wu Bai Concert" } }
            ],
            video: {
                zh: "BV1ZuQqBaEBm",
                en: "BV1ZuQqBaEBm"
            },
            videoUrl: {
                zh: Bil_Url.spaceBaseUrl + '7719548',
                en: Bil_Url.spaceBaseUrl + '7719548'
            },
            songlist: [
                { zh: "翅膀", en: "Wings", link: Bil_Url.videoBaseUrl + 'BV1MNQ1BMENz' },
                { zh: "你是我的花朵", en: "You Are My Flower", link: Bil_Url.videoBaseUrl + 'BV14jQ6BsEDZ' },
                { zh: "再度重相逢", en: "Meet Again", link: Bil_Url.videoBaseUrl + 'BV1aTQ6BhEpJ' },
                { zh: "冲冲冲", en: "Go Go Go" },
                { zh: "梦醒时分", en: "When the Dream Awakens", link: Bil_Url.videoBaseUrl + 'BV1uwQ1BgEtU' },
                { zh: "坚强的理由", en: "Reason to Be Strong" },
                { zh: "爱拼才会赢", en: "Only by Striving Can You Win" },
                { zh: "爱情限时批", en: "Love Limited Time" },
                { zh: "原本当初", en: "Originally" },
                { zh: "夏夜晚风", en: "Summer Night Wind", link: Bil_Url.videoBaseUrl + 'BV1xuQ1BvEhJ' },
                { zh: "白鸽", en: "White Dove", link: Bil_Url.videoBaseUrl + 'BV1vDQyBmEpN' },
                { zh: "我会好好的", en: "I Will Be Fine" },
                { zh: "挪威的森林", en: "Norwegian Wood", link: Bil_Url.videoBaseUrl + 'BV15yQ6BKE55' },
                { zh: "上瘾了", en: "Addicted" },
                { zh: "黄色月亮", en: "Yellow Moon", link: Bil_Url.videoBaseUrl + 'BV1EDQUBPEtt' },
                { zh: "突然的自我", en: "Unexpected Self", link: Bil_Url.videoBaseUrl + 'BV1jZQzBBEi5' },
                { zh: "最想你的", en: "Missing You Most" },
                { zh: "爱你一万年", en: "Love You For Ten Thousand Years" },
                { zh: "世界第一等", en: "Number One in the World", link: Bil_Url.videoBaseUrl + 'BV1tjQ6BsEPt' },
                { zh: "泪桥", en: "Bridge of Tears", link: Bil_Url.videoBaseUrl + 'BV14vQUB5E5d' },
                { zh: "与你到永久", en: "With You Forever" },
                { zh: "Last Dance", en: "Last Dance", link: Bil_Url.videoBaseUrl + 'BV1ZuQqBaEBm' },
                { zh: "彩虹", en: "Rainbow", link: Bil_Url.videoBaseUrl + 'BV1A5Q1BwEmf' },
                { zh: "怎样歌", en: "How Song" },
                { zh: "被动", en: "Passive", link: Bil_Url.videoBaseUrl + 'BV1PGQ1BYE5s' },
                { zh: "晚风", en: "Night Wind", link: Bil_Url.videoBaseUrl + 'BV1aTQ6BhEVA' },
                { zh: "浪人情歌", en: "Wanderer's Love Song", link: Bil_Url.videoBaseUrl + 'BV14vQUB5EMT' }
            ]
        }, {
            id: 10,
            artist: { zh: "周杰伦", en: "Jay Chou" },
            concertName: { zh: "嘉年华Ⅱ 世界巡回演唱会", en: "CARNIVAL Ⅱ World Tour" },
            theme: {
                zh: "2026年巡演首创\"一城一名\"定制模式，每座城市均以周董歌名或专辑定调，打造不可复制的仪式感。南宁站定名为\"甜甜的\"，既源自《甜甜的》那首轻快俏皮的经典情歌，更与这座城市的气质不谋而合，青秀山的清风、南湖的波光、老街的糖水铺，处处透着温润与甘甜。\甜甜的\"不只是一首歌，更是一种城市情绪：是南宁街头的果香四溢，是夜市里的一碗糖水，是周氏情歌里那份青春的悸动与温柔。",
                en: "The 2026 world tour first pioneered the \"one city, one person\" custom mode, with each city using the week-end song or album name as the theme, creating an uncopyable experience. The Nanning station was named \"Smooth and Sweet\" not only for the classic song \"Smooth and Sweet\" but also for its unique city atmosphere, with the fresh breeze of Qingxi, the refreshing waves of Nanhai, and the sweet tea of Lijiang. \"Smooth and Sweet\" isn't just a song; it's a city emotion: the fresh fruit on the street, the sweet tea in the market, and the tender song of the family. "
            },
            location: { zh: "广西 · 南宁 · 广西体育中心体育场", en: "Guangxi · Nanning" },
            date: "2026.04.17",
            poster: "concert/poster/20260417.jpg",
            tags: {
                zh: ["周杰伦", "甜甜的", "青春", "校园", "梦想"],
                en: ["Jay Chou", "Smooth and Sweet", "Youth", "School", "Dream"]
            },
            description: {
                zh: "2026年的夏天，<br/>南宁被周杰伦\"嘉年华Ⅱ\"世界巡回演唱会的\"一城一主题\"，<br/>轻轻烙上了\"甜甜的\"印记。<br/><br/>这份\"甜甜的\"，是《甜甜的》里那句软绵的\"我轻轻地尝一口，你说的爱我\"，<br/>是高中课间偷偷凑在一起的耳机里，缓缓流淌出的温柔旋律。<br/>那时的我们，总觉得未来遥不可及，梦想大得能装下整个世界，<br/>而所谓烦恼，不过是试卷上鲜红的分数，<br/>是隔壁班那个身影掠过眼角时，心头泛起的细碎涟漪。<br/>周杰伦的歌，<br/>是我们整个青春最妥帖的背景音，<br/>用他独有的含糊咬字、天马行空的编曲，<br/>妥帖接住了所有无处安放的心事，<br/>也盛下了少年人滚烫的憧憬与向往。<br/><br/>二十多年匆匆而过，<br/>我们从青涩校园踏入烟火人间，<br/>从懵懂少年蜕变成肩负家庭与事业的中年人。<br/>生活的滋味早已褪去了年少时的纯粹，<br/>多了几分奋斗的涩、责任的咸，也沉淀出收获的甘。<br/><br/>散场时，<br/>南宁的夜风裹着街角糖水铺的甜香，轻轻漫过肩头。<br/>手机里存着今晚唯一一张照片，舞台上的光影如星瀑倾泻，<br/>模糊得如同被时光温柔包裹的记忆本身。<br/>朋友圈终究没有更新，有些\"甜甜的\"，本就不必与人共享。<br/>它是中年生活里一块私藏的糖，<br/>不张扬、不喧哗，<br/>却能在往后无数个需要力量的时刻，悄悄化开，<br/>用二十多年前的温柔，熨帖当下所有的疲惫与忙碌。",
                en: "In the summer of 2026,<br/>Nanning was gently branded with the mark of \"Sweetness\" by the \"One City, One Theme\" of Jay Chou's \"Carnival Ⅱ\" World Tour.<br/><br/>This \"sweetness\" comes from the soft lyrics \"I gently take a sip of what you called love\" in the song \"Sweet\",<br/>from the gentle melodies flowing through shared earphones during high school breaks.<br/>Back then, we always felt the future was impossibly far, our dreams big enough to fill the entire world,<br/>and what we called worries were nothing more than the bright red scores on our test papers,<br/>and the ripples in our hearts when a figure from the next class passed by our eyes.<br/>Jay Chou's songs<br/>were the most perfect soundtrack to our entire youth,<br/>with his unique slurred pronunciation and imaginative arrangements,<br/> faithfully catching all our restless thoughts,<br/>and holding the hot aspirations and longing of every young person.<br/><br/>Twenty-something years rushed past,<br/>we stepped from green school campuses into the worldly life,<br/>transforming from confused youths into middle-aged people shouldering families and careers.<br/>The flavors of life have long lost the purity of our younger days,<br/>gaining some bitterness of struggle, saltiness of responsibility, and the sweetness of harvest.<br/><br/>As the show ended,<br/>Nanning's night breeze carried the sweet fragrance from the street-side dessert shop, gently drifting over our shoulders.<br/>The only photo saved on my phone tonight shows starlight cascading down the stage,<br/>blurred like the memory itself, gently wrapped by time.<br/>I never posted to social media; some \"sweetness\" doesn't need to be shared with others.<br/>It's a privately kept candy in midlife,<br/>unassuming, undisruptive,<br/>yet capable of dissolving quietly in countless moments when we need strength,<br/>using the tenderness from over twenty years ago to soothe all present exhaustion and busyness."
            },
            images: [
                { src: "concert/20260417/00.jpg", alt: { zh: "周杰伦演唱会", en: "Jay Chou Concert" } },
                { src: "concert/20260417/01.jpg", alt: { zh: "周杰伦演唱会", en: "Jay Chou Concert" } },
                { src: "concert/20260417/02.jpg", alt: { zh: "周杰伦演唱会", en: "Jay Chou Concert" } },
                { src: "concert/20260417/03.jpg", alt: { zh: "周杰伦演唱会", en: "Jay Chou Concert" } },
                { src: "concert/20260417/04.jpg", alt: { zh: "周杰伦演唱会", en: "Jay Chou Concert" } },
                { src: "concert/20260417/05.jpg", alt: { zh: "周杰伦演唱会", en: "Jay Chou Concert" } },
                { src: "concert/20260417/06.jpg", alt: { zh: "周杰伦演唱会", en: "Jay Chou Concert" } },
                { src: "concert/20260417/07.jpg", alt: { zh: "周杰伦演唱会", en: "Jay Chou Concert" } },
                { src: "concert/20260417/08.jpg", alt: { zh: "周杰伦演唱会", en: "Jay Chou Concert" } },
                { src: "concert/20260417/09.jpg", alt: { zh: "周杰伦演唱会", en: "Jay Chou Concert" } },
                { src: "concert/20260417/10.jpg", alt: { zh: "周杰伦演唱会", en: "Jay Chou Concert" } },
                { src: "concert/20260417/11.jpg", alt: { zh: "周杰伦演唱会", en: "Jay Chou Concert" } },
                { src: "concert/20260417/12.jpg", alt: { zh: "周杰伦演唱会", en: "Jay Chou Concert" } },
                { src: "concert/20260417/13.jpg", alt: { zh: "周杰伦演唱会", en: "Jay Chou Concert" } }
            ],
            video: {
                zh: "BV1hsowBPEMU",
                en: "BV1hsowBPEMU"
            },
            videoUrl: {
                zh: Bil_Url.spaceBaseUrl + '7941208',
                en: Bil_Url.spaceBaseUrl + '7941208'
            },
            songlist: [
                { zh: "乌克丽丽", en: "Ukulele" },
                { zh: "断了的弦", en: "Broken String", link: Bil_Url.videoBaseUrl + 'BV1KEojBvEp6' },
                { zh: "太阳之子", en: "Son of the Sun" },
                { zh: "惊叹号", en: "Exclamation Mark" },
                { zh: "甜甜的", en: "Sweet", link: Bil_Url.videoBaseUrl + 'BV1WWojBcEDb' },
                { zh: "简单爱", en: "Simple Love", link: Bil_Url.videoBaseUrl + 'BV1AWojBcE25' },
                { zh: "黑色毛衣", en: "Black Sweater", link: Bil_Url.videoBaseUrl + 'BV1A6oLBbEf3' },
                { zh: "飘移", en: "Drift", link: Bil_Url.videoBaseUrl + 'BV1hsowBPEMU' },
                { zh: "一路向北", en: "All The Way North", link: Bil_Url.videoBaseUrl + 'BV1KzoLBwEn5' },
                { zh: "那天下雨了", en: "That Day It Rained", link: Bil_Url.videoBaseUrl + 'BV17doLBJEbS' },
                { zh: "蜗牛 (嘉宾：曹杨)", en: "Snail (Guest: Cao Yang)", link: Bil_Url.videoBaseUrl + 'BV17doLBJEx6' },
                { zh: "黑色幽默", en: "Black Humor", link: Bil_Url.videoBaseUrl + 'BV1qdoLBJEBG' },
                { zh: "世界末日", en: "World's End", link: Bil_Url.videoBaseUrl + 'BV16SoLBWE2d' },
                { zh: "说好的幸福呢", en: "Promised Happiness", link: Bil_Url.videoBaseUrl + 'BV1nmoLBREmk' },
                { zh: "连名带姓 (嘉宾：曹杨)", en: "Full Name (Guest: Cao Yang)", link: Bil_Url.videoBaseUrl + 'BV1EXoLBHE2J' },
                { zh: "发如雪", en: "Hair Like Snow", link: Bil_Url.videoBaseUrl + 'BV1FvoEBhEYT' },
                { zh: "湘女多情", en: "Hunan Girl's Love", link: Bil_Url.videoBaseUrl + 'BV1zXoLBHE5v' },
                { zh: "兰亭序", en: "Lanting Xu", link: Bil_Url.videoBaseUrl + 'BV1JDoLBXEs5' },
                { zh: "龙拳", en: "Dragon Fist", link: Bil_Url.videoBaseUrl + 'BV1JvoEBhEoS' },
                { zh: "双截棍", en: "Nunchucks", link: Bil_Url.videoBaseUrl + 'BV1JvoEBhEoS' },
                { zh: "以父之名", en: "In the Name of the Father", link: Bil_Url.videoBaseUrl + 'BV1HeoEBwEEV' },
                { zh: "夜曲", en: "Nocturne", link: Bil_Url.videoBaseUrl + 'BV1fBoEBtEcu' },
                { zh: "迷迭香", en: "Rosemary", link: Bil_Url.videoBaseUrl + 'BV1neoEBwEda' },
                { zh: "Mojito", en: "Mojito", link: Bil_Url.videoBaseUrl + 'BV1fBoEBtEPg' },
                { zh: "I Do", en: "I Do", link: Bil_Url.videoBaseUrl + 'BV1AboEBvEfw' },
                { zh: "女儿殿下", en: "Princess Daughter", link: Bil_Url.videoBaseUrl + 'BV1stoEBKETx' },
                { zh: "三年二班", en: "Class 3-2", link: Bil_Url.videoBaseUrl + 'BV1HaoEBYEH9' },
                { zh: "告白气球", en: "Love Confession Balloon", link: Bil_Url.videoBaseUrl + 'BV1XDoEBJERC' },
                { zh: "爱将不同凡响 (嘉宾：刘畊宏)", en: "Love Is Extraordinary (Guest: Liu Fano)", link: Bil_Url.videoBaseUrl + 'BV1caoEBYE4T' },
                { zh: "天涯过客", en: "Passenger at the Horizon", link: Bil_Url.videoBaseUrl + 'BV1caoEBYEfM' },
                { zh: "魔术先生", en: "Magic Mr.", link: Bil_Url.videoBaseUrl + 'BV1v1oEB9E8y' },
                { zh: "哪里都是你", en: "You Are Everywhere", link: Bil_Url.videoBaseUrl + 'BV1v1oEB9EQH' },
                { zh: "跨时代", en: "Cross Era", link: Bil_Url.videoBaseUrl + 'BV19UoEBDEKf' },
                { zh: "珊瑚海", en: "Coral Sea", link: Bil_Url.videoBaseUrl + 'BV1VUoEBQEeR' },
                { zh: "七里香", en: "Common Jasmine Orange", link: Bil_Url.videoBaseUrl + 'BV1GDoEBnEjP' },
                { zh: "爱你没差", en: "Love You No Difference", link: Bil_Url.videoBaseUrl + 'BV1GDoEBnE1S' },
                { zh: "搁浅", en: "Stranded", link: Bil_Url.videoBaseUrl + 'BV1ozoEBdEZi' },
                { zh: "可爱女人", en: "Cute Woman", link: Bil_Url.videoBaseUrl + 'BV1BzoEBZECm' },
                { zh: "屋顶", en: "Rooftop", link: Bil_Url.videoBaseUrl + 'BV1BzoEBZECm' },
                { zh: "时光机", en: "Time Machine", link: Bil_Url.videoBaseUrl + 'BV1ozoEBoEU1' },
                { zh: "淘汰", en: "Elimination", link: Bil_Url.videoBaseUrl + 'BV1dyoEBWE3p' },
                { zh: "分裂", en: "Split", link: Bil_Url.videoBaseUrl + 'BV1okoEBRELw' },
                { zh: "枫", en: "Maple", link: Bil_Url.videoBaseUrl + 'BV1okoEBRELw' },
                { zh: "稻香", en: "Rice Field Fragrance", link: Bil_Url.videoBaseUrl + 'BV1okoEBREnJ' },
                { zh: "等你下课", en: "Waiting for You After Class", link: Bil_Url.videoBaseUrl + 'BV1ikoEBdEQ3' },
                { zh: "暗号", en: "Secret Code", link: Bil_Url.videoBaseUrl + 'BV1vvovBvEr1' },
                { zh: "超人不会飞", en: "Superhero Doesn't Fly", link: Bil_Url.videoBaseUrl + 'BV1vvovBvE6P' },
                { zh: "给我一首歌的时间", en: "Give Me a Song's Time", link: Bil_Url.videoBaseUrl + 'BV1vvovBvEh2' },
                { zh: "蒲公英的约定", en: "The Promise of Dandelion", link: Bil_Url.videoBaseUrl + 'BV1vvovBvEtZ' }
            ]
        }, {
            id: 11,
            artist: { zh: "蔡依林", en: "Jolin Cai" },
            concertName: { zh: "PLEASURE 世界巡回演唱会", en: "PLEASURE World Tour" },
            theme: {
                zh: "蔡依林全新主题巡回演唱会 \"PLEASURE\"，以\"面对内心、找到真实自我\"为核心命题，打造出一座横跨音乐、视觉与感官体验的巨型舞台。整场演出围绕\"一个女孩的成长故事\"展开：她从童年的花园出走，穿越现实与欲望的挑战，在一次次考验中重新拥抱自己，最终找到回归内在的稳定力量。",
                en: "Jolin Cai's brand new themed tour \"PLEASURE\" centers on the core proposition of \"facing your inner self and finding your authentic self,\" creating a massive stage that spans music, visuals, and sensory experiences. The entire performance revolves around \"a girl's growth story\": she departs from the garden of childhood, traverses challenges of reality and desire, re-embraces herself through countless trials, and finally finds the stable power to return to her inner self."
            },
            location: { zh: "广西 · 南宁 · 广西体育中心体育场", en: "Guangxi · Nanning" },
            date: "2026.05.03",
            poster: "concert/poster/20260503.jpg",
            tags: {
                zh: ["蔡依林", "PLEASURE", "青春", "倒带", "舞娘"],
                en: ["Jolin Cai", "PLEASURE", "Youth", "Dance", "Dance"]
            },
            description: {
                zh: "蔡依林“PLEASURE”世界巡演南宁站呈现了一场颠覆传统的演出，<br>全程无嘉宾、无点歌、无冗长互动，只有整整120分钟不间断的歌唱。<br><br>从《Pleasure》前奏响起，蔡依林便以纯粹的音乐能量掌控全场。 <br>她将三十年音乐生涯凝练成一条流动的声轨：《舞娘》的力量，《倒带》的深情，《怪美的》的自信……<br>超过三十首金曲在精密编排下自然衔接，形成一部完整的“人生原声带”。<br> <br>蔡依林证明：当作品足够强大时，纯粹的音乐本身，便是最动人的语言。",
                en: "Jolin Cai's \"PLEASURE\" World Tour Nanning stop presented a performance that subverted tradition,<br>featuring no guest appearances, no song requests, no lengthy interactions—just a full 120 minutes of uninterrupted singing.<br><br>From the moment the prelude of \"Pleasure\" played, Jolin Cai commanded the entire venue with pure musical energy.<br>She condensed thirty years of her musical career into a flowing soundtrack: the power of \"Dancing Queen,\" the deep emotions of \"Count on Me,\" the confidence of \"Play\"...<br>Over thirty golden hits naturally connected through precise choreography, forming a complete \"Life Soundtrack.\"<br><br>Jolin Cai proved: when the work is strong enough, pure music itself is the most moving language."
            },
            images: [
                { src: "concert/20260503/01.jpg", alt: { zh: "蔡依林演唱会", en: "Jolin Cai Concert" } },
                { src: "concert/20260503/02.jpg", alt: { zh: "蔡依林演唱会", en: "Jolin Cai Concert" } },
                { src: "concert/20260503/03.jpg", alt: { zh: "蔡依林演唱会", en: "Jolin Cai Concert" } },
                { src: "concert/20260503/05.jpg", alt: { zh: "蔡依林演唱会", en: "Jolin Cai Concert" } },
                { src: "concert/20260503/06.jpg", alt: { zh: "蔡依林演唱会", en: "Jolin Cai Concert" } },
                { src: "concert/20260503/07.jpg", alt: { zh: "蔡依林演唱会", en: "Jolin Cai Concert" } },
                { src: "concert/20260503/08.jpg", alt: { zh: "蔡依林演唱会", en: "Jolin Cai Concert" } },
                { src: "concert/20260503/09.jpg", alt: { zh: "蔡依林演唱会", en: "Jolin Cai Concert" } },
                { src: "concert/20260503/10.jpg", alt: { zh: "蔡依林演唱会", en: "Jolin Cai Concert" } },
                { src: "concert/20260503/11.jpg", alt: { zh: "蔡依林演唱会", en: "Jolin Cai Concert" } },
                { src: "concert/20260503/13.jpg", alt: { zh: "蔡依林演唱会", en: "Jolin Cai Concert" } }
            ],
            video: {
                zh: "BV1SaRqBtE81",
                en: "BV1SaRqBtE81"
            },
            videoUrl: {
                zh: Bil_Url.spaceBaseUrl + '8034050',
                en: Bil_Url.spaceBaseUrl + '8034050'
            },
            songlist: [
                { zh: "SEVEN", en: "SEVEN", link: Bil_Url.videoBaseUrl + 'BV1rsR1BNEyM' },
                { zh: "红衣女孩", en: "Red Dress Girl", link: Bil_Url.videoBaseUrl + 'BV1rsR1BNE5p' },
                { zh: "美杜莎", en: "Medusa", link: Bil_Url.videoBaseUrl + 'BV1wpR1BqEmD' },
                { zh: "DIY", en: "DIY", link: Bil_Url.videoBaseUrl + 'BV1kHR1BTE29' },
                { zh: "I'm Not Yours", en: "I'm Not Yours", link: Bil_Url.videoBaseUrl + 'BV17DRyBbE6S' },
                { zh: "恶之必要", en: "Necessary Evil", link: Bil_Url.videoBaseUrl + 'BV1wBRkBfEFw' },
                { zh: "特务J", en: "Agent J", link: Bil_Url.videoBaseUrl + 'BV1J2RyBwEGK' },
                { zh: "大艺术家", en: "Great Artist", link: Bil_Url.videoBaseUrl + 'BV15jRyBQEtT' },
                { zh: "你也有今天", en: "You Have Today Too", link: Bil_Url.videoBaseUrl + 'BV1HyRyBYEFX' },
                { zh: "热冬", en: "Hot Winter", link: Bil_Url.videoBaseUrl + 'BV1usRyBjES8' },
                { zh: "BloodyMary", en: "Bloody Mary", link: Bil_Url.videoBaseUrl + 'BV1LDRkBDECr' },
                { zh: "甜秘密", en: "Sweet Secret", link: Bil_Url.videoBaseUrl + 'BV1QpRyBmEKh' },
                { zh: "Woman's Work", en: "Woman's Work", link: Bil_Url.videoBaseUrl + 'BV1XFR1BHE17' },
                { zh: "美人计", en: "Beauty Trap", link: Bil_Url.videoBaseUrl + 'BV13HRyBEEUq' },
                { zh: "Fish Love", en: "Fish Love", link: Bil_Url.videoBaseUrl + 'BV1gsRyBjE6x' },
                { zh: "诗人漫步", en: "Poet Walking", link: Bil_Url.videoBaseUrl + 'BV18xRyB1Exd' },
                { zh: "妥协", en: "Compromise", link: Bil_Url.videoBaseUrl + 'BV1wqRkB8ERb' },
                { zh: "Pillow", en: "Pillow", link: Bil_Url.videoBaseUrl + 'BV1MtRyB5EfA' },
                { zh: "天空", en: "Sky", link: Bil_Url.videoBaseUrl + 'BV1SARnBVE8M' },
                { zh: "倒带", en: "Rewind", link: Bil_Url.videoBaseUrl + 'BV1SaRqBtE81' },
                { zh: "假装", en: "Pretend", link: Bil_Url.videoBaseUrl + 'BV14TRnB6ENy' },
                { zh: "柠檬草的味道", en: "Lemon Grass Flavor", link: Bil_Url.videoBaseUrl + 'BV1TaRyBrEPw' },
                { zh: "消极掰", en: "Bye Negative", link: Bil_Url.videoBaseUrl + 'BV1KaRyBrEgY' },
                { zh: "Inside Out", en: "Inside Out", link: Bil_Url.videoBaseUrl + 'BV1nJRnBaEZT' },
                { zh: "Safari", en: "Safari", link: Bil_Url.videoBaseUrl + 'BV18ARnBVEE4' },
                { zh: "日不落", en: "Sun Never Sets", link: Bil_Url.videoBaseUrl + 'BV1WLRnBNEN4' },
                { zh: "马德里不思议", en: "Madrid Unbelievable", link: Bil_Url.videoBaseUrl + 'BV1hZRJB2EXA' },
                { zh: "说爱你", en: "Say Love You", link: Bil_Url.videoBaseUrl + 'BV1hcRnByEcB' },
                { zh: "脑公", en: "Hubby", link: Bil_Url.videoBaseUrl + 'BV1WLRnBNEF6' },
                { zh: "花蝴蝶", en: "Flower Butterfly", link: Bil_Url.videoBaseUrl + 'BV1WLRnBNEJ6' },
                { zh: "看我72变", en: "Watch My 72 Changes", link: Bil_Url.videoBaseUrl + 'BV1WLRnBNEpQ' },
                { zh: "Pleasure", en: "Pleasure", link: Bil_Url.videoBaseUrl + 'BV1rBRJB8E51' },
                { zh: "爱无赦", en: "Love Unpunished", link: Bil_Url.videoBaseUrl + 'BV16rRJBtEwp' },
                { zh: "怪美的", en: "Beautiful But Weird", link: Bil_Url.videoBaseUrl + 'BV1AeRJBPEXD' },
                { zh: "舞娘", en: "Dancing Girl", link: Bil_Url.videoBaseUrl + 'BV16rRJBtEKM' },
                { zh: "Stars Align", en: "Stars Align", link: Bil_Url.videoBaseUrl + 'BV16BRJB8ErB' },
                { zh: "Play我呸", en: "Play I'm Awesome", link: Bil_Url.videoBaseUrl + 'BV1FrRJBbErq' }
            ]
        }, {
            id: 12,
            artist: { zh: "李荣浩", en: "Li Ronghao" },
            concertName: { zh: "黑马", en: "Dark Horse" },
            theme: {
                zh: "主题源自其第八张创作专辑《黑马》，旨在传递 \"黑马不是不合群，是听天不由命，我们每个人都是一匹黑马\" 的精神。舞台中心矗立巨型黑马艺术装置，整场演出是一场关于坚持、梦想与自我突破的音乐叙事，旨在唤醒每个人心中的潜能。",
                en: "The theme originates from his eighth original album 'Dark Horse,' aiming to convey the spirit that 'a dark horse isn't antisocial, but refuses to accept fate. Each of us is a dark horse.' A giant dark horse art installation stands at the center of the stage, making the entire show a musical narrative about perseverance, dreams, and self-breakthrough, awakening the potential within everyone."
            },
            location: { zh: "广西 · 南宁 · 广西体育中心体育场", en: "Guangxi · Nanning" },
            date: "2026.05.24",
            poster: "concert/poster/20260524.jpg",
            tags: {
                zh: ["乌梅子酱", "青皮甘蔗", "杨丞琳", "黑马", "李荣浩"],
                en: ["Dark Plum Sauce", "Green Sugarcane", "Rainie Yang", "Dark Horse", "Li Ronghao"]
            },
            description: {
                zh: "那晚的甜，<br/>是唱《乌梅子酱》时塞进他怀里的两根青皮甘蔗。<br/>酸，<br/>是歌迷说第一次追的是杨丞琳，他笑着转账二百元。<br/>咸，<br/>是唱《黑马》时汗水蛰眼，他戴上墨镜继续嘶吼。<br/><br/>散场时，数万人手机的光，汇成了地上星河。<br/>那个即兴的、不完美的夏夜，成了我们共同的，发着光的回忆。",
                en: "The sweetness of that night,<br/>Was the two green sugarcanes stuffed into his arms while singing \"Dark Plum Sauce.\"<br/>The sourness,<br/>Was when a fan said they first followed Rainie Yang, and he laughed while transferring 200 yuan as \"jealousy payment.\"<br/>The saltiness,<br/>Was when sweat stung his eyes while singing \"Dark Horse,\" and he put on sunglasses to keep roaring.<br/><br/>When the show ended, the light from tens of thousands of phones converged into a galaxy on the ground.<br/>That improvised, imperfect summer night became our shared, glowing parentheses."
            },
            images: [
                { src: "concert/20260524/02.jpg", alt: { zh: "李荣浩演唱会", en: "Li Ronghao Concert" } },
                { src: "concert/20260524/03.jpg", alt: { zh: "李荣浩演唱会", en: "Li Ronghao Concert" } },
                { src: "concert/20260524/04.jpg", alt: { zh: "李荣浩演唱会", en: "Li Ronghao Concert" } },
                { src: "concert/20260524/05.jpg", alt: { zh: "李荣浩演唱会", en: "Li Ronghao Concert" } },
                { src: "concert/20260524/07.jpg", alt: { zh: "李荣浩演唱会", en: "Li Ronghao Concert" } },
                { src: "concert/20260524/08.jpg", alt: { zh: "李荣浩演唱会", en: "Li Ronghao Concert" } },
                { src: "concert/20260524/09.jpg", alt: { zh: "李荣浩演唱会", en: "Li Ronghao Concert" } },
                { src: "concert/20260524/10.jpg", alt: { zh: "李荣浩演唱会", en: "Li Ronghao Concert" } },
                { src: "concert/20260524/11.jpg", alt: { zh: "李荣浩演唱会", en: "Li Ronghao Concert" } },
                { src: "concert/20260524/12.jpg", alt: { zh: "李荣浩演唱会", en: "Li Ronghao Concert" } },
                { src: "concert/20260524/13.jpg", alt: { zh: "李荣浩演唱会", en: "Li Ronghao Concert" } }
            ],
            video: {
                zh: "BV1XmGo6SEmt",
                en: "BV1XmGo6SEmt"
            },
            videoUrl: {
                zh: Bil_Url.spaceBaseUrl + '8201616',
                en: Bil_Url.spaceBaseUrl + '8201616'
            },
            songlist: [
                { zh: "黑马", en: "Dark Horse" },
                { zh: "快让我在雪地上撒点野", en: "Let Me Go Wild on the Snow", link: Bil_Url.videoBaseUrl + 'BV1MDE268ETU' },
                { zh: "嗯", en: "Hmm", link: Bil_Url.videoBaseUrl + 'BV1PFEm6WENW' },
                { zh: "慢冷", en: "Slowly Cold", link: Bil_Url.videoBaseUrl + 'BV1WjE26XEfS' },
                { zh: "走走", en: "Walk", link: Bil_Url.videoBaseUrl + 'BV1tjED6uEdi' },
                { zh: "老街", en: "Old Street", link: Bil_Url.videoBaseUrl + 'BV1BhE26VEw4' },
                { zh: "喜剧之王", en: "King of Comedy", link: Bil_Url.videoBaseUrl + 'BV1YTED6LEwB' },
                { zh: "乐团", en: "Band", link: Bil_Url.videoBaseUrl + 'BV1xVE26RE39' },
                { zh: "鸿门宴", en: "Hongmen Banquet", link: Bil_Url.videoBaseUrl + 'BV1ffJ56oEMa' },
                { zh: "乌梅子酱", en: "Plum Sauce", link: Bil_Url.videoBaseUrl + 'BV1wQJ56YE7p' },
                { zh: "恋人", en: "Lover", link: Bil_Url.videoBaseUrl + 'BV13YJ561EkM' },
                { zh: "戒烟", en: "Quit Smoking", link: Bil_Url.videoBaseUrl + 'BV1rbJp6nEaa' },
                { zh: "耳朵", en: "Ear", link: Bil_Url.videoBaseUrl + 'BV1QYJ561EpE' },
                { zh: "爸爸妈妈", en: "Mom and Dad", link: Bil_Url.videoBaseUrl + 'BV1gvJ565EdH' },
                { zh: "紫荆花盛开", en: "Purple Poppy Blooming", link: Bil_Url.videoBaseUrl + 'BV1JjJ564EwB' },
                { zh: "女儿国", en: "Kingdom of Women", link: Bil_Url.videoBaseUrl + 'BV1ixJ56nEFX' },
                { zh: "李白", en: "Li Bai", link: Bil_Url.videoBaseUrl + 'BV18gJp6YEs6' },
                { zh: "作曲家", en: "Composer", link: Bil_Url.videoBaseUrl + 'BV1LxJ56nEsF' },
                { zh: "不再见", en: "No More Seeing", link: Bil_Url.videoBaseUrl + 'BV1qiJp61EC1' },
                { zh: "拿走了什么", en: "What Was Taken", link: Bil_Url.videoBaseUrl + 'BV1qiJp61EC1' },
                { zh: "慢慢喜欢你", en: "Slowly Like You", link: Bil_Url.videoBaseUrl + 'BV1qiJp61EC1' },
                { zh: "丑八怪", en: "Ugly Monster", link: Bil_Url.videoBaseUrl + 'BV1h9JV6GEN5' },
                { zh: "不遗憾", en: "No Regrets", link: Bil_Url.videoBaseUrl + 'BV1CtJV6FEkt' },
                { zh: "麻雀", en: "Sparrow", link: Bil_Url.videoBaseUrl + 'BV1caJV6tEDb' },
                { zh: "年少有为", en: "Young and Promising", link: Bil_Url.videoBaseUrl + 'BV1FvJV6xEv3' },
                { zh: "海陆风", en: "Sea and Land Wind", link: Bil_Url.videoBaseUrl + 'BV1XmGo6SEmt' },
                { zh: "太坦白", en: "Too Frank" },
                { zh: "不将就", en: "Won't Compromise", link: Bil_Url.videoBaseUrl + 'BV1amJp6ME9T' },
                { zh: "模特", en: "Model", link: Bil_Url.videoBaseUrl + 'BV1vrJp6GE4s' },
                { zh: "我看着你的时候", en: "When I Look at You" },
                { zh: "名字", en: "Name", link: Bil_Url.videoBaseUrl + 'BV1LzJp6CE8X' },
                { zh: "自拍", en: "Selfie" },
                { zh: "纵横四海", en: "Across the Four Seas", link: Bil_Url.videoBaseUrl + 'BV12cJ56qERU' }
            ]
        }, {
            id: 13,
            artist: { zh: "侧田", en: "Justin Lo" },
            concertName: { zh: "再一起 COME TOGETHER", en: "COME TOGETHER" },
            theme: {
                zh: "侧田2026\"再一起 COME TOGETHER\"巡回演唱会是一场为纪念歌手出道20周年而特别打造的系列演出，其核心主题是\"重逢\"与\"延续\"。演唱会以侧田代表作《命硬》中的一句经典歌词为灵感命名，旨在唤起歌迷共同的情感记忆，在音乐中实现与歌手、与青春岁月的再度相聚。",
                en: "Justin Lo's 2026 \"COME TOGETHER\" tour is a special series of performances created to commemorate his 20th anniversary since debut. The core theme is \"reunion\" and \"continuation.\" Named after a classic lyric from his representative work \"Hard Fate\", the concert aims to evoke shared emotional memories among fans, achieving a reunion with the artist and youthful years through music."
            },
            location: { zh: "广东 · 东莞 · 东莞篮球中心", en: "Guangdong · Dongguan" },
            date: "2026.06.27",
            poster: "concert/poster/20260627.jpg",
            tags: {
                zh: ["命硬", "男人KTV", "情歌", "OldBoy", "侧田", "再一起 COME TOGETHER"],
                en: ["Hard Fate", "Man KTV", "Love Song", "OldBoy", "Justin Lo", "COME TOGETHER"]
            },
            description: {
                zh: "当《命硬》的前奏响起，全场灯光暗下又瞬间亮起，万人齐声合唱的瞬间，所有情绪都被点燃。《男人KTV》《情歌》《好人》《Kong》一首首经典轮番唱响，每一句歌词都是刻在青春里的印记，耳机里循环过无数次的旋律，终于在现场与万人同频共振。<br/><br/>出道 20 年，侧田的嗓音依旧极具穿透力，真假音转换丝滑，稳得 CD 质感，即兴改编与吉他 solo 更是尽显唱作实力。他带来全新创作《OldBoy》，也奉上资深乐迷心心念念的 \"沧海遗珠\"，既有情怀杀，也有新鲜感动。<br/><br/>最动人的从不是完美舞台，而是 “再一起  COME TOGETHER” 的意义：是跨越 20 年的双向奔赴，是陌生人因相同旋律相拥，是那些藏在粤语歌里的遗憾、倔强与温柔，终于在这一刻找到共鸣。",
                en: "When the prelude of \"Hard Fate\" played, the lights dimmed and instantly lit up again. In that moment of ten thousand people singing in unison, all emotions were ignited. \"Man KTV,\" \"Love Song,\" \"Good Person\", \"Kong\"—classics rang out one after another. Every lyric was etched in youth, melodies looped countless times in earphones finally resonating with ten thousand people at the venue.<br/><br/>Twenty years since debut, Justin Lo's voice remains piercing and powerful, with smooth transitions between real and falsetto, stable like CD quality. His impromptu adaptations and guitar solos fully demonstrate his singer-songwriter prowess. He brought the new creation \"OldBoy\" and delivered the \"hidden gems\" beloved by devoted fans—a blend of nostalgic nostalgia and fresh emotion.<br/><br/>The most moving part is never the perfect stage, but the meaning of \"COME TOGETHER\", it's a two-way journey spanning 20 years, strangers embracing over shared melodies, those regrets, stubbornness, and tenderness hidden in Cantonese songs finally finding resonance at this moment."
            },
            images: [
                { src: "concert/20260627/01.jpg", alt: { zh: "侧田演唱会", en: "Justin Lo Concert" } },
                { src: "concert/20260627/02.jpg", alt: { zh: "侧田演唱会", en: "Justin Lo Concert" } },
                { src: "concert/20260627/03.jpg", alt: { zh: "侧田演唱会", en: "Justin Lo Concert" } },
                { src: "concert/20260627/04.jpg", alt: { zh: "侧田演唱会", en: "Justin Lo Concert" } },
                { src: "concert/20260627/05.jpg", alt: { zh: "侧田演唱会", en: "Justin Lo Concert" } },
                { src: "concert/20260627/06.jpg", alt: { zh: "侧田演唱会", en: "Justin Lo Concert" } }
            ],
            video: {
                zh: "BV15uK96tE8M",
                en: "BV15uK96tE8M"
            },
            videoUrl: {
                zh: Bil_Url.spaceBaseUrl + '8454643',
                en: Bil_Url.spaceBaseUrl + '8454643'
            },
            songlist: [
                { zh: "Forget", en: "Forget" },
                { zh: "运", en: "Destiny" },
                { zh: "情歌", en: "Love Song" },
                { zh: "三十日", en: "Thirty Days" },
                { zh: "走音", en: "Off Key" },
                { zh: "男人KTV", en: "Man KTV" },
                { zh: "Erica", en: "Erica" },
                { zh: "决战二世祖", en: "Battle of the Second Generation" },
                { zh: "红地毡", en: "Red Carpet" },
                { zh: "咖啡因万岁", en: "Caffeine Forever" },
                { zh: "好人", en: "Good Person" },
                { zh: "情永落", en: "Love Will Fall" },
                { zh: "半杯入魂", en: "Half Cup Soul" },
                { zh: "Kong", en: "Kong" },
                { zh: "美丽之最", en: "Most Beautiful" },
                { zh: "OldBoy", en: "OldBoy" },
                { zh: "感动", en: "Moved" },
                { zh: "活多一次", en: "Live Once More" },
                { zh: "我有今日", en: "I Have Today" },
                { zh: "头条新闻", en: "Headline News" },
                { zh: "很想很想说再见", en: "Really Want to Say Goodbye" },
                { zh: "Volar", en: "Volar" },
                { zh: "UPSIDEDOWN", en: "UPSIDEDOWN" },
                { zh: "命硬", en: "Hard Fate" },
                { zh: "大象席地而坐", en: "Elephant Sitting" },
                { zh: "爱的习惯", en: "Habit of Love" },
                { zh: "伤追人", en: "Heartbroken Person" },
                { zh: "不经不觉", en: "Unconsciously" },
                { zh: "I Miss Love", en: "I Miss Love" }
            ]
        }
    ]
};

// 城市数据
const citiesBaseData = [
    { name: { zh: "北京", en: "Beijing" }, icon: "🏙️" },
    { name: { zh: "东莞", en: "Dongguan" }, icon: "🎸" },
    { name: { zh: "南京", en: "Nanjing" }, icon: "🍁" },
    { name: { zh: "南昌", en: "Nanchang" }, icon: "🌅" },
    { name: { zh: "清远", en: "Qingyuan" }, icon: "🏞️" },
    { name: { zh: "南宁", en: "Nanning" }, icon: "🌴" },
    { name: { zh: "深圳", en: "Shenzhen" }, icon: "🌃" },
    { name: { zh: "佛山", en: "Foshan" }, icon: "🎪" },
    { name: { zh: "西安", en: "Xi'an" }, icon: "⛩️" }
];
