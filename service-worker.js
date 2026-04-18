const CACHE_NAME = "clube-do-livro-rabisco-v1";

const BASE = "/App-clube-do-livro-Rabisco-KEY-69uo22mb6-1776452434327/";
const urlsToCache = [
    BASE,
    BASE + "index.html",
    BASE + "home.html",
    BASE + "login.html",
    BASE + "manifest.json",
    BASE + "script.js",
    BASE + "css/style.css",
    BASE + "js/array.js",
    BASE + "pai-rico-pai-pobre-V-1.6.html",
    
    // imagens
    BASE + "screens/Sem título (7).png",
    BASE + "screens/Sem título (8).png",
    BASE + "screens/Sem título (9).png",
    BASE + "img/71V4lNR2gKL._UF1000,1000_QL80_FMwebp_.webp",
    BASE + "img/Robert T. Kiyosaki, Sharon L. Letcher - Pai Rico, Pai Pobre (2011, Elsevier Editora Ltda.) - libgen.li_0059~2.jpg",
    BASE + "img/Robert T. Kiyosaki, Sharon L. Letcher - Pai Rico, Pai Pobre (2011, Elsevier Editora Ltda.) - libgen.li_0061~2.jpg",
    BASE + "img/Robert T. Kiyosaki, Sharon L. Letcher - Pai Rico, Pai Pobre (2011, Elsevier Editora Ltda.) - libgen.li_0063~2.jpg",
    BASE + "img/Robert T. Kiyosaki, Sharon L. Letcher - Pai Rico, Pai Pobre (2011, Elsevier Editora Ltda.) - libgen.li_0064~2.jpg",
    BASE + "img/Robert T. Kiyosaki, Sharon L. Letcher - Pai Rico, Pai Pobre (2011, Elsevier Editora Ltda.) - libgen.li_0065~2.jpg",
    BASE + "img/Robert T. Kiyosaki, Sharon L. Letcher - Pai Rico, Pai Pobre (2011, Elsevier Editora Ltda.) - libgen.li_0066~2.jpg",
    BASE + "img/Robert T. Kiyosaki, Sharon L. Letcher - Pai Rico, Pai Pobre (2011, Elsevier Editora Ltda.) - libgen.li_0067~2.jpg",
    BASE + "img/Robert T. Kiyosaki, Sharon L. Letcher - Pai Rico, Pai Pobre (2011, Elsevier Editora Ltda.) - libgen.li_0070~2.jpg",
    BASE + "img/Robert T. Kiyosaki, Sharon L. Letcher - Pai Rico, Pai Pobre (2011, Elsevier Editora Ltda.) - libgen.li_0071~2.1.jpg",
    BASE + "img/Robert T. Kiyosaki, Sharon L. Letcher - Pai Rico, Pai Pobre (2011, Elsevier Editora Ltda.) - libgen.li_0071~2.jpg",
    BASE + "img/Robert T. Kiyosaki, Sharon L. Letcher - Pai Rico, Pai Pobre (2011, Elsevier Editora Ltda.) - libgen.li_0073~2.jpg",
    BASE + "img/Robert T. Kiyosaki, Sharon L. Letcher - Pai Rico, Pai Pobre (2011, Elsevier Editora Ltda.) - libgen.li_0077~2.jpg",
    BASE + "img/Robert T. Kiyosaki, Sharon L. Letcher - Pai Rico, Pai Pobre (2011, Elsevier Editora Ltda.) - libgen.li_0080~2.jpg",
    BASE + "img/Robert T. Kiyosaki, Sharon L. Letcher - Pai Rico, Pai Pobre (2011, Elsevier Editora Ltda.) - libgen.li_0081~2.jpg",
    BASE + "img/Robert T. Kiyosaki, Sharon L. Letcher - Pai Rico, Pai Pobre (2011, Elsevier Editora Ltda.) - libgen.li_0082~2.jpg",
    BASE + "img/Robert T. Kiyosaki, Sharon L. Letcher - Pai Rico, Pai Pobre (2011, Elsevier Editora Ltda.) - libgen.li_0083~2.jpg",
    BASE + "img/Robert T. Kiyosaki, Sharon L. Letcher - Pai Rico, Pai Pobre (2011, Elsevier Editora Ltda.) - libgen.li_0085~2.jpg",
    BASE + "img/Robert T. Kiyosaki, Sharon L. Letcher - Pai Rico, Pai Pobre (2011, Elsevier Editora Ltda.) - libgen.li_0090~2.jpg",
    BASE + "img/Robert T. Kiyosaki, Sharon L. Letcher - Pai Rico, Pai Pobre (2011, Elsevier Editora Ltda.) - libgen.li_0098~2.jpg",
    BASE + "img/Robert T. Kiyosaki, Sharon L. Letcher - Pai Rico, Pai Pobre (2011, Elsevier Editora Ltda.) - libgen.li_0114~2.jpg",
    BASE + "img/Robert T. Kiyosaki, Sharon L. Letcher - Pai Rico, Pai Pobre (2011, Elsevier Editora Ltda.) - libgen.li_0115~2.jpg",
    BASE + "img/Robert T. Kiyosaki, Sharon L. Letcher - Pai Rico, Pai Pobre (2011, Elsevier Editora Ltda.) - libgen.li_0161~2.jpg",
    
    // videos
    BASE + "lv_0_20250419223329.mp4",
    BASE + "lv_0_20250809130553.mp4",

    // ícones
    BASE + "icon-192.png",
    BASE + "icon-512.png"
];

// INSTALL
self.addEventListener("install", event => {
    self.skipWaiting();

    event.waitUntil(
        caches.open(CACHE_NAME).then(cache => {
            return Promise.all(
                urlsToCache.map(url =>
                    cache.add(url).catch(err => {
                        console.warn("Erro ao cachear:", url);
                    })
                )
            );
        })
    );
});

// ACTIVATE
self.addEventListener("activate", event => {
    self.clients.claim();

    event.waitUntil(
        caches.keys().then(cacheNames =>
            Promise.all(
                cacheNames.map(cacheName => {
                    if (cacheName !== CACHE_NAME) {
                        return caches.delete(cacheName);
                    }
                })
            )
        )
    );
});

// FETCH (cache first + fallback)
self.addEventListener("fetch", event => {
    event.respondWith(
        caches.match(event.request).then(response => {
            return (
                response ||
                fetch(event.request).catch(() => {
                    return caches.match(BASE + "index.html");
                })
            );
        })
    );
});
