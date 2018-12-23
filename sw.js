const staticAssets = ['./', './sw.js'];
self.addEventListener('oninstall', function (event) { Install(); });
self.addEventListener('install', function(event) { Install(); });
self.addEventListener('fetch', function (event) { Fetch(event); });
async function Install() {
    console.log('installing...');
    const cache = await caches.open('Netzgottesdienst-static');
    cache.addAll(staticAssets);
}

async function Fetch(event) {
    console.log('fetching...');
    const req = event.request;
    event.respondWith(cacheFirst(req));
}

async function cacheFirst(req) {
    const cachedResponse = await caches.match(req);
    return cachedResponse || fetch(req);
}
