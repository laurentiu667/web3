// Use a cacheName for cache versioning
let cacheName = 'v1.2';


// Force from root, need to add a "/" at the beginning
let filesToCache = [
    '/',
    '/index.html',
    '/js/main.js',
    '/css/global.css',
  ];

// During the installation phase, you'll usually want to cache static assets.
self.addEventListener('install', function(e) {
    e.waitUntil(
        caches.open(cacheName).then(function(cache) {
        	return cache.addAll(filesToCache);
        })
	);
});

// Cache then network : 
// This approach will get content on screen as fast as possible, but still display up-to-date content once it arrives.
// This requires the page to make two requests: one to the cache, and one to the network. The idea is to show the cached data first, then update the page when/if the network data arrives.
self.addEventListener('fetch', function(event) {
	event.respondWith(
		caches.open(cacheName).then(function(cache) {
			return fetch(event.request).then(function(response) {
				cache.put(event.request, response.clone());
				return response;	
			});
		})
	);
});

// Removing old cache
self.addEventListener('activate', function(event) {
	event.waitUntil(
		caches.keys().then(function(cacheNames) {
			return Promise.all(
				cacheNames.filter(function(cName) {			
					if (cName != cacheName) {
						return caches.delete(cName);
					}			  
		  		}).map(function(cName) {
					return caches.delete(cName);
				})
			);
		})
	);
});
  