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
        './assets/img/icon_29.png',
        './assets/img/icon_40.png',
        './assets/img/icon_57.png',
        './assets/img/icon_58.png',
        './assets/img/icon_60.png',
        './assets/img/icon_80.png',
        './assets/img/icon_87.png',
        './assets/img/icon_114.png',
        './assets/img/icon_120.png',
        './assets/img/icon_180.png',
        './assets/img/icon_1024.png',
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