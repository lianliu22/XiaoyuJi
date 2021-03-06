/**
 * Copyright 2016 Google Inc. All rights reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

// This generated service worker JavaScript will precache your site's resources.
// The code needs to be saved in a .js file at the top-level of your site, and registered
// from your pages in order to be used. See
// https://github.com/googlechrome/sw-precache/blob/master/demo/app/js/service-worker-registration.js
// for an example of how you can register this script and handle various service worker events.

/* eslint-env worker, serviceworker */
/* eslint-disable indent, no-unused-vars, no-multiple-empty-lines, max-nested-callbacks, space-before-function-paren */
'use strict';




importScripts("scripts/sw/sw-toolbox.js","scripts/sw/runtime-caching.js");


/* eslint-disable quotes, comma-spacing */
var PrecacheConfig = [["gingerio-relief.html","b88443a7cebba46aedba35cfad2f29b1"],["images/cases/nerdwallet.png","9fe23f2fba796c858ac1aa16a817b7a8"],["images/cases/nerdwallet.svg","40311186c84a95c8624e26897338774c"],["images/cases/relief.svg","71dc35d0daf95686d2d86ab4685a4d9b"],["images/cases/tracking.png","2e241e30da9ab2c872bedc6095b0ec90"],["images/cases/tracking.svg","9e82807983a32c5bdf29b3eea9461f0f"],["images/footer/footer.svg","a21d93e5469339d7a5aaa22a0774f932"],["images/footer/mood-left.svg","56e5f22dfc1e6807b0a9a35a3e3c61d0"],["images/footer/relief-right.svg","065a522972c025b8b9b3fd85628f49b6"],["images/gingerio-relief/comments.png","7374b672aeedefdc402547f1d9451dbc"],["images/gingerio-relief/comments.svg","5fa9457adbf8a8c4dbd123834790e3b0"],["images/gingerio-relief/comments@2x.png","f669bc8282d044266a1681756e0012d5"],["images/gingerio-relief/comments@3x.png","6f4d73fc8373f703e023427f1c0831e5"],["images/gingerio-relief/digging-deeper.png","180bee844796881e1ca36e4fe9dc7f6d"],["images/gingerio-relief/digging-deeper.svg","7c04c6f58d82c2fdcf05edea998391a2"],["images/gingerio-relief/digging-deeper@2x.png","43bcfe1b86b6cbdbc228a708e193f7fa"],["images/gingerio-relief/digging-deeper@3x.png","b1056f465d579fa49c02e7a5ce1f30c7"],["images/gingerio-relief/feedback.png","d226b0d1467c64d318af4b4ea12a25be"],["images/gingerio-relief/feedback@2x.png","f30d8b058d0544460b667ef20c83e376"],["images/gingerio-relief/feedback@3x.png","5861e38a4923cba242437cf98346cc3d"],["images/gingerio-relief/final.png","b1759469caa6f0178ff4e2fc209c3c4d"],["images/gingerio-relief/final@2x.png","01d2003205ca90e923d7f757c51aea96"],["images/gingerio-relief/final@3x.png","77c6365424bdb3894963474958785d54"],["images/gingerio-relief/healthtip.png","21be09a763749e574820a4eb238a2d86"],["images/gingerio-relief/healthtip@2x.png","38479160eae8a8a4f9d2c8cf62a52e13"],["images/gingerio-relief/healthtip@3x.png","0cf075b75621c96510f1b71dc65a00db"],["images/gingerio-relief/ideation.png","bc50db765fbb7ee03b1d0945b38d600b"],["images/gingerio-relief/ideation.svg","cd6ce644a6a77f7d9169f73edc0badba"],["images/gingerio-relief/ideation@2x.png","4b4142e96ca558857944f6bd118f6178"],["images/gingerio-relief/ideation@3x.png","7d89911ef166668b7156107e25682b95"],["images/gingerio-relief/persona.png","2fb3463c75a6d00ac24df6824b365e77"],["images/gingerio-relief/persona@2x.png","ff81ee7f73522d3bcb85cfdf3172f6ea"],["images/gingerio-relief/persona@3x.png","2601f7fc7f48bb3e538d051921a6a96f"],["images/gingerio-relief/prototype.png","b192ba549ceec672ab1c834713a3eab6"],["images/gingerio-relief/prototype@2x.png","6b37e13c4c8a31d5e45dee21f6c9e78f"],["images/gingerio-relief/prototype@3x.png","3340f5a41057f081bffe8f1a8cb47ff4"],["images/gingerio-relief/result.png","5760c63cfbd65b63a147e92973894e33"],["images/gingerio-relief/result@2x.png","c4e2d0b4afe3ef9a5f03017fd88b8bed"],["images/gingerio-relief/result@3x.png","73b4034d7f5ce8305d00ba4f0487ad9b"],["images/gingerio-relief/storyboard.png","19d9f2c3fd98548176e62b9291fde8f9"],["images/gingerio-relief/storyboard@2x.png","babeec0dd4b6903ba94f4db426aa9f29"],["images/gingerio-relief/storyboard@3x.png","6e886dc5fd1f4ab9515d0548bd2a7714"],["images/gingerio-relief/vision.png","de526cf135eccb010b3000a50733ee5d"],["images/gingerio-relief/vision.svg","8d79fbe7ce60564eba0fcac2291ee84b"],["images/gingerio-relief/vision@2x.png","add56ac312bb58bcf00bb30be514b353"],["images/gingerio-relief/vision@3x.png","59b9f49f78146dc467d2317931990e6f"],["images/gingerio-relief/wireframe.png","2890b54adb570c097f2c7ea3f4e756fc"],["images/gingerio-relief/wireframe@2x.png","1d902eeefd1b4b237093ed4e91372dce"],["images/gingerio-relief/wireframe@3x.png","d8accb6fdf9d23584b6c0199e97c6a84"],["images/hamburger.svg","d2cb0dda3e8313b990e8dcf5e25d2d0f"],["images/landing_page/hand.svg","0537799da292906aec9c0ebc36b5b4da"],["images/landing_page/l_1.svg","f91ab01cf39059f5086eb355c121b8a3"],["images/landing_page/l_2.svg","b2823c1574dfec478234432871fb5dc9"],["images/landing_page/l_3.svg","69ca22c0a5ace12fe956a09844738633"],["images/mood/deliver.png","a8edd4e466f1cea2a33ca6f014b9f6dd"],["images/mood/direction.png","d0508ed0343cae403a82acb532286996"],["images/mood/explore.png","0958a582bbe6a262736ead29ee191d82"],["images/mood/ideas.png","f7398b694cd06f347211e832bb140bad"],["images/mood/plan-reality.png","6c2f66bfef0ba0251f13af508fd39785"],["images/mood/qc.png","d8aadd8b252f30dd1dade75fd3b8ff81"],["images/mood/research.png","ae52b687c20b0a080840b9f707d83ff4"],["images/mood/sketch.png","5e2b9d47939c7be33a05f899bd45d843"],["images/nerdwallet/1.svg","e5125b0715e4d413584a5e12eb442cf0"],["images/nerdwallet/2.png","c548641bb893b25a100d61ed439fdbc0"],["images/nerdwallet/3.png","0a91ba9e247152d4b5c377f711339f04"],["images/nerdwallet/4.png","928d8f9f8a715ad5501f5c35778c1e4d"],["images/nerdwallet/5.png","6dd8e67e4ae0e8b1c5b9a96ce9e1146a"],["images/nerdwallet/6.png","be98c375cc04a54a6a1094e9661edcc1"],["images/nerdwallet/7.png","c4f05fe1cf2e0a39dd29b4db772ebcde"],["images/personal_info/border.svg","159dd04c5a84c1307f24c85c8a14157a"],["images/personal_info/letters.svg","944485a97b726fa361503d72b9d5b136"],["images/touch/apple-touch-icon.png","7326f54bfe6776293f08b34c3a5fde7b"],["images/touch/chrome-touch-icon-192x192.png","571f134f59f14a6d298ddd66c015b293"],["images/touch/icon-128x128.png","7c46d686765c49b813ac5eb34fabf712"],["images/touch/ms-touch-icon-144x144-precomposed.png","452d90b250d6f41a0c8f9db729113ffd"],["index.html","5e3afb179c32de0ac9abf7aec3b01fbf"],["manifest.json","30d402e280a04e6fe03b32da34c70890"],["mood.html","0fd2466a4a4c396ec49f641260c2a065"],["nerdwallet.html","82ff57c9c0c3a1f21c052bc6296e065b"],["scripts/main.min.js","f62e72d18ea699cc554dbb5f8faadf80"],["scripts/sw/runtime-caching.js","e3e34dcb62b5d62453b9215961585488"],["scripts/sw/sw-toolbox.js","e7e54a466864d42dcccc8c3f80a91d1f"],["styles/index.css","ec954c199ba5f43fdb5fe8fbdc1480dd"]];
/* eslint-enable quotes, comma-spacing */
var CacheNamePrefix = 'sw-precache-v1-web-starter-kit-' + (self.registration ? self.registration.scope : '') + '-';


