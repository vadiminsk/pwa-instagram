// Initialize deferredPrompt for use later to show browser install prompt.
let deferredPrompt;

if ("serviceWorker" in navigator) {
  navigator.serviceWorker.register("./sw.js").then(function () {
    console.log("Service worker is registered");
  });
}

window.addEventListener("beforeinstallprompt", (e) => {
  // Optionally, send analytics event that PWA install promo was shown.
  console.log(`'beforeinstallprompt' event was fired.`);
  // Prevent the mini-infobar from appearing on mobile
  e.preventDefault();
  // Stash the event so it can be triggered later.
  deferredPrompt = e;
  return false;
});
