(() => {
  function initialize() {
    for (const link of document.querySelectorAll("a[href]")) {
      if (
        (link.protocol === "https:" || link.protocol === "http:") &&
        link.origin !== window.location.origin
      ) {
        link.target = "_blank";
        link.relList.remove("opener");
        link.relList.add("noopener", "noreferrer");
      }
    }
  }

  // Material emits document$ on initial load and instant navigation.
  if (typeof document$ !== "undefined") {
    document$.subscribe(initialize);
  } else if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", initialize, { once: true });
  } else {
    initialize();
  }
})();
