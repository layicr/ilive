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
| 💿 3D专辑堆叠 | GSAP驱动的专辑轮播 + 详情面板，支持上/下一场切换、移动端滑动手势 |
| 🖼️ 图片画廊 | 模态查看器，支持键盘导航、触摸滑动、懒加载 |
| 🎬 视频查看器 | 嵌入B站视频，iframe 播放 |
| 📜 歌单查看器 | 完整曲目列表，支持中英双语、实时搜索过滤、分组显示 |
| 🔍 歌单搜索 | 实时搜索歌曲，支持中英文关键词，输入验证防护 |
| 📱 移动端手势 | 左右滑动切换演唱会详情和歌单，触摸反馈动画 |
| 🌐 双语切换 | 中英文实时切换，记忆用户偏好，动态更新所有文本 |
| 🎵 背景音乐 | 自动播放、淡入淡出、状态同步、音乐源切换 |
| 💫 许愿墙 | 卡片式心愿墙，数据存储在 datas_zh.js/en.js 的 wishesData 数组，支持点赞、空状态、相对时间显示、中英文双语 |
| 🔗 友情链接 | 动态生成页脚社交链接，支持中英文title切换 |
| 📊 数据统计 | 城市/艺人/场次自动统计 |
| 🔍 SEO优化 | JSON-LD结构化数据、OG/Twitter Card、sitemap |
| ⚡ PWA离线 | Service Worker分类型缓存策略 |
| 🐛 反馈入口 | 一键跳转GitHub Issue反馈问题 |
| 🔒 XSS安全防护 | 输入验证、HTML转义、URL验证、安全DOM操作 |
| ✨ 按钮动画优化 | Hover发光效果、点击反馈动画、脉冲动画 |

---

## 🛠️ 技术栈

- **HTML5 / CSS3 / 原生 JavaScript**（无构建工具）
- **GSAP 3.12.2** — 动画引擎（专辑堆叠、动态文本）
- **Tailwind CSS (CDN)** — 工具类样式
- **Font Awesome 6.4.0** — 图标库
- **Service Worker** — 离线缓存、PWA支持
- **localStorage** — 语言偏好持久化
- **IntersectionObserver** — 滚动触发动画、懒加载、返回顶部按钮
- **Touch Events API** — 移动端滑动手势识别
- **XSS防护机制** — 输入验证、HTML转义、URL验证
- **防抖/节流函数** — 优化搜索、滚动、动画性能
- **百度统计 / Google Analytics / 51.la** — 多维度用户行为分析
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
│   ├── datas_zh.js         # 中文数据（包含演唱会数据 concertDataZH 和许愿墙数据 wishesDataZH）
│   └── datas_en.js         # 英文数据（包含演唱会数据 concertDataEN 和许愿墙数据 wishesDataEN）
│
├── js/
│   ├── config.js           # 全局配置（GitHub、音乐、图片、动画、缓存等）
│   ├── utils.js            # 通用工具（防抖/节流/XSS防护/语言切换）
│   ├── error.js            # 错误处理与 Toast
│   ├── music.js            # 背景音乐播放器（自动播放、淡入淡出）
│   ├── gallery.js          # 图片画廊与手势交互（键盘导航、触摸滑动）
│   ├── songlist.js         # 歌单查看器（渲染、搜索、过滤、分组）
│   ├── navigation.js       # 导航/返回顶部/模态框/反馈按钮/触摸手势
│   ├── friendLink.js       # 友情链接动态生成（中英文切换）
│   ├── language.js         # 语言切换与 i18n 文本（页面内容更新）
│   ├── main.js             # 主逻辑（初始化、渲染、动画协调、3D专辑）
│   ├── statis.js           # 统计代码（百度统计、GA4、51.la）
│   └── sw.js               # Service Worker（分类型缓存策略）
│
├── concert/
│   ├── poster/             # 演唱会海报
│   └── YYYYMMDD/             # 按日期组织的现场照片
│
├── img/                    # Logo 等静态图片
│   └── logo.jpg           # 网站Logo
└── music/                  # 背景音乐 mp3
    ├── bgm_cn.mp3         # 中文版背景音乐
    └── bgm_en.mp3         # 英文版背景音乐
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
| 音乐 | `MUSIC_VOLUME` / `MUSIC_AUTOPLAY` / `MUSIC_FADE_DURATION` | 背景音乐控制与淡入淡出 |
| 图片 | `LAZY_LOAD_THRESHOLD` / `IMAGE_RETRY_MAX` / `IMAGE_RETRY_DELAY` | 懒加载、重试策略 |
| 动画 | `GSAP_ALBUM_DURATION` / `CAROUSEL_INTERVAL` / `ANIMATION_DURATION` | GSAP动画参数 |
| 手势 | `SWIPE_MIN_DISTANCE` / `SWIPE_MAX_TIME` / `SWIPE_OPACITY_MIN` | 触摸滑动阈值 |
| 缓存 | `CACHE_VERSION` / `CACHE_STRATEGY` | SW缓存策略 |
| UI | `SCROLL_THRESHOLD` / `TOAST_DURATION` / `SKELETON_MIN_WAIT` | 交互阈值、骨架屏 |
| 性能 | `PERFORMANCE_MONITOR` / `DEBOUNCE_RESIZE_DELAY` | 性能监控、防抖延迟 |
| 设备 | `MOBILE_BREAKPOINT` | 移动端断点 |
| XSS防护 | `sanitizeInput()` / `escapeHtml()` | 输入验证、HTML转义 |

### 核心工具函数（utils.js）

| 函数名 | 用途 |
|--------|------|
| `debounce(fn, delay)` | 防抖函数，用于搜索、滚动事件 |
| `throttle(fn, limit)` | 节流函数，用于动画、手势事件 |
| `escapeHtml(text)` | HTML转义，防止XSS注入 |
| `safeHtml(html)` | 安全HTML处理，允许特定标签 |
| `sanitizeInput(input, maxLength)` | 输入验证和净化，用于搜索框 |
| `safeCreateElement(tag, content, className)` | 安全创建DOM元素 |
| `getLangData(key)` | 获取当前语言数据 |
| `t(key)` | 翻译函数，用于i18n |

---

## 🌐 Service Worker 缓存策略

| 资源类型 | 策略 | 说明 |
|---------|------|------|
| 图片 | Stale-While-Revalidate | 返回缓存同时后台更新 |
| CSS/JS | Network-First | 优先网络，失败回退缓存 |
| HTML | Network-Only | 始终走网络，保证最新 |
| 其他 | Cache-First | 缓存优先，网络兜底 |

---

