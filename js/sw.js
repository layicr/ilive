/**
 * Service Worker - 分类型缓存策略
 *
 * @module sw
 * @description 缓存关键资源，提升加载速度和离线体验
 * @requires 注意：CACHE_VERSION 需与 config.js 中的 CONFIG.CACHE_VERSION 保持同步
 *
 * 缓存策略：
 * - 图片：Stale-While-Revalidate（缓存优先，后台更新）
 * - CSS/JS：NetworkFirst（网络优先，缓存兜底）
 * - HTML：NetworkOnly（仅网络获取，离线返回首页）
 * - 其他：CacheFirst（缓存优先，网络兜底）
 */

// ==================== 缓存配置 ====================
// 注意：此版本号需与 config.js 中的 CONFIG.CACHE_VERSION 保持同步
const CACHE_NAME = 'concert-journey-v2';
const urlsToCache = [
    '/',
    '/index.html',
    '/css/main.css',
    '/css/load.css',
    '/js/config.js',
    '/js/utils.js',
    '/js/error.js',
    '/js/music.js',
    '/js/gallery.js',
    '/js/songlist.js',
    '/js/navigation.js',
    '/js/language.js',
    '/js/main.js',
    '/js/statis.js',
    '/db/concerts_base.js',
    '/db/datas_zh.js',
    '/db/datas_en.js',
    '/img/logo.jpg',
    '/music/bgm_cn.mp3',
    '/music/bgm_en.mp3'
];

// 安装事件 - 缓存关键资源
self.addEventListener('install', (event) => {
    event.waitUntil(
        caches.open(CACHE_NAME)
            .then((cache) => cache.addAll(urlsToCache))
            .then(() => self.skipWaiting())
            .catch((error) => {
                console.error('Service Worker: 缓存失败', error);
            })
    );
});

// 激活事件 - 清理旧缓存
self.addEventListener('activate', (event) => {
    event.waitUntil(
        caches.keys().then((cacheNames) => {
            return Promise.all(
                cacheNames.map((cacheName) => {
                    if (cacheName !== CACHE_NAME) {
                        return caches.delete(cacheName);
                    }
                })
            );
        }).then(() => self.clients.claim())
    );
});

// 网络请求策略：分类型缓存策略
self.addEventListener('fetch', (event) => {
    const { request } = event;
    const url = new URL(request.url);

    // 跳过非 GET 请求
    if (request.method !== 'GET') {
        return;
    }

    // 跳过 Chrome 扩展请求
    if (url.protocol === 'chrome-extension:') {
        return;
    }

    // 图片：Stale-While-Revalidate（缓存优先，后台更新）
    if (request.url.match(/\.(jpg|jpeg|png|gif|webp|svg|ico)$/)) {
        event.respondWith(staleWhileRevalidate(request));
        return;
    }

    // CSS/JS：NetworkFirst（网络优先，缓存兜底）
    if (request.url.match(/\.(css|js)$/)) {
        event.respondWith(networkFirst(request));
        return;
    }

    // HTML：NetworkOnly（网络优先，不缓存）
    if (request.headers.get('accept') && request.headers.get('accept').includes('text/html')) {
        event.respondWith(networkOnly(request));
        return;
    }

    // 其他资源：CacheFirst（缓存优先）
    event.respondWith(cacheFirst(request));
});

// Stale-While-Revalidate 策略：返回缓存，同时后台更新缓存
async function staleWhileRevalidate(request) {
    const cache = await caches.open(CACHE_NAME);
    const cachedResponse = await cache.match(request);

    // 立即返回缓存（如果有）
    const fetchPromise = fetch(request).then((networkResponse) => {
        if (networkResponse && networkResponse.status === 200) {
            cache.put(request, networkResponse.clone());
            console.log('Service Worker: 后台更新图片缓存', request.url);
        }
        return networkResponse;
    }).catch((error) => {
        console.error('Service Worker: 图片网络请求失败', error);
    });

    return cachedResponse || fetchPromise;
}

// NetworkFirst 策略：网络优先，失败时使用缓存
async function networkFirst(request) {
    const cache = await caches.open(CACHE_NAME);

    try {
        const networkResponse = await fetch(request);
        if (networkResponse && networkResponse.status === 200) {
            cache.put(request, networkResponse.clone());
            console.log('Service Worker: CSS/JS 网络优先并缓存', request.url);
        }
        return networkResponse;
    } catch (error) {
        console.log('Service Worker: CSS/JS 网络失败，使用缓存', request.url);
        const cachedResponse = await cache.match(request);
        if (cachedResponse) {
            return cachedResponse;
        }
        throw error;
    }
}

// NetworkOnly 策略：仅从网络获取
async function networkOnly(request) {
    try {
        const networkResponse = await fetch(request);
        console.log('Service Worker: HTML 仅网络获取', request.url);
        return networkResponse;
    } catch (error) {
        console.log('Service Worker: HTML 网络失败，返回离线页面', request.url);
        const cache = await caches.open(CACHE_NAME);
        return cache.match('/index.html');
    }
}

// CacheFirst 策略：缓存优先，网络兜底
async function cacheFirst(request) {
    const cache = await caches.open(CACHE_NAME);
    const cachedResponse = await cache.match(request);

    if (cachedResponse) {
        console.log('Service Worker: 从缓存返回', request.url);
        return cachedResponse;
    }

    try {
        const networkResponse = await fetch(request);
        if (networkResponse && networkResponse.status === 200 && networkResponse.type === 'basic') {
            cache.put(request, networkResponse.clone());
            console.log('Service Worker: 缓存新资源', request.url);
        }
        return networkResponse;
    } catch (error) {
        console.error('Service Worker: 网络请求失败', error);
        throw error;
    }
}

// 后台同步（可选 - 用于离线提交数据）
self.addEventListener('sync', (event) => {
    if (event.tag === 'background-sync') {
        event.waitUntil(Promise.resolve());
    }
});

// 推送通知（可选）
self.addEventListener('push', (event) => {
    const options = {
        body: event.data ? event.data.text() : '你有新的演唱会更新！',
        icon: '/img/logo.jpg',
        badge: '/img/logo.jpg',
        vibrate: [100, 50, 100],
        data: {
            dateOfArrival: Date.now(),
            primaryKey: 1
        },
        actions: [
            {
                action: 'explore',
                title: '查看详情',
                icon: '/img/logo.jpg'
            },
            {
                action: 'close',
                title: '关闭'
            }
        ]
    };
    
    event.waitUntil(
        self.registration.showNotification('演唱会足迹', options)
    );
});

// 通知点击事件
self.addEventListener('notificationclick', (event) => {
    event.notification.close();
    
    if (event.action === 'explore') {
        // 打开应用
        event.waitUntil(
            clients.openWindow('/')
        );
    }
});

// Service Worker 脚本已加载