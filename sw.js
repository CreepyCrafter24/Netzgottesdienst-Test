const staticAssets = ['./'];
self.addEventListener('oninstall', function (event) { Install(); });
self.addEventListener('install', function(event) { Install(); });
self.addEventListener('fetch', function (event) { Fetch(); });
async function Install() {
    console.log('installing...');
    const cache = await caches.open('Netzgottesdienst-static');
    cache.addAll(staticAssets);
}

async function Fetch() {
    console.log('fetching...');
    const req = event.request;
    event.respondWith(cacheFirst(req));
}

async function cacheFirst(req) {
    const cachedResponse = await caches.match(req);
    return cachedResponse || fetch(req);
}