var IgnoreUrlParametersMatching = [/^utm_/];



var addDirectoryIndex = function (originalUrl, index) {
    var url = new URL(originalUrl);
    if (url.pathname.slice(-1) === '/') {
      url.pathname += index;
    }
    return url.toString();
  };

var getCacheBustedUrl = function (url, param) {
    param = param || Date.now();

    var urlWithCacheBusting = new URL(url);
    urlWithCacheBusting.search += (urlWithCacheBusting.search ? '&' : '') +
      'sw-precache=' + param;

    return urlWithCacheBusting.toString();
  };

var isPathWhitelisted = function (whitelist, absoluteUrlString) {
    // If the whitelist is empty, then consider all URLs to be whitelisted.
    if (whitelist.length === 0) {
      return true;
    }

    // Otherwise compare each path regex to the path of the URL passed in.
    var path = (new URL(absoluteUrlString)).pathname;
    return whitelist.some(function(whitelistedPathRegex) {
      return path.match(whitelistedPathRegex);
    });
  };

var populateCurrentCacheNames = function (precacheConfig,
    cacheNamePrefix, baseUrl) {
    var absoluteUrlToCacheName = {};
    var currentCacheNamesToAbsoluteUrl = {};

    precacheConfig.forEach(function(cacheOption) {
      var absoluteUrl = new URL(cacheOption[0], baseUrl).toString();
      var cacheName = cacheNamePrefix + absoluteUrl + '-' + cacheOption[1];
      currentCacheNamesToAbsoluteUrl[cacheName] = absoluteUrl;
      absoluteUrlToCacheName[absoluteUrl] = cacheName;
    });

    return {
      absoluteUrlToCacheName: absoluteUrlToCacheName,
      currentCacheNamesToAbsoluteUrl: currentCacheNamesToAbsoluteUrl
    };
  };

