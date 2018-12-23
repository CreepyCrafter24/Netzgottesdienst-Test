self.addEventListener('oninstall', event => { Install(); });
self.addEventListener('install', event => { Install(); });
self.addEventListener('fetch', event => { Fetch(); });
function Install() {
    console.log('install');
}

function Fetch() {
    console.log('fetch');
}
