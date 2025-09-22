const carouselWrapper = document.getElementById("carouselWrapper");
const prevBtn = document.getElementById("prevBtn");
const nextBtn = document.getElementById("nextBtn");

if (carouselWrapper && prevBtn && nextBtn) {
  let currentIndex = 0;
  const slides = Array.from(carouselWrapper.children);
  const totalCards = slides.length;

  // Size wrapper and slides dynamically
  function setWidths() {
    carouselWrapper.style.width = `${totalCards * 100}%`;
    slides.forEach((s) => (s.style.width = `${100 / totalCards}%`));
  }

  function updateCarousel() {
    const translateX = -(currentIndex * (100 / totalCards));
    carouselWrapper.style.transform = `translateX(${translateX}%)`;
    prevBtn.disabled = currentIndex === 0;
    nextBtn.disabled = currentIndex === totalCards - 1;
  }

  function goTo(index) {
    currentIndex = Math.max(0, Math.min(index, totalCards - 1));
    updateCarousel();
  }

  nextBtn.addEventListener("click", () => goTo(currentIndex + 1));
  prevBtn.addEventListener("click", () => goTo(currentIndex - 1));

  // Touch/swipe support
  let startX = 0;
  let isDragging = false;

  carouselWrapper.addEventListener(
    "touchstart",
    (e) => {
      startX = e.touches[0].clientX;
      isDragging = true;
    },
    { passive: true }
  );

  carouselWrapper.addEventListener("touchend", (e) => {
    if (!isDragging) return;
    const diff = startX - e.changedTouches[0].clientX;
    if (Math.abs(diff) > 50) {
      if (diff > 0) goTo(currentIndex + 1);
      else goTo(currentIndex - 1);
    }
    isDragging = false;
  });

  // Recompute on resize
  window.addEventListener("resize", () => {
    setWidths();
    updateCarousel();
  });

  sets();
  updateCarousel();
}
