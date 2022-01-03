self.addEventListener("install", function (event) {
  console.log("[Service worker] is installing...", event);
});

self.addEventListener("activate", function (event) {
  console.log("Service worker is activate...", event);
  return self.clients.claim();
});