var stripIgnoredUrlParameters = function (originalUrl,
    ignoreUrlParametersMatching) {
    var url = new URL(originalUrl);

    url.search = url.search.slice(1) // Exclude initial '?'
      .split('&') // Split into an array of 'key=value' strings
      .map(function(kv) {
        return kv.split('='); // Split each 'key=value' string into a [key, value] array
      })
      .filter(function(kv) {
        return ignoreUrlParametersMatching.every(function(ignoredRegex) {
          return !ignoredRegex.test(kv[0]); // Return true iff the key doesn't match any of the regexes.
        });
      })
      .map(function(kv) {
        return kv.join('='); // Join each [key, value] array into a 'key=value' string
      })
      .join('&'); // Join the array of 'key=value' strings into a string with '&' in between each

    return url.toString();
  };


var mappings = populateCurrentCacheNames(PrecacheConfig, CacheNamePrefix, self.location);
var AbsoluteUrlToCacheName = mappings.absoluteUrlToCacheName;
var CurrentCacheNamesToAbsoluteUrl = mappings.currentCacheNamesToAbsoluteUrl;

function deleteAllCaches() {
  return caches.keys().then(function(cacheNames) {
    return Promise.all(
      cacheNames.map(function(cacheName) {
        return caches.delete(cacheName);
      })
    );
  });
}

