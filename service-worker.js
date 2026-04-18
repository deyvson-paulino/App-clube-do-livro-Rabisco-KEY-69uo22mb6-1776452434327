const CACHE_NAME = "clube-do-livro-rabisco-v1";

const BASE = "/App-clube-do-livro-Rabisco-KEY-69uo22mb6-1776452434327/";
const urlsToCache = [
    "index.html",
     "script.js",
     "manifest.json",
    "home.html",
    "login.html",
    "pai-rico-pai-pobre-V-1.6.html",
    "screens/Sem título (7).png",
    "screens/Sem título (8).png",
    "screens/Sem título (9).png",
    "img/71V4lNR2gKL._UF1000,1000_QL80_FMwebp_.webp",
    "img/Robert T. Kiyosaki, Sharon L. Letcher - Pai Rico, Pai Pobre (2011, Elsevier Editora Ltda.) - libgen.li_0059~2.jpg",
    "img/Robert T. Kiyosaki, Sharon L. Letcher - Pai Rico, Pai Pobre (2011, Elsevier Editora Ltda.) - libgen.li_0061~2.jpg",
    "img/Robert T. Kiyosaki, Sharon L. Letcher - Pai Rico, Pai Pobre (2011, Elsevier Editora Ltda.) - libgen.li_0063~2.jpg",
    "img/Robert T. Kiyosaki, Sharon L. Letcher - Pai Rico, Pai Pobre (2011, Elsevier Editora Ltda.) - libgen.li_0064~2.jpg",
    "img/Robert T. Kiyosaki, Sharon L. Letcher - Pai Rico, Pai Pobre (2011, Elsevier Editora Ltda.) - libgen.li_0065~2.jpg",
    "img/Robert T. Kiyosaki, Sharon L. Letcher - Pai Rico, Pai Pobre (2011, Elsevier Editora Ltda.) - libgen.li_0066~2.jpg",
    "img/Robert T. Kiyosaki, Sharon L. Letcher - Pai Rico, Pai Pobre (2011, Elsevier Editora Ltda.) - libgen.li_0067~2.jpg",
    "img/Robert T. Kiyosaki, Sharon L. Letcher - Pai Rico, Pai Pobre (2011, Elsevier Editora Ltda.) - libgen.li_0070~2.jpg",
    "img/Robert T. Kiyosaki, Sharon L. Letcher - Pai Rico, Pai Pobre (2011, Elsevier Editora Ltda.) - libgen.li_0071~2.1.jpg",
    "img/Robert T. Kiyosaki, Sharon L. Letcher - Pai Rico, Pai Pobre (2011, Elsevier Editora Ltda.) - libgen.li_0071~2.jpg",
    "img/Robert T. Kiyosaki, Sharon L. Letcher - Pai Rico, Pai Pobre (2011, Elsevier Editora Ltda.) - libgen.li_0073~2.jpg",
    "img/Robert T. Kiyosaki, Sharon L. Letcher - Pai Rico, Pai Pobre (2011, Elsevier Editora Ltda.) - libgen.li_0077~2.jpg",
    "img/Robert T. Kiyosaki, Sharon L. Letcher - Pai Rico, Pai Pobre (2011, Elsevier Editora Ltda.) - libgen.li_0080~2.jpg",
    "img/Robert T. Kiyosaki, Sharon L. Letcher - Pai Rico, Pai Pobre (2011, Elsevier Editora Ltda.) - libgen.li_0081~2.jpg",
    "img/Robert T. Kiyosaki, Sharon L. Letcher - Pai Rico, Pai Pobre (2011, Elsevier Editora Ltda.) - libgen.li_0082~2.jpg",
    "img/Robert T. Kiyosaki, Sharon L. Letcher - Pai Rico, Pai Pobre (2011, Elsevier Editora Ltda.) - libgen.li_0083~2.jpg",
    "img/Robert T. Kiyosaki, Sharon L. Letcher - Pai Rico, Pai Pobre (2011, Elsevier Editora Ltda.) - libgen.li_0085~2.jpg",
    "img/Robert T. Kiyosaki, Sharon L. Letcher - Pai Rico, Pai Pobre (2011, Elsevier Editora Ltda.) - libgen.li_0090~2.jpg",
    "img/Robert T. Kiyosaki, Sharon L. Letcher - Pai Rico, Pai Pobre (2011, Elsevier Editora Ltda.) - libgen.li_0098~2.jpg",
    "img/Robert T. Kiyosaki, Sharon L. Letcher - Pai Rico, Pai Pobre (2011, Elsevier Editora Ltda.) - libgen.li_0114~2.jpg",
    "img/Robert T. Kiyosaki, Sharon L. Letcher - Pai Rico, Pai Pobre (2011, Elsevier Editora Ltda.) - libgen.li_0115~2.jpg",
    "img/Robert T. Kiyosaki, Sharon L. Letcher - Pai Rico, Pai Pobre (2011, Elsevier Editora Ltda.) - libgen.li_0161~2.jpg",
    "css/style.css",
    "js/array.js",
    "lv_0_20250419223329.mp4",
    "lv_0_20250809130553.mp4"
];

// Instalar o Service Worker e armazenar os arquivos no cache
self.addEventListener("install", event => {
    event.waitUntil(
        caches.open(CACHE_NAME).then(cache => {
            return cache.addAll(urlsToCache);
        })
    );
});

// Interceptar solicitações e servir arquivos do cache
self.addEventListener("fetch", event => {
    event.respondWith(
        caches.match(event.request).then(response => {
            return response || fetch(event.request);
        })
    );
});

// Atualizar o cache quando necessário
self.addEventListener("activate", event => {
    const cacheWhitelist = [CACHE_NAME];
    event.waitUntil(
        caches.keys().then(cacheNames => {
            return Promise.all(
                cacheNames.map(cacheName => {
                    if (!cacheWhitelist.includes(cacheName)) {
                        return caches.delete(cacheName);
                    }
                })
            );
        })
    );
});
