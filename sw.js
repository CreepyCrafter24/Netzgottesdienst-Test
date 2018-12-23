self.addEventListener('oninstall', event => {
    console.log('install');
})

self.addEventListener('fetch', event => {
    console.log('fetch');
})
