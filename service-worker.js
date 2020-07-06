const CACHE_NAME = 'mpwa-cache-v1';
const urlsToCache = [
  '/nexdoor.html',
  'https://code.jquery.com/mobile/1.4.5/jquery.mobile-1.4.5.min.css',
  'https://code.jquery.com/jquery-1.11.3.min.js',
  'https://code.jquery.com/mobile/1.4.5/jquery.mobile-1.4.5.min.js',
  'https://cdn.jsdelivr.net/npm/particle-api-js@8/dist/particle.min.js',
  '/nd2.png',
  '/NexDoor_192.png',
  '/NexDoor_512.png',
];

// Listen for the install event, which fires when the service worker is installing
self.addEventListener('install', event => {
  // Ensures the install event doesn't complete until after the cache promise resolves
  // This is so we don't move on to other events until the critical initial cache is done
  event.waitUntil(
    // Open a named cache, then add all the specified URLs to it
    caches.open(CACHE_NAME).then(cache => cache.addAll(urlsToCache))
  );
});

self.addEventListener('fetch', function(event) {
  event.respondWith(
    caches.match(event.request).then(function(response) {
      return response || fetch(event.request);
    })
  );
});
