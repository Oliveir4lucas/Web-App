var cacheName = 'WorkOut+-v1.0';

self.addEventListener('install', event => {

  self.skipWaiting();

  event.waitUntil(
    caches.open(cacheName)
      .then(cache => cache.addAll([

        './index.html',

        './assets/css/inicio.css',

        './assets/js/effects.js',

       
        // Novos ícones
        './assets/img/icon-72x72.png',
        './assets/img/icon-96x96.png',
        './assets/img/icon-128x128.png',
        './assets/img/icon-144x144.png',
        './assets/img/icon-152x152.png',
        './assets/img/icon-192x192.png',
        './assets/img/icon-384x384.png',
        './assets/img/icon-512x512.png',
      ]))
  );
});

self.addEventListener('message', function (event) {
  if (event.data.action === 'skipWaiting') {
    self.skipWaiting();
  }
});

self.addEventListener('fetch', function (event) {
  //Atualizacao internet
  event.respondWith(async function () {
    try {
      return await fetch(event.request);
    } catch (err) {
      return caches.match(event.request);
    }
  }());

  //Atualizacao cache
  /*event.respondWith(
    caches.match(event.request)
      .then(function (response) {
        if (response) {
          return response;
        }
        return fetch(event.request);
      })
  );*/

});