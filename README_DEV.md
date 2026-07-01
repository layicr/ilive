# 🌍 演唱会足迹 (Concert Journey)

> 个人演唱会记录网站 — 用影像与文字，留住每一场盛夏的回响。

🌐 在线预览：https://layicr.github.io/ilive/

---

## 📖 项目简介

「演唱会足迹」是一个静态个人演唱会记录站点，用于沉淀作者观看过的所有演唱会回忆。每场演唱会都包含主题文案、现场图集、B站视频、完整歌单、城市标签等多维度信息，并通过时间轴、3D专辑堆叠、动态文本等方式呈现。

支持中英文双语切换，移动端适配，离线缓存（PWA）可访问。

---

## ✨ 核心功能

| 模块 | 说明 |
|------|------|
| 🎤 演唱会时间轴 | 按时间倒序展示所有演唱会卡片，点击查看详情 |
| 💿 3D专辑堆叠 | GSAP驱动的专辑轮播 + 详情面板，支持上/下一场切换 |
| 🖼️ 图片画廊 | 模态查看器，支持键盘导航、触摸滑动、懒加载 |
| 🎬 视频查看器 | 嵌入B站视频，iframe 播放 |
| 📜 歌单查看器 | 完整曲目列表，支持中英双语 |
| 🌐 双语切换 | 中英文实时切换，记忆用户偏好 |
| 🎵 背景音乐 | 自动播放、淡入淡出、状态同步 |
| 💫 许愿墙 | 卡片式心愿墙，支持点赞、空状态、相对时间 |
| 📊 数据统计 | 城市/艺人/场次自动统计 |
| 🔍 SEO优化 | JSON-LD结构化数据、OG/Twitter Card、sitemap |
| ⚡ PWA离线 | Service Worker分类型缓存策略 |
| 🐛 反馈入口 | 一键跳转GitHub Issue反馈问题 |

---

## 🛠️ 技术栈

- **HTML5 / CSS3 / 原生 JavaScript**（无构建工具）
- **GSAP 3.12** — 动画引擎
- **Tailwind CSS (CDN)** — 工具类样式
- **Font Awesome 6.4** — 图标
- **Service Worker** — 离线缓存
- **localStorage** — 语言偏好持久化
- **IntersectionObserver** — 滚动触发动画与懒加载
- **GitHub Pages** — 部署托管

---

## 📁 项目结构

```
ilive/
├── index.html              # 主页面入口
├── CNAME                   # 自定义域名 (ilive.lyc.la)
├── README.md               # 中文说明（演唱会列表）
├── README_EN.md            # 英文说明
├── 项目说明.md             # 本文档
├── LICENSE
│
├── css/
│   ├── load.css            # 加载/骨架屏样式
│   └── main.css            # 主样式
│
├── db/
│   ├── concerts_base.js    # 演唱会基础数据（多语言结构，数据源）
│   ├── datas_zh.js         # 由基础数据生成的中文数据
│   └── datas_en.js         # 由基础数据生成的英文数据
│
├── js/
│   ├── config.js           # 全局配置（GitHub、音乐、图片、动画、缓存等）
│   ├── utils.js            # 通用工具（防抖/节流/语言切换）
│   ├── error.js            # 错误处理与 Toast
│   ├── music.js            # 背景音乐播放器
│   ├── gallery.js          # 图片画廊与手势交互
│   ├── songlist.js         # 歌单查看器
│   ├── navigation.js       # 导航/返回顶部/模态框/反馈按钮
│   ├── language.js         # 语言切换与 i18n 文本
│   ├── main.js             # 主逻辑（初始化、渲染、动画协调）
│   ├── statis.js           # 统计代码（百度统计、GA4）
│   └── sw.js               # Service Worker
│
├── concert/
│   ├── poster/             # 演唱会海报
│   └── YYYYMM/             # 按月份组织的现场照片
│
├── img/                    # Logo 等静态图片
└── music/                  # 背景音乐 mp3
```

---

## 🚀 本地运行

项目为纯静态站点，无需安装依赖。

### 方式一：直接打开
双击 `index.html` 即可在浏览器中预览（部分功能如 Service Worker 需 http 环境）。


---

## 🔧 配置说明

全局配置集中在 `js/config.js` 的 `CONFIG` 对象：

| 配置分类 | 关键字段 | 用途 |
|---------|---------|------|
| GitHub | `GITHUB_REPO_URL` / `GITHUB_ISSUES_URL` | 反馈跳转 |
| 音乐 | `MUSIC_VOLUME` / `MUSIC_AUTOPLAY` | 背景音乐控制 |
| 图片 | `LAZY_LOAD_THRESHOLD` / `IMAGE_RETRY_MAX` | 懒加载与重试 |
| 动画 | `GSAP_ALBUM_DURATION` / `CAROUSEL_INTERVAL` | GSAP动画参数 |
| 手势 | `SWIPE_MIN_DISTANCE` | 触摸滑动阈值 |
| 缓存 | `CACHE_VERSION` / `CACHE_STRATEGY` | SW缓存策略 |
| UI | `SCROLL_THRESHOLD` / `TOAST_DURATION` | 交互阈值 |

> ⚠️ 修改 `CONFIG.CACHE_VERSION` 时需同步更新 `js/sw.js` 中的缓存版本号。

---

## 🌐 Service Worker 缓存策略

| 资源类型 | 策略 | 说明 |
|---------|------|------|
| 图片 | Stale-While-Revalidate | 返回缓存同时后台更新 |
| CSS/JS | Network-First | 优先网络，失败回退缓存 |
| HTML | Network-Only | 始终走网络，保证最新 |
| 其他 | Cache-First | 缓存优先，网络兜底 |

---

