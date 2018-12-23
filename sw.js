const staticAssets = ['./'];
self.addEventListener('oninstall', function (event) { Install(); });
self.addEventListener('install', function(event) { Install(); });
self.addEventListener('fetch', function (event) { Fetch(); });
async function Install() {
    console.log('installing...');
    const cache = await caches.open('Netzgottesdienst-static');
    cache.addAll(staticAssets);
}

function Fetch() {
    console.log('fetching...');
}
