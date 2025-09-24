// Update carosule2.js
const section6CarouselWrapper = document.getElementById(
  "section6CarouselWrapper"
);
const section6PrevBtn = document.getElementById("section6PrevBtn");
const section6NextBtn = document.getElementById("section6NextBtn");

if (section6CarouselWrapper && section6PrevBtn && section6NextBtn) {
  let section6CurrentIndex = 0;
  const section6Slides = Array.from(section6CarouselWrapper.children);
  const section6TotalCards = section6Slides.length;

  function updateSection6Carousel() {
    const screenWidth = window.innerWidth;
    let translateX;

    if (screenWidth <= 425) {
      // For 425px and below (including 326px): show only one card at a time, no offset
      translateX = -section6CurrentIndex * screenWidth;
    } else if (screenWidth >= 639 && screenWidth <= 1024) {
      // For 1024px to 639px range: center the active card
      const cardWidth = 396.730;
      const containerCenter = screenWidth / 2;
      const cardCenter = cardWidth / 2;
      translateX = containerCenter - cardCenter - (section6CurrentIndex * cardWidth);
    } else {
      // Original logic for screens larger than 1024px
      const baseOffset = 80;
      const nextoffset = 80;
      translateX = baseOffset - section6CurrentIndex * 500 - nextoffset;
    }
    
    section6CarouselWrapper.style.transform = `translateX(${translateX}px)`;

    section6PrevBtn.disabled = section6CurrentIndex === 0;
    section6NextBtn.disabled = section6CurrentIndex === section6TotalCards - 1;
  }

  function goToSection6Slide(index) {
    section6CurrentIndex = Math.max(0, Math.min(index, section6TotalCards - 1));
    updateSection6Carousel();
  }

  section6NextBtn.addEventListener("click", () =>
    goToSection6Slide(section6CurrentIndex + 1)
  );
  section6PrevBtn.addEventListener("click", () =>
    goToSection6Slide(section6CurrentIndex - 1)
  );

  // Touch/swipe support
  let section6StartX = 0;
  let section6IsDragging = false;

  section6CarouselWrapper.addEventListener(
    "touchstart",
    (e) => {
      section6StartX = e.touches[0].clientX;
      section6IsDragging = true;
    },
    { passive: true }
  );

  section6CarouselWrapper.addEventListener("touchend", (e) => {
    if (!section6IsDragging) return;
    const diff = section6StartX - e.changedTouches[0].clientX;
    if (Math.abs(diff) > 50) {
      if (diff > 0) goToSection6Slide(section6CurrentIndex + 1);
      else goToSection6Slide(section6CurrentIndex - 1);
    }
    section6IsDragging = false;
  });

  // Recalculate on window resize
  window.addEventListener("resize", updateSection6Carousel);

  // Initialize
  updateSection6Carousel();
}
