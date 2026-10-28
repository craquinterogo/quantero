(() => {
  const motion = window.matchMedia(
    "(min-width: 960px) and (prefers-reduced-motion: no-preference)"
  );
  let cleanup = () => {};

  function initialize() {
    cleanup();
    const hero = document.querySelector(".quantero-hero");
    if (!hero) return;

    let frame = 0;

    function render() {
      frame = 0;
      const bounds = hero.getBoundingClientRect();
      if (bounds.bottom < 0 || bounds.top > window.innerHeight) return;
      const offset = Math.max(
        -48,
        Math.min(48, (window.innerHeight / 2 - bounds.top - bounds.height / 2) * 0.12)
      );
      hero.style.setProperty("--quantero-parallax-offset", `${offset}px`);
    }

    function schedule() {
      if (!frame) frame = window.requestAnimationFrame(render);
    }

    function updateMotion() {
      window.removeEventListener("scroll", schedule);
      window.removeEventListener("resize", schedule);
      window.cancelAnimationFrame(frame);
      frame = 0;
      hero.classList.toggle("quantero-hero--parallax", motion.matches);
      if (motion.matches) {
        window.addEventListener("scroll", schedule, { passive: true });
        window.addEventListener("resize", schedule);
        schedule();
      } else {
        hero.style.removeProperty("--quantero-parallax-offset");
      }
    }

    motion.addEventListener("change", updateMotion);
    updateMotion();
    cleanup = () => {
      window.removeEventListener("scroll", schedule);
      window.removeEventListener("resize", schedule);
      motion.removeEventListener("change", updateMotion);
      window.cancelAnimationFrame(frame);
      hero.classList.remove("quantero-hero--parallax");
      hero.style.removeProperty("--quantero-parallax-offset");
    };
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