self.addEventListener('install', function(event) {
  event.waitUntil(
    // Take a look at each of the cache names we expect for this version.
    Promise.all(Object.keys(CurrentCacheNamesToAbsoluteUrl).map(function(cacheName) {
      return caches.open(cacheName).then(function(cache) {
        // Get a list of all the entries in the specific named cache.
        // For caches that are already populated for a given version of a
        // resource, there should be 1 entry.
        return cache.keys().then(function(keys) {
          // If there are 0 entries, either because this is a brand new version
          // of a resource or because the install step was interrupted the
          // last time it ran, then we need to populate the cache.
          if (keys.length === 0) {
            // Use the last bit of the cache name, which contains the hash,
            // as the cache-busting parameter.
            // See https://github.com/GoogleChrome/sw-precache/issues/100
            var cacheBustParam = cacheName.split('-').pop();
            var urlWithCacheBusting = getCacheBustedUrl(
              CurrentCacheNamesToAbsoluteUrl[cacheName], cacheBustParam);

            var request = new Request(urlWithCacheBusting,
              {credentials: 'same-origin'});
            return fetch(request).then(function(response) {
              if (response.ok) {
                return cache.put(CurrentCacheNamesToAbsoluteUrl[cacheName],
                  response);
              }

              console.error('Request for %s returned a response status %d, ' +
                'so not attempting to cache it.',
                urlWithCacheBusting, response.status);
              // Get rid of the empty cache if we can't add a successful response to it.
              return caches.delete(cacheName);
            });
          }
        });
      });
    })).then(function() {
      return caches.keys().then(function(allCacheNames) {
        return Promise.all(allCacheNames.filter(function(cacheName) {
          return cacheName.indexOf(CacheNamePrefix) === 0 &&
            !(cacheName in CurrentCacheNamesToAbsoluteUrl);
          }).map(function(cacheName) {
            return caches.delete(cacheName);
          })
        );
      });
    }).then(function() {
      if (typeof self.skipWaiting === 'function') {
        // Force the SW to transition from installing -> active state
        self.skipWaiting();
      }
    })
  );
});

if (self.clients && (typeof self.clients.claim === 'function')) {
  self.addEventListener('activate', function(event) {
    event.waitUntil(self.clients.claim());
  });
}

self.addEventListener('message', function(event) {
  if (event.data.command === 'delete_all') {
    console.log('About to delete all caches...');
    deleteAllCaches().then(function() {
      console.log('Caches deleted.');
      event.ports[0].postMessage({
        error: null
      });
    }).catch(function(error) {
      console.log('Caches not deleted:', error);
      event.ports[0].postMessage({
        error: error
      });
    });
  }
});


self.addEventListener('fetch', function(event) {
  if (event.request.method === 'GET') {
    var urlWithoutIgnoredParameters = stripIgnoredUrlParameters(event.request.url,
      IgnoreUrlParametersMatching);

    var cacheName = AbsoluteUrlToCacheName[urlWithoutIgnoredParameters];
    var directoryIndex = 'index.html';
    if (!cacheName && directoryIndex) {
      urlWithoutIgnoredParameters = addDirectoryIndex(urlWithoutIgnoredParameters, directoryIndex);
      cacheName = AbsoluteUrlToCacheName[urlWithoutIgnoredParameters];
    }

    var navigateFallback = '';
    // Ideally, this would check for event.request.mode === 'navigate', but that is not widely
    // supported yet:
    // https://code.google.com/p/chromium/issues/detail?id=540967
    // https://bugzilla.mozilla.org/show_bug.cgi?id=1209081
    if (!cacheName && navigateFallback && event.request.headers.has('accept') &&
        event.request.headers.get('accept').includes('text/html') &&
        /* eslint-disable quotes, comma-spacing */
        isPathWhitelisted([], event.request.url)) {
        /* eslint-enable quotes, comma-spacing */
      var navigateFallbackUrl = new URL(navigateFallback, self.location);
      cacheName = AbsoluteUrlToCacheName[navigateFallbackUrl.toString()];
    }

    if (cacheName) {
      event.respondWith(
        // Rely on the fact that each cache we manage should only have one entry, and return that.
        caches.open(cacheName).then(function(cache) {
          return cache.keys().then(function(keys) {
            return cache.match(keys[0]).then(function(response) {
              if (response) {
                return response;
              }
              // If for some reason the response was deleted from the cache,
              // raise and exception and fall back to the fetch() triggered in the catch().
              throw Error('The cache ' + cacheName + ' is empty.');
            });
          });
        }).catch(function(e) {
          console.warn('Couldn\'t serve response for "%s" from cache: %O', event.request.url, e);
          return fetch(event.request);
        })
      );
    }
  }
});




