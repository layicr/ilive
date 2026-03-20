/**
 * Service Worker - 基础缓存策略
 * 缓存关键资源，提升加载速度和离线体验
 */

const CACHE_NAME = 'concert-journey-v1';
const urlsToCache = [
    '/',
    '/index.html',
    '/css/main.css',
    '/css/load.css',
    '/js/main.js',
    '/db/concerts_base.js',
    '/db/datas_zh.js',
    '/db/datas_en.js',
    '/img/logo.jpg',
    '/music/bgm_cn.mp3',
    '/music/bgm_en.mp3'
];

// 安装事件 - 缓存关键资源
self.addEventListener('install', (event) => {
    console.log('Service Worker: 安装中...');
    
    event.waitUntil(
        caches.open(CACHE_NAME)
            .then((cache) => {
                console.log('Service Worker: 缓存关键资源');
                return cache.addAll(urlsToCache);
            })
            .then(() => {
                console.log('Service Worker: 安装完成');
                return self.skipWaiting(); // 立即激活新的 SW
            })
            .catch((error) => {
                console.error('Service Worker: 缓存失败', error);
            })
    );
});

// 激活事件 - 清理旧缓存
self.addEventListener('activate', (event) => {
    console.log('Service Worker: 激活中...');
    
    event.waitUntil(
        caches.keys().then((cacheNames) => {
            return Promise.all(
                cacheNames.map((cacheName) => {
                    if (cacheName !== CACHE_NAME) {
                        console.log('Service Worker: 删除旧缓存', cacheName);
                        return caches.delete(cacheName);
                    }
                })
            );
        }).then(() => {
            console.log('Service Worker: 激活完成');
            return self.clients.claim(); // 立即控制所有页面
        })
    );
});

// 网络请求策略：缓存优先，网络兜底
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
    
    event.respondWith(
        caches.match(request)
            .then((cachedResponse) => {
                // 如果缓存中有，直接返回
                if (cachedResponse) {
                    console.log('Service Worker: 从缓存返回', request.url);
                    return cachedResponse;
                }
                
                // 否则从网络获取
                return fetch(request)
                    .then((response) => {
                        // 检查是否有效响应
                        if (!response || response.status !== 200 || response.type !== 'basic') {
                            return response;
                        }
                        
                        // 克隆响应（响应只能使用一次）
                        const responseToCache = response.clone();
                        
                        // 缓存图片和静态资源
                        if (request.url.match(/\.(jpg|jpeg|png|gif|css|js|mp3)$/)) {
                            caches.open(CACHE_NAME)
                                .then((cache) => {
                                    cache.put(request, responseToCache);
                                    console.log('Service Worker: 缓存新资源', request.url);
                                });
                        }
                        
                        return response;
                    })
                    .catch((error) => {
                        console.error('Service Worker: 网络请求失败', error);
                        
                        // 对于 HTML 页面，返回离线页面
                        if (request.headers.get('accept').includes('text/html')) {
                            return caches.match('/index.html');
                        }
                        
                        // 对于其他资源，返回错误
                        throw error;
                    });
            })
    );
});

// 后台同步（可选 - 用于离线提交数据）
self.addEventListener('sync', (event) => {
    console.log('Service Worker: 后台同步', event.tag);
    
    if (event.tag === 'background-sync') {
        event.waitUntil(
            // 在这里执行需要同步的任务
            console.log('执行后台同步任务')
        );
    }
});

// 推送通知（可选）
self.addEventListener('push', (event) => {
    console.log('Service Worker: 收到推送通知');
    
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
    console.log('Service Worker: 通知被点击');
    
    event.notification.close();
    
    if (event.action === 'explore') {
        // 打开应用
        event.waitUntil(
            clients.openWindow('/')
        );
    }
});

console.log('Service Worker: 脚本加载完成');