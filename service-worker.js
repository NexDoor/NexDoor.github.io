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


window.addEventListener('beforeinstallprompt', (e) => {
  // Prevent Chrome 67 and earlier from automatically showing the prompt
  e.preventDefault();
  // Stash the event so it can be triggered later.
  deferredPrompt = e;
  // Update UI to notify the user they can add to home screen
  $("#dlg-installApp" ).popup( "open" );

  addBtn.addEventListener('click', (e) => {
    // hide our user interface that shows our A2HS button
    // close button or dialog here
    // Show the prompt
    deferredPrompt.prompt();
    // Wait for the user to respond to the prompt
    deferredPrompt.userChoice.then((choiceResult) => {
        if (choiceResult.outcome === 'accepted') {
          console.log('User accepted the A2HS prompt');
        } else {
          console.log('User dismissed the A2HS prompt');
        }
        deferredPrompt = null;
      });
  });
});