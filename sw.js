/*
  DAW2DAW offline helper.
  Saves the app's files on the phone the first time it opens,
  so it keeps working with no internet connection.
  If you change any file, raise the version number below so phones pick up the new copy.
*/
var VERSION = "daw2daw-v4";
var FILES = [
  "./", "index.html", "style.css", "app.js", "data.js",
  "manifest.webmanifest", "icon-192.png", "icon-512.png", "apple-touch-icon.png"
];

self.addEventListener("install", function (event) {
  event.waitUntil(caches.open(VERSION).then(function (c) { return c.addAll(FILES); }));
  self.skipWaiting();
});

self.addEventListener("activate", function (event) {
  event.waitUntil(caches.keys().then(function (keys) {
    return Promise.all(keys.filter(function (k) { return k !== VERSION; })
      .map(function (k) { return caches.delete(k); }));
  }));
  self.clients.claim();
});

// Try the network first so updates show up; fall back to the saved copy when offline.
self.addEventListener("fetch", function (event) {
  if (event.request.method !== "GET") return;
  event.respondWith(
    fetch(event.request).then(function (response) {
      var copy = response.clone();
      caches.open(VERSION).then(function (c) { c.put(event.request, copy); });
      return response;
    }).catch(function () {
      return caches.match(event.request, { ignoreSearch: true });
    })
  );
});
