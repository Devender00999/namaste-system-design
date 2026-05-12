const CACHE_NAME = "test-cache";

const urlsToCache = ["/", "/index.html", "/styles.css", "/image.gif"];

self.addEventListener("install", (event) => {
   event.waitUntil(caches.open(CACHE_NAME).then((cache) => cache.addAll(urlsToCache)));
});

self.addEventListener("fetch", (event) => {
   // listen to every
   event.respondWith(
      caches
         .match(event.request) // check if we have the r
         .then((response) => {
            return response || fetch(event.request); // i
         }),
   );
});
