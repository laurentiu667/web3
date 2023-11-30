if ('serviceWorker' in navigator) {
    navigator.serviceWorker.register('sw.js').then(function(reg) {
    }).catch(function(err) {
        console.warn('Error whilst registering service worker', err);
    });
}

window.addEventListener('online', function(e) {
    document.querySelector("#offline-msg").style.display = "none";
}, false);

window.addEventListener('offline', function(e) {
    document.querySelector("#offline-msg").style.display = "block";
}, false);