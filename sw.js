const CACHE_NAME = 'sisiswa-cache-v1';
const assets = [
  'index.html',
  'dashboard.html',
  'absensi.html',
  'data_siswa.html',
  'data_guru.html',
  'data_jadwal.html',
  'data_kelas.html',
  'data_mapel.html',
  'data_jurusan.html',
  'laporan_rekap.html',
  'pengaturan.html'
];

// Install Service Worker
self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME).then(cache => {
      return cache.addAll(assets);
    })
  );
});

// Fetching Assets
self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request).then(response => {
      return response || fetch(event.request);
    })
  );
});