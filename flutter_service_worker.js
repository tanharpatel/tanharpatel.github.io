'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "assets/AssetManifest.json": "051dfacda4ff9247a657b7ed4fe4b81f",
"assets/assets/fonts/ProductSans-Regular.ttf": "eae9c18cee82a8a1a52e654911f8fe83",
"assets/assets/images/blog.png": "c5e200083c8fe7374aacb159b0b4e234",
"assets/assets/images/devfolio.gif": "a39e79ebe149c9eaa9926b9fc2e6f5ba",
"assets/assets/images/devfolio.png": "60bcb45d52b2825202465432131ebe5d",
"assets/assets/images/fluix.jpg": "7e0b8df1363d7d8ae92be925b34cfd0e",
"assets/assets/images/fluix.mp4": "9dd6db9b28a1fca56f0578209940a92a",
"assets/assets/images/fluix1.jpg": "4fc6ce3c2eec1e370d0653668313067f",
"assets/assets/images/fluix2.jpg": "0a2024e31bdb309361c5d9015f8aaf9c",
"assets/assets/images/fluix3.jpg": "3146fc864853785117d3891a639f82ff",
"assets/assets/images/fluix4.jpg": "ac7ba820ceab2a399b1f49b7b616bbd2",
"assets/assets/images/fluix5.jpg": "c593598f3bd47dc25833449d7b0ebd9d",
"assets/assets/images/fluix6.JPG": "544501f9a807efc443a2f2fca34bae8b",
"assets/assets/images/github.gif": "4cf311c032a0691ca78720651ae6ba58",
"assets/assets/images/github.png": "6deb76bfc26c5f5ae5fe4e997e55364f",
"assets/assets/images/image.png": "f36bc9d7d5c8b428cb43fd066e3b28d7",
"assets/assets/images/instagram.gif": "b8927aedd0916fdcbf65f12e89a5cafe",
"assets/assets/images/instagram.png": "186bb4c74f4b2c2002982503d1fdb065",
"assets/assets/images/jjis.jpg": "5cd36db54b7db2977f7076579b4d622a",
"assets/assets/images/jjis.mp4": "a704fa581d124d0a8cb7ebc78716b2ee",
"assets/assets/images/jjis1.jpg": "9a23286c1858248cf52689a3de5f6692",
"assets/assets/images/jjis2.jpg": "d5136ccc8c59353218098d4245c283ef",
"assets/assets/images/jjis3.jpg": "89db16cb01f459121a071171198765fc",
"assets/assets/images/jjis4.jpg": "188a4048bfbae433ecf9050a712c0f61",
"assets/assets/images/jjis5.jpg": "f9af0d45cd96490ddc4f8d6c5a75fe48",
"assets/assets/images/jjisold.jpg": "cae3ed6eebcd00f025f2301a2c1a7f85",
"assets/assets/images/jjisold.mp4": "1488e980a270f594f16888a7045eb094",
"assets/assets/images/jjisold1.jpg": "c6737da109c9523217c391e9b3fc9f62",
"assets/assets/images/jjisold2.jpg": "c1617027cdb588f021cdc4cc4a154c43",
"assets/assets/images/jjisold3.jpg": "45de9be8b97227ae0552223311180868",
"assets/assets/images/jjisold4.jpg": "999cf69cc8907d3e7d31a96da90d261d",
"assets/assets/images/jjisold5.jpg": "b305401b762b6e1d5a11325fe8974003",
"assets/assets/images/linkedin.gif": "289dc13d5d94b298e7da597d5badcd27",
"assets/assets/images/linkedin.png": "8798c5ae95386cde5147936f180543d4",
"assets/assets/images/logo.png": "c67644c349f0757136eac824674a208e",
"assets/assets/images/magic.jpg": "8b25382150b61bfaf92594743d216192",
"assets/assets/images/magic.mp4": "a6edfc1c9d72b74f6b6830147de8417d",
"assets/assets/images/magic1.jpg": "0e707ea5df7ad0bc2c1c130ac75d462f",
"assets/assets/images/magic2.jpg": "492a7ebc82e18c49cfdbd27e09952e39",
"assets/assets/images/magic3.jpg": "6f23ae6c628573cd22e4f6d8e4c229e8",
"assets/assets/images/medium.gif": "d724c1c66bb0b2a11e9dd64e7bdec473",
"assets/assets/images/medium.png": "f72d6dfe336df0e9f9964f64b354cf0f",
"assets/assets/images/mindfulness.jpg": "1b1a736b91a5661e6a80cbbe1329e1a0",
"assets/assets/images/mindfulness.mp4": "e2648b4bb3f15f0fe637a5c4c80e9d40",
"assets/assets/images/mindfulness1.jpg": "60e23c8ec75dd92fd2505fd4dc268e46",
"assets/assets/images/mindfulness2.jpg": "ed4eee667123a9b77df8de3a1048f492",
"assets/assets/images/mindfulness3.jpg": "7573136b8e4d6422f46998c927446eba",
"assets/assets/images/mindfulness4.jpg": "a5eef85a8ac119d5a547e1598c70cf26",
"assets/assets/images/mindfulness5.jpg": "fbd1a664b6e41fc0e499d3178ccf164e",
"assets/assets/images/mindfulness6.jpg": "f301b976a83787b0f6add5e3c666bd8d",
"assets/assets/images/portfolio.jpg": "378cd903f563731a62fab6da7efd26bd",
"assets/assets/images/portfolio.mp4": "6c8f27f6492b63a5cdb8bd665f173792",
"assets/assets/images/portfolio1.jpg": "9458ae8b16688e83cfe1304e246b2ef9",
"assets/assets/images/portfolio2.jpg": "55155e8c19914afec12fd1a2ad112fe7",
"assets/assets/images/portfolio3.jpg": "c464efa331cf72e5c4ae430fe3f63b66",
"assets/assets/images/portfolio4.jpg": "d0179ec9a9f2a5591e7f7ea65165a74b",
"assets/assets/images/portfolio5.jpg": "0cf54ba1c1c12a2e04fd1d321c9d6386",
"assets/assets/images/portfolio6.jpg": "a4e0d2352505985a0f2413c9a69c27eb",
"assets/assets/images/shadow.png": "4587f3482059f0d7f1e124a9c494cd12",
"assets/assets/images/society.jpg": "a1f51ef207b3648c2e90ec7f867a8e6b",
"assets/assets/images/society.mp4": "0a08cead7b57aced5b5ad6de81c8ae58",
"assets/assets/images/society1.jpg": "a3e6c1837c7d6900096454f1a8af97fb",
"assets/assets/images/society2.jpg": "4eaa5c86625059db597dca1a8dc464cc",
"assets/assets/images/society3.jpg": "bf43dbed397aeba53339d9a0982356aa",
"assets/assets/images/society4.jpg": "7e8eeb95baeaf68862781de8b57da056",
"assets/assets/images/society5.jpg": "bb850414aa269f58e41704ca997216ef",
"assets/assets/images/society6.jpg": "6effa1bbf2c62bd2a8a7c24cd6169e36",
"assets/assets/images/society7.jpg": "b3b9123ec392a97f055cda7db8d29cc9",
"assets/assets/images/Tanha.jpg": "996cf8f0a7d6685e2e637d2329bd5410",
"assets/assets/images/Tanha.png": "bf4ff1fa91abb5a0600ce8b09c6cf668",
"assets/assets/images/task.jpg": "639768dfe292475e58e75c1a88cf1449",
"assets/assets/images/task.mp4": "717dc84b193cddfa84d0d034f12ad390",
"assets/assets/images/task1.jpg": "b3653344f66a2d4fec3bd12ab7109630",
"assets/assets/images/task2.jpg": "063bc454949c91906dc401faf9fa1a4c",
"assets/assets/images/task3.jpg": "9b48b17ea934bfcb4b1ea930b7243abf",
"assets/assets/images/task4.jpg": "5f606818817eeb2dd4418c8f7cf404a4",
"assets/assets/images/task5.jpg": "e6de01c77090718e5319dc62be09c59a",
"assets/assets/images/twitter.gif": "b218b0cc60767153d11c3acbe663fb01",
"assets/assets/images/twitter.png": "1bb86dad66260bb06730fae39de3a57d",
"assets/FontManifest.json": "bc75ffa79873fc101d6088f98ecf89a2",
"assets/fonts/MaterialIcons-Regular.otf": "1288c9e28052e028aba623321f7826ac",
"assets/NOTICES": "b3b0befb86e1fb08294d4d5c0336bd58",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "115e937bb829a890521f72d2e664b632",
"favicon.ico": "65d8ff2fd2d488c2a51e3931a3cea54a",
"icons/android-chrome-192x192.png": "9e239fe14f7c0d30b392bbf2a178b594",
"icons/android-chrome-512x512.png": "8d0d7e9dc1bd539481fcd15aecfe7eab",
"icons/apple-touch-icon.png": "228a73581fb4b5da15e3c15de41dad47",
"icons/favicon-16x16.png": "9e46618cffa3147a00298cc48b5014fc",
"icons/favicon-32x32.png": "365b6705a3af2e5c73faa90a3ed71dbd",
"icons/mstile-150x150.png": "aa7af6252adf460e21ba645d13c4c36d",
"index.html": "dc2a4a6c013d236e045cd95344e0b5b2",
"/": "dc2a4a6c013d236e045cd95344e0b5b2",
"main.dart.js": "9bd3fd557c3b4441375e5c031cb81d06",
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
