//百度统计
var _hmt = _hmt || [];
(function () {
    var hm = document.createElement("script");
    hm.src = "https://hm.baidu.com/hm.js?314959f767a1bf837f2a6bc8ba6f5e2d";
    var s = document.getElementsByTagName("script")[0];
    s.parentNode.insertBefore(hm, s);
})();

//Google Analytics
(function() {
    // 1. 动态创建并加载 Google 的 gtag.js 主库
    const firstScript = document.createElement('script');
    firstScript.async = true;
    firstScript.src = 'https://www.googletagmanager.com/gtag/js?id=G-Y7B6DLCXSE';
    
    // 2. 在主库加载成功后，执行配置代码
    firstScript.onload = function() {
        // 初始化 dataLayer 和 gtag 函数
        window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());
        // 进行基础配置
        gtag('config', 'G-Y7B6DLCXSE');
        // 你可以在此处添加更多的 gtag('config', '其他ID') 或事件代码
        console.log('GA4 动态加载并初始化完成。');
    };
    // 可选：添加错误处理
    firstScript.onerror = function() {
        console.error('无法加载 Google Analytics gtag.js 主库。');
    };

    // 3. 将脚本标签插入文档，开始加载
    document.head.appendChild(firstScript);
})();

// 51la统计
!function (p) { "use strict"; !function (t) { var s = window, e = document, i = p, c = "".concat("https:" === e.location.protocol ? "https://" : "http://", "sdk.51.la/js-sdk-pro.min.js"), n = e.createElement("script"), r = e.getElementsByTagName("script")[0]; n.type = "text/javascript", n.setAttribute("charset", "UTF-8"), n.async = !0, n.src = c, n.id = "LA_COLLECT", i.d = n; var o = function () { s.LA.ids.push(i) }; s.LA ? s.LA.ids && o() : (s.LA = p, s.LA.ids = [], o()), r.parentNode.insertBefore(n, r) }() }({ id: "L8VlyZ1HkDS0E3VO", ck: "L8VlyZ1HkDS0E3VO" });