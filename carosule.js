const carouselWrapper = document.getElementById("carouselWrapper");
const prevBtn = document.getElementById("prevBtn");
const nextBtn = document.getElementById("nextBtn");

if (carouselWrapper && prevBtn && nextBtn) {
  let currentIndex = 0;
  const totalCards = carouselWrapper.children.length;

  function updateCarousel() {
    const screenWidth = window.innerWidth;
    let cardWidth, containerMaxWidth, cardGap = 0;
    
    // Match exact CSS breakpoints and card sizes
    if (screenWidth <= 326) {
      cardWidth = 200;
      cardGap = 65;
      containerMaxWidth = 326;
    } else if (screenWidth <= 420) {
      cardWidth = 320;
      containerMaxWidth = 420;
    } else if (screenWidth <= 480) {
      cardWidth = 380;
      containerMaxWidth = 480;
    } else if (screenWidth <= 640) {
      cardWidth = 460;
      containerMaxWidth = 640;
    } else {
      // Above 640px - use desktop layout, return early
      return;
    }

    // Get actual container width (limited by max-width)
    const actualContainerWidth = Math.min(screenWidth, containerMaxWidth);
    
    // Center the card in the container

    // For 326px and below, account for gap between cards
    let translateX;
    if (screenWidth <= 326) {
      // Account for padding (50px) and center the card
      const paddingOffset = 50;
      translateX = -paddingOffset - (currentIndex * (cardWidth + cardGap)) + ((actualContainerWidth - cardWidth) / 2);
    } else {
      translateX = -(currentIndex * cardWidth) + ((actualContainerWidth - cardWidth) / 2);
    }
    carouselWrapper.style.transform = `translateX(${translateX}px)`;
    
    // Update button states
    prevBtn.disabled = currentIndex === 0;
    nextBtn.disabled = currentIndex === totalCards - 1;
    
    // Let CSS handle card widths - don't override them
    // CSS now properly defines flex-basis for each breakpoint
  }

  function goTo(index) {
    currentIndex = Math.max(0, Math.min(index, totalCards - 1));
    updateCarousel();
  }

  // Event listeners
  nextBtn.addEventListener("click", () => goTo(currentIndex + 1));
  prevBtn.addEventListener("click", () => goTo(currentIndex - 1));

  // Touch support
  let startX = 0;
  let isDragging = false;

  carouselWrapper.addEventListener("touchstart", (e) => {
    startX = e.touches[0].clientX;
    isDragging = true;
  }, { passive: true });

  carouselWrapper.addEventListener("touchend", (e) => {
    if (!isDragging) return;
    const diff = startX - e.changedTouches[0].clientX;
    if (Math.abs(diff) > 50) {
      if (diff > 0) goTo(currentIndex + 1);
      else goTo(currentIndex - 1);
    }
    isDragging = false;
  });

  // Handle resize
  window.addEventListener('resize', updateCarousel);

  // Initialize
  updateCarousel();
}
