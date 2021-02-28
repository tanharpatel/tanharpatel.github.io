'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "assets/AssetManifest.json": "46e75e54eb10f142ad571b75df22a224",
"assets/assets/fonts/Alegreya-Regular.ttf": "4d10df69f7114f99f52e8d946101538f",
"assets/assets/fonts/Allura-Regular.ttf": "f58c84c23bb648917a9450346838267c",
"assets/assets/fonts/AquateScript.ttf": "bb411c549c026817d94dc4a8213b2432",
"assets/assets/fonts/Cormorant-Regular.ttf": "afca15d10e8691aeb82458613810e035",
"assets/assets/fonts/Lora-Regular.ttf": "c684a3de5c014a61d5139d5b97da99fc",
"assets/assets/fonts/Lustria-Regular.ttf": "c840822dabbd1e84b2ffeaac56cda9cb",
"assets/assets/fonts/PlayfairDisplay-Regular.ttf": "b3721ba3bde34e5b38b0e1523cccfd7f",
"assets/assets/fonts/ProductSans-Regular.ttf": "eae9c18cee82a8a1a52e654911f8fe83",
"assets/assets/fonts/PTSerif-Regular.ttf": "5f7303c0e7f09925586e218ab8fd9b19",
"assets/assets/images/blog.png": "15315fde9a9c14bc65ad07fc9524ae89",
"assets/assets/images/devfolio.gif": "7e0f533382ba5fc9668aa5bc9a7eab55",
"assets/assets/images/devfolio.png": "b1c736a5afbe72e80e0c39b421bf3942",
"assets/assets/images/fluix.jpg": "d7c364dc3e1f8afd3fce93986a742e36",
"assets/assets/images/fluix.mp4": "586ffbf965a1ff1398fc1ee58eb53cc3",
"assets/assets/images/fluix1.jpg": "d4b370da2f6fa80b996e8b64df7e90de",
"assets/assets/images/fluix2.jpg": "9a5b88cc3f2c2c75a9b99d13a53b5065",
"assets/assets/images/fluix3.jpg": "611db337c7533e9b9305f9de2028c1a4",
"assets/assets/images/fluix4.jpg": "06ceffbec84380a2884e8bb53a38a9ad",
"assets/assets/images/fluix5.jpg": "e5a714c3871e7a48c9fc2405f449b1ee",
"assets/assets/images/fluix6.JPG": "f5e47f885c461886513e0db8db9402e7",
"assets/assets/images/github.gif": "6263a330ef0faf176570e06823f41411",
"assets/assets/images/github.png": "6613c6f4e8fab51e6b008156d1be8ce1",
"assets/assets/images/image.png": "d8c40a431f32e540d86131a8f067d3be",
"assets/assets/images/instagram.gif": "03dbe4bea7a215ae0e20ddbad0efddef",
"assets/assets/images/instagram.png": "23162ed32ae5ef8ec8b30cc5899a2ee0",
"assets/assets/images/jjis.jpg": "1e2063af430894fc9b694b6e36a8fd50",
"assets/assets/images/jjis.mp4": "5f8a9a8bef805ee97fc54b3284645d08",
"assets/assets/images/jjis1.jpg": "90e2b55a4d8f12c17df42d97a6a3ace6",
"assets/assets/images/jjis2.jpg": "060e4ed59c1e9fa32bdd2a81ddf0bf8c",
"assets/assets/images/jjis3.jpg": "148d245d71cf985ec9adcfe5a3e57586",
"assets/assets/images/jjis4.jpg": "8e6cb14cbb4c87d78d0bbecfccbdd2c5",
"assets/assets/images/jjis5.jpg": "353892a5962be8a23c7364503ffa8b74",
"assets/assets/images/jjisold.jpg": "b33f8d47ee1f7a37a177f57ccc428a5b",
"assets/assets/images/jjisold.mp4": "78f7bc45ee4b007238c19172025ebbaf",
"assets/assets/images/jjisold1.jpg": "590f51873b8e5021c23c774a4e282148",
"assets/assets/images/jjisold2.jpg": "a7540245ca009160465ea5dfe4922b0f",
"assets/assets/images/jjisold3.jpg": "ba02b33906e69fef20a502cdf899c86e",
"assets/assets/images/jjisold4.jpg": "0b407436ec8fda82c49b1f03a818ff87",
"assets/assets/images/jjisold5.jpg": "87a0e011d1f84b388122c97aec6411b5",
"assets/assets/images/linkedin.gif": "8c51e13ea20d3d581a91ddadd351c085",
"assets/assets/images/linkedin.png": "d67bd09cd33bd8636ab807f6091624e9",
"assets/assets/images/logo.png": "00fa756048c56830b9f994a2221851f2",
"assets/assets/images/magic.jpg": "9a2f96576c11e90ee5e65e5ca91b22b2",
"assets/assets/images/magic.mp4": "4afc0669a9b5fb26d12227e6f79958ed",
"assets/assets/images/magic1.jpg": "685ac681145c506dbc0f75d5cb9dc764",
"assets/assets/images/magic2.jpg": "8c0c0810d3eead43aa19da00dc4ef429",
"assets/assets/images/magic3.jpg": "8a5635da7ed13d9f2d377bf25478d414",
"assets/assets/images/medium.gif": "d131ac1bb5a4f7c9a846221c3c4d12b0",
"assets/assets/images/medium.png": "b8a21d6cde2724b75136606d0fb55719",
"assets/assets/images/mindfulness.jpg": "1d725959b2863706c3e607a3763b7cbe",
"assets/assets/images/mindfulness.mp4": "a665fc73a43ba7feac55555015528f0e",
"assets/assets/images/mindfulness1.jpg": "f316e93e4f6633837af168092f507928",
"assets/assets/images/mindfulness2.jpg": "2b79dd5f9269c93d82c102ff6cb1f9b1",
"assets/assets/images/mindfulness3.jpg": "24eba8f5510bf6410e7aa5a31b312cba",
"assets/assets/images/mindfulness4.jpg": "65387d8a6e476cde81e41853e98d2fc9",
"assets/assets/images/mindfulness5.jpg": "5a32e09a638a7beee9fed53d2d44d7a8",
"assets/assets/images/mindfulness6.jpg": "5ac1ccd1922c3e00867d0eb15d79c5bc",
"assets/assets/images/portfolio.jpg": "f40be3f087e2770dded528625be2d181",
"assets/assets/images/portfolio.mp4": "18ff7e15ffe369906a4e13b4cc67c695",
"assets/assets/images/portfolio1.jpg": "4500b44c294a9991692dd3ee1a590cf3",
"assets/assets/images/portfolio2.jpg": "6c22b3a4e88315dd29e47f5e854bbdd1",
"assets/assets/images/portfolio3.jpg": "b327e3d4110443e104f3067f60065d99",
"assets/assets/images/portfolio4.jpg": "3cac124cc5ee8d80574fa57939a29055",
"assets/assets/images/portfolio5.jpg": "22064ce41d5541eb8f9df14e772fc854",
"assets/assets/images/portfolio6.jpg": "5b50f33eb9d0b11d88575a8de99a2226",
"assets/assets/images/shadow.png": "d685fce75f3f5ab3533719d595f5991d",
"assets/assets/images/society.jpg": "5c2a4a99b8657a5d15f14e82380d0c5e",
"assets/assets/images/society.mp4": "26c3f2542e34b7c5e6fdbd6d3bc5152f",
"assets/assets/images/society1.jpg": "248bbc054304af91d03b320a6f6143cf",
"assets/assets/images/society2.jpg": "8c80dbbbd4405493eb851cf5e21abe6f",
"assets/assets/images/society3.jpg": "b04576dd76ace7e4d99652f42f91e561",
"assets/assets/images/society4.jpg": "430794d87fe350a8d1eb50ce8939988e",
"assets/assets/images/society5.jpg": "6b7b364fd619c45573acf62b41f182f9",
"assets/assets/images/society6.jpg": "cca74f89dab631566c30d7df615aa208",
"assets/assets/images/society7.jpg": "56b74b0c6d0f919319e696469a2b0b8d",
"assets/assets/images/Tanha.jpg": "3730153e319da81070a5f24c1ffcdc02",
"assets/assets/images/Tanha.png": "2a8bf3c70d26ea5d6d26707001b5b21d",
"assets/assets/images/task.jpg": "7cbf339aab3471664935cc73c0fe29cf",
"assets/assets/images/task.mp4": "18adbc07fb5dfde12fa4e7b05e855bdd",
"assets/assets/images/task1.jpg": "e958a43c3674fdd3c89f2d837edfd2d2",
"assets/assets/images/task2.jpg": "3b4fd305155ee051df2b4a2038db4f7b",
"assets/assets/images/task3.jpg": "e8668a6a7eca9240c8b4f8709af18fff",
"assets/assets/images/task4.jpg": "5dac151c5e6b18f57574bf69daecf00b",
"assets/assets/images/task5.jpg": "e6de01c77090718e5319dc62be09c59a",
"assets/assets/images/twitter.gif": "77d4434da3188675f25ad1e6152d535d",
"assets/assets/images/twitter.png": "e89f1151a35aca93a2c2cdc458a1ba26",
"assets/FontManifest.json": "11dff14216948ace5c1ba6d7bc2d539c",
"assets/fonts/MaterialIcons-Regular.otf": "1288c9e28052e028aba623321f7826ac",
"assets/NOTICES": "02bc174e6233e32f6c5983965f22a017",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "115e937bb829a890521f72d2e664b632",
"favicon.ico": "65d8ff2fd2d488c2a51e3931a3cea54a",
"icons/android-chrome-192x192.png": "9e239fe14f7c0d30b392bbf2a178b594",
"icons/android-chrome-512x512.png": "8d0d7e9dc1bd539481fcd15aecfe7eab",
"icons/apple-touch-icon.png": "228a73581fb4b5da15e3c15de41dad47",
"icons/favicon-16x16.png": "9e46618cffa3147a00298cc48b5014fc",
"icons/favicon-32x32.png": "365b6705a3af2e5c73faa90a3ed71dbd",
"icons/mstile-150x150.png": "aa7af6252adf460e21ba645d13c4c36d",
"index.html": "4b9ffe4100f952453bf78b77d86dab1f",
"/": "4b9ffe4100f952453bf78b77d86dab1f",
"main.dart.js": "fee76771b2e9af577c7c701d78b7fb77",
"manifest.json": "dd6ef2a5451a2f78b5dc39f8650ddc32",
"version.json": "e856fd580f571976b9bc42fc3dc1bc1a"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "/",
"main.dart.js",
"index.html",
"assets/NOTICES",
"assets/AssetManifest.json",
"assets/FontManifest.json"];
// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});

// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});

// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache.
        return response || fetch(event.request).then((response) => {
          cache.put(event.request, response.clone());
          return response;
        });
      })
    })
  );
});

self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});

// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}

// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
