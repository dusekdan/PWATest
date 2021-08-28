let cacheName = "hello-pwa";
let filesToCache = [
    "/",
    "/index.htm",
    "/css/style.css",
    "/js/main.js"
];

self.addEventListener("install", event => {
    event.waitUntil(
        caches.open(cacheName).then(cache => {
            return cache.addAll(filesToCache);
        }).catch(err => {console.log(err)})
    );
});

self.addEventListener("fetch", event => {
    event.respondWith(
        caches.match(event.request).then(response => {
            return response || fetch(event.request);
        }).catch(err => {console.log(err)})
    );
})