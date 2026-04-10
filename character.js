
document.addEventListener('DOMContentLoaded', () => {
  const cards = Array.from(document.querySelectorAll('.CharacterCarousel .Card'));
const navButtons = Array.from(document.querySelectorAll('.CarouselNav .carouselButton'));

if (cards.length === 0 || navButtons.length === 0) {

  console.warn('Carousel: no cards or nav buttons found');
} else {
  const setActive = (index) => {
    cards.forEach((card, i) => {
      card.classList.toggle('Card--selected', i === index);
    });
    navButtons.forEach((btn, i) => {
      btn.classList.toggle('carouselButton--selected', i === index);
    });
  };

  navButtons.forEach((btn, i) => {
    btn.addEventListener('click', () => setActive(i));
  });

let currentIndex = 0;
    navButtons.forEach((btn, i) => {
      btn.addEventListener('click', () => {
        currentIndex = i;
        setActive(currentIndex);
      });

    });

const carouselContainer = document.querySelector('.CharacterCarousel');
carouselContainer.addEventListener('click', () => {
  currentIndex = (currentIndex + 1) % cards.length;
  setActive(currentIndex);
}); 


  setActive(0);
}
});
