const CACHE_NAME = 'my-portfolio-cache-v1';
const urlsToCache = [
    '/',
    '/js/app.js',
    '/css/app.css',
    '/icons/favicon.png'
];

self.addEventListener('install', (event) => {
    event.waitUntil(
        caches.open(CACHE_NAME)
            .then((cache) => {
                return cache.addAll(urlsToCache);
            })
    );
});

self.addEventListener('fetch', (event) => {
    event.respondWith(
        caches.match(event.request)
            .then((response) => {
                return response || fetch(event.request);
            })
    );
});