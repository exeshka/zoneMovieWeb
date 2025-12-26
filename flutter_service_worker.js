'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"flutter_bootstrap.js": "2c7c404cadde0f295df4dc146eaa744b",
"version.json": "3bb1ccb340329357814c8ccefbbec81f",
"index.html": "5f325035f4d1e6536652d4d4dd631e2e",
"/": "5f325035f4d1e6536652d4d4dd631e2e",
"main.dart.js": "8149b77c96608c0472b4b5b5148cbabe",
"flutter.js": "24bc71911b75b5f8135c949e27a2984e",
"favicon.png": "de428049bae6caaa0bcce57b27ffca67",
"icons/Icon-192.png": "82d47b755315a08a40946b3dc85732f8",
"icons/Icon-maskable-192.png": "82d47b755315a08a40946b3dc85732f8",
"icons/Icon-maskable-512.png": "2324d3d5612ff4ffb067f08faaf27d53",
"icons/Icon-512.png": "2324d3d5612ff4ffb067f08faaf27d53",
"manifest.json": "0fad4f8dd3befa895b71db0361a55500",
"assets/shorebird.yaml": "29625bae52a7696bb0f19688928104c5",
"assets/NOTICES": "d399c17efbedb867d922447b223cf636",
"assets/FontManifest.json": "057e1df944c4545dd879c3e8ae1b9bee",
"assets/AssetManifest.bin.json": "f907490f1f88594bb5a90b88a4002f90",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "dd68c27e541d59948abcaac409633317",
"assets/packages/youtube_player_iframe/assets/player.html": "663ba81294a9f52b1afe96815bb6ecf9",
"assets/packages/liquid_glass_renderer/lib/assets/shaders/liquid_glass_filter.frag": "7a69a481c4b01af713dc9d1ba40463fa",
"assets/packages/liquid_glass_renderer/lib/assets/shaders/liquid_glass_final_render.frag": "77416b256a173eb8a39a26e00899bc1a",
"assets/packages/liquid_glass_renderer/lib/assets/shaders/liquid_glass_arbitrary.frag": "165123cf809bb7cea0f60cdb8658f67a",
"assets/packages/liquid_glass_renderer/lib/assets/shaders/liquid_glass_geometry_blended.frag": "884d38ba3a7ab0ab72a463611f229e53",
"assets/packages/flutter_inappwebview_web/assets/web/web_support.js": "509ae636cfdd93e49b5a6eaf0f06d79f",
"assets/packages/flutter_inappwebview/assets/t_rex_runner/t-rex.css": "5a8d0222407e388155d7d1395a75d5b9",
"assets/packages/flutter_inappwebview/assets/t_rex_runner/t-rex.html": "16911fcc170c8af1c5457940bd0bf055",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"assets/shaders/stretch_effect.frag": "40d68efbbf360632f614c731219e95f0",
"assets/AssetManifest.bin": "7a0a1f823153ee8f65c05ff2a7fdd261",
"assets/fonts/MaterialIcons-Regular.otf": "14819883071ca1ecb011b58ac899581b",
"assets/assets/svg/close_icon.svg": "e93fb0dd89ac147aec4d6445b5b6b6bd",
"assets/assets/svg/send.svg": "822fd489f1ca129f6e26e64f10c07bd2",
"assets/assets/svg/paper_clip.svg": "6177bba9ef7360f319ccdf3704fce43e",
"assets/assets/app_icon/logo.png": "5849121b17610b807120459832ad3ec9",
"assets/assets/images/1.jpg": "9c582df4a1384b73e735794bfad9ef3e",
"assets/assets/fonts/nunito/Nunito-Medium.ttf": "5f504c0f28f0bbbb9ea94cd0b23aef34",
"assets/assets/fonts/nunito/Nunito-ExtraBoldItalic.ttf": "90fd744aa0fc6e46613862b44c49370c",
"assets/assets/fonts/nunito/Nunito-ExtraBold.ttf": "a1007cb176b5b6fbfa37f5a662bb0818",
"assets/assets/fonts/nunito/Nunito-ExtraLightItalic.ttf": "8809f2b041d722c78b9724eb4e0e887d",
"assets/assets/fonts/nunito/Nunito-Light.ttf": "d30775dbf2cf995122a2c8bff85d22d2",
"assets/assets/fonts/nunito/Nunito-Regular.ttf": "78fa1a608ece83db66b4b1b7c20b969b",
"assets/assets/fonts/nunito/Nunito-SemiBold.ttf": "89a76cea4a0f0e2eeaaccaf2afbad11b",
"assets/assets/fonts/nunito/Nunito-Bold.ttf": "a69d02bf1d69ee833dfefdb5d21eec9b",
"assets/assets/fonts/nunito/Nunito-BoldItalic.ttf": "ef7b07f381ef2187f66760117bf816e9",
"assets/assets/fonts/nunito/Nunito-Black.ttf": "0e09403e2fcc68840eb4a341fa1eb5fa",
"assets/assets/fonts/nunito/Nunito-ExtraLight.ttf": "d247d0dc8869139115895d96c376ec89",
"assets/assets/fonts/nunito/Nunito-SemiBoldItalic.ttf": "425b478c347f232b3d405322e06d640e",
"assets/assets/fonts/nunito/Nunito-BlackItalic.ttf": "6e5e0a0fdd38e09b3bbf046c8d3dc4b5",
"assets/assets/fonts/nunito/Nunito-Italic.ttf": "2f9ffd39d186c379a8aeffd9755c99f5",
"assets/assets/fonts/nunito/Nunito-LightItalic.ttf": "2fc7f5f72da14efcfc273ae9b64c0ede",
"assets/assets/fonts/nunito/Nunito-MediumItalic.ttf": "6e659dd5df13a0c909f385a159eca269",
"canvaskit/skwasm.js": "8060d46e9a4901ca9991edd3a26be4f0",
"canvaskit/skwasm_heavy.js": "740d43a6b8240ef9e23eed8c48840da4",
"canvaskit/skwasm.js.symbols": "3a4aadf4e8141f284bd524976b1d6bdc",
"canvaskit/canvaskit.js.symbols": "a3c9f77715b642d0437d9c275caba91e",
"canvaskit/skwasm_heavy.js.symbols": "0755b4fb399918388d71b59ad390b055",
"canvaskit/skwasm.wasm": "7e5f3afdd3b0747a1fd4517cea239898",
"canvaskit/chromium/canvaskit.js.symbols": "e2d09f0e434bc118bf67dae526737d07",
"canvaskit/chromium/canvaskit.js": "a80c765aaa8af8645c9fb1aae53f9abf",
"canvaskit/chromium/canvaskit.wasm": "a726e3f75a84fcdf495a15817c63a35d",
"canvaskit/canvaskit.js": "8331fe38e66b3a898c4f37648aaf7ee2",
"canvaskit/canvaskit.wasm": "9b6a7830bf26959b200594729d73538e",
"canvaskit/skwasm_heavy.wasm": "b0be7910760d205ea4e011458df6ee01"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"flutter_bootstrap.js",
"assets/AssetManifest.bin.json",
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
        // Claim client to enable caching on first launch
        self.clients.claim();
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
      // Claim client to enable caching on first launch
      self.clients.claim();
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
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
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
