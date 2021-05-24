'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  ".git/COMMIT_EDITMSG": "83d043db4fdfe6882fb7f01a09d92b11",
".git/config": "8658ff1e7a7e9695fd9c3d1fc8a2d495",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/FETCH_HEAD": "975484f36896287663b1bcf4c15a11f5",
".git/HEAD": "4cf2d64e44205fe628ddd534e1151b58",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/fsmonitor-watchman.sample": "ea587b0fae70333bce92257152996e70",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-push.sample": "3c5989301dd4b949dfa1f43738a22819",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/update.sample": "7bf1fcc5f411e5ad68c59b68661660ed",
".git/index": "eca0834db56a3056e82d2fddcec21ab6",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "c6794ba7041f1beba128aeb5472e8364",
".git/logs/refs/heads/master": "c6794ba7041f1beba128aeb5472e8364",
".git/logs/refs/remotes/origin/master": "9313a4914dd7b41f24e9d44fc0810c31",
".git/objects/01/25fe29786c835c5a3e5eecc940651a1a6db540": "3169d19ee05e34da6d1a5e16cd1728df",
".git/objects/02/46d1a59a1570508c15c18bdb3be1dab875469e": "0bb0dddaa26f5bdb1526df16f77bc365",
".git/objects/03/eaddffb9c0e55fb7b5f9b378d9134d8d75dd37": "87850ce0a3dd72f458581004b58ac0d6",
".git/objects/06/40c5f9a6d9839a3ed62cda74cb09d0215aa8da": "b45a776d6a16545ef52bf97f1e882a0f",
".git/objects/0f/f39dd99dbdd41339c033452117b832715ae679": "9c135760da7c27d82bcbeacd8410490b",
".git/objects/13/9ad928b0bfb9c2d4a9fea85a494938e810ca8c": "719dbc55be67e5c02765db292ff9ac66",
".git/objects/13/e0ebcab6c46d3f2f096404aa3e8327d16eb86d": "cb3ce30ffba02fa935e87e8824bad802",
".git/objects/20/307eb60b4af231997af98bea963f72573747f1": "ce07c6fa8a36c8fb423b74987b945575",
".git/objects/20/5bb5db271c6d8de8399864c7bb9b917f638893": "c993b22f115d7f3ae6d5b7b212806539",
".git/objects/23/ea9f0833008349a82e7faf9ed1b54b4e74686f": "cd9ecf95513d83161b9269622fc21887",
".git/objects/27/b2365b0d6c9321b9e1887fea4629688ced5eb0": "2c8aa5a02ca59f425eaca9a18070c291",
".git/objects/2c/23c1258914a9cf5d1404a23c684d29e18faae4": "05e34f1ce776ac5ef2d6c42ada847365",
".git/objects/31/61eb5726008931c7403aece74e6f0b1ec5c94f": "5e43554fe693642e524cade6c62712e6",
".git/objects/32/46ad559eeae0370195978eaed83f1053ee13fd": "a043dbc0a0bda96ce2127799ccc27506",
".git/objects/3a/ab09d75182c88dfc334defa1c476a10b80929c": "139410630ca068e6493d5c4932857444",
".git/objects/45/f9ca90d4636a1634f50ff178e44c51ed833435": "e15a149b1b751b68436181ddd0d2d195",
".git/objects/46/4ab5882a2234c39b1a4dbad5feba0954478155": "2e52a767dc04391de7b4d0beb32e7fc4",
".git/objects/48/6124812c046a30f15f991b7fa09724f7cc76cd": "57f8af53d7a77782141a62bf1bec877c",
".git/objects/53/f6bfbf4a9a0f2c3847fcbff72a15d620141b39": "9fac0186fd28e794f809bdcbb8644b76",
".git/objects/61/a4f9f091119456f6150aa2493d31ae44279e1e": "226ddb1ab6a89b95d1f94d7ed4b9f28a",
".git/objects/63/e0525de4a562486506a9f55b1e7ad0f9aa0665": "036eafd650aac3d124bf9583adc05232",
".git/objects/71/a3aaf9248f44bafa1319a16ce3ad11bdbaf180": "c382c2ebf89c1483a94e36afe04927f1",
".git/objects/72/0c487c892f53f490316c69d45eef53a0dbb715": "37026ed3f7b5d22d83f198944e2aa316",
".git/objects/79/ba7ea0836b93b3f178067bcd0a0945dbc26b3f": "f3e31aec622d6cf63f619aa3a6023103",
".git/objects/80/f50972634cb836dca5fc305d8feac89304f5ef": "59c2e3ba4580ab38ea5c6ce8a726ad90",
".git/objects/81/46591bf6a2b17cd7a821ba6c64015be0f38db3": "be59f051930abfaca9763eb4651fc8b1",
".git/objects/87/29fcee7fcd25c7bdacd317b3a259a1b89d7b70": "4c8778205b298f477897caf1f9075457",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/8d/0dd1d543a8ca053e46fdd2d8a304b822943a72": "4d5974aee45ee2304b9385bfadd7c286",
".git/objects/94/0c2c1ae85f1fbec94c94d760450668aa4ef153": "39872b65799af3c93b9bcade447e61a7",
".git/objects/a1/3837a12450aceaa5c8e807c32e781831d67a8f": "bfe4910ea01eb3d69e9520c3b42a0adf",
".git/objects/a2/06d5c1e846ff3dfe4867a9e7b8189df0d9694f": "f171fb724f023f2d6939f745f6c5d0b8",
".git/objects/a5/16a8f85c2a7a1fc7110a8427ef52dec42b4927": "75cc8b81223312e6f7411189d287e5a7",
".git/objects/a7/958971baab155a6a24dc011c86e99cfa62c306": "977f33296afceb8b64f40bd92e5712cb",
".git/objects/a8/382429dc9ec6c03847f7e9e4c2640a5fe94dda": "60d6e471aec3336f5e34dfa4bfca0b6d",
".git/objects/a8/beffd3ad4fe54d6cabccf83a05477d6a986cd0": "6677888e4a051c7838b5b240c09f0981",
".git/objects/aa/4701c0af6150e1bf72195fed6468c962b1f8e3": "2dc2aeb69ec4ecaf3a0fd7151ef9f4a7",
".git/objects/ab/0e98497a51ead7821d1da35a24968ff314e50f": "557c35fe3928eb2af403d1b3926bb9ba",
".git/objects/b6/df149eee38bf5667ffb055960621e56eb9881a": "f67589ad43d467b19f903eff30a228c3",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/d5/9486cfa4caacc2a7046581b393c8daa38c28e0": "a6a2ccaa47f0273025931efbd28d305f",
".git/objects/de/3d0b5554974d293fab385185f4a3f4d32de88c": "79108ccc490c7c6faed36fc53931e0bc",
".git/objects/e5/951dfb943474a56e611d9923405cd06c2dd28d": "c6fa51103d8db5478e1a43a661f6c68d",
".git/objects/ec/d5e72380cfb84b162dfc80c2ce8ac97bcf7feb": "5212000ce80f1a0927620f695855da8d",
".git/objects/f6/7dff1560578e5c59690f3df490eac327270979": "1f29034e04abfed951a3fffe24dbae3a",
".git/objects/f9/f0cbf9b4bcb8f0e13deee54cbc086d28c32dae": "cf74d0153eb9071ffe7afc4bc1da2a1c",
".git/objects/fe/5fa8b2257b5044c112cb230820ab481577bb32": "8e89031756dbe17508a21dca4e786da6",
".git/ORIG_HEAD": "16e04f4b14a2f385b70b3467e2c93c72",
".git/refs/heads/master": "16e04f4b14a2f385b70b3467e2c93c72",
".git/refs/remotes/origin/master": "16e04f4b14a2f385b70b3467e2c93c72",
"assets/AssetManifest.json": "2efbb41d7877d10aac9d091f58ccd7b9",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/fonts/MaterialIcons-Regular.otf": "4e6447691c9509f7acdbf8a931a85ca1",
"assets/NOTICES": "6aca6dd6c01e1ebc1601feee31e5b92b",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"index.html": "026bf541ef257421b9d81f539a99f1f4",
"/": "026bf541ef257421b9d81f539a99f1f4",
"main.dart.js": "3b2421ae3d8faf4599ff395ab6618e0f",
"manifest.json": "42734c8f50fa0ffab80e272e1b881f43",
"README.md": "e091405b8006700fc9f7270661c6e6ad",
"version.json": "54675b73f33419f304c8d7131d1c7fea"
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
