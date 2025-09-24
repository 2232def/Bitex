const carouselWrapper = document.getElementById("carouselWrapper");
const prevBtn = document.getElementById("prevBtn");
const nextBtn = document.getElementById("nextBtn");

if (carouselWrapper && prevBtn && nextBtn) {
  let currentIndex = 0;
  const totalCards = carouselWrapper.children.length;

  function updateCarousel() {
    const screenWidth = window.innerWidth;
    let cardWidth, gap;
    
    // Simple responsive card sizing with large gaps for single card visibility
    if (screenWidth <= 326) {
      cardWidth = 350;
      gap = screenWidth * 0.8; // Large gap to hide other cards
    } else if (screenWidth <= 480) {
      cardWidth = 420;
      gap = screenWidth * 0.7; // Large gap to hide other cards
    } else if (screenWidth <= 768) {
      cardWidth = 680;
      gap = screenWidth * 0.6; // Large gap to hide other cards
    } else {
      cardWidth = 400;
      gap = screenWidth * 0.5; // Large gap to hide other cards
    }

    // Calculate container padding for equal spacing
    const containerWidth = carouselWrapper.parentElement.offsetWidth;
    const containerPadding = (containerWidth - cardWidth) / 2;
    
    // Set container padding
    carouselWrapper.parentElement.style.paddingLeft = `${containerPadding}px`;
    carouselWrapper.parentElement.style.paddingRight = `${containerPadding}px`;
    
    // Apply the transform to slide cards (same sliding mechanism)
    const translateX = -(currentIndex * (cardWidth + gap));
    carouselWrapper.style.transform = `translateX(${translateX}px)`;
    
    // Update button states
    prevBtn.disabled = currentIndex === 0;
    nextBtn.disabled = currentIndex === totalCards - 1;
    
    // Set card widths and large gaps dynamically
    Array.from(carouselWrapper.children).forEach((card, index) => {
      card.style.width = `${cardWidth}px`;
      card.style.marginRight = `${gap}px`;
    });
    
    // Remove margin from last card
    if (carouselWrapper.children.length > 0) {
      carouselWrapper.children[carouselWrapper.children.length - 1].style.marginRight = '0px';
    }
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
