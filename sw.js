// Service Worker: hält die App-Hülle offline verfügbar. Daten gehen immer live an Supabase.
const CACHE = 'besucher-v5';
const SHELL = ['./', './index.html', './formular-standard.js', './abc-stil.css', './img/abc-logo.svg', './fonts/archivo-400.woff2', './fonts/archivo-600.woff2', './fonts/archivo-800.woff2', './manifest.webmanifest', './icon.svg', './icon-192.png', './icon-512.png'];
self.addEventListener('install', e => { e.waitUntil(caches.open(CACHE).then(c => c.addAll(SHELL))); self.skipWaiting(); });
self.addEventListener('activate', e => { e.waitUntil(caches.keys().then(k => Promise.all(k.filter(x => x !== CACHE).map(x => caches.delete(x))))); self.clients.claim(); });
self.addEventListener('fetch', e => {
  const u = new URL(e.request.url);
  if (e.request.method !== 'GET' || u.origin !== location.origin) return;
  // Netz zuerst (damit Updates sofort ankommen), sonst Cache
  e.respondWith(fetch(e.request).then(r => { const c = r.clone(); caches.open(CACHE).then(x => x.put(e.request, c)); return r; })
    .catch(() => caches.match(e.request).then(r => r || caches.match('./index.html'))));
});
