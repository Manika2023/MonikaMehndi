// about page code

    // Slider functionality for team section

    let sliderContainer = document.getElementById('sliderContainer');
    let slider = document.getElementById('slider');
    let cards = slider.getElementsByTagName('li');
    let sliderContainerWidth = sliderContainer.clientWidth;
    
    // let elementsToShow = window.innerWidth < 640 ? 1 : 3;
    let elementsToShow=3
    if (document.body.clientWidth < 1000){
      elementsToShow=1
    }
    else if(document.body.clientWidth < 1500){
    elementsToShow=2
    }
    let cardWidth = sliderContainerWidth / elementsToShow;
    let totalCards = cards.length;
    let totalVisibleCards = elementsToShow + 2; // including clones
    
    slider.style.width = totalCards * cardWidth + "px";
    slider.style.marginLeft = -cardWidth + "px"; // offset for the first clone
    slider.style.transition = "margin";
    slider.style.transitionDuration = '1s';
    
    for (let index = 0; index < cards.length; index++) {
      const element = cards[index];
      element.style.width = cardWidth + "px";
    }
    
    let currentIndex = elementsToShow;
    
    function updateSliderPosition() {
      slider.style.marginLeft = -(currentIndex * cardWidth) + 'px';
    }
    
    function prev() {
      currentIndex--;
      if (currentIndex < 0) {
        currentIndex = totalCards - totalVisibleCards;
        slider.style.transition = "none"; // disable transition for seamless jump
        updateSliderPosition();
        setTimeout(() => {
          slider.style.transition = "margin 1s"; // re-enable transition
          currentIndex--;
          updateSliderPosition();
        }, 50);
      } else {
        updateSliderPosition();
      }
    }
    
    function next() {
      currentIndex++;
      if (currentIndex >= totalCards - elementsToShow) {
        currentIndex = elementsToShow;
        slider.style.transition = "none"; // disable transition for seamless jump
        updateSliderPosition();
        setTimeout(() => {
          slider.style.transition = "margin 1s"; // re-enable transition
          currentIndex++;
          updateSliderPosition();
        }, 50);
      } else {
        updateSliderPosition();
      }
    }
    
    function autoSlide() {
      next();
    }
    
    window.addEventListener('resize', () => {
      sliderContainerWidth = sliderContainer.clientWidth;
      // elementsToShow = window.innerWidth < 640 ? 1 : 3;
      elementsToShow=3
      if (document.body.clientWidth < 1000){
      elementsToShow=1
    }
    else if(document.body.clientWidth < 1500){
    elementsToShow=2
    }
      cardWidth = sliderContainerWidth / elementsToShow;
      totalVisibleCards = elementsToShow + 2;
    
      slider.style.width = totalCards * cardWidth + "px";
    
      for (let index = 0; index < cards.length; index++) {
        const element = cards[index];
        element.style.width = cardWidth + "px";
      }
    
      updateSliderPosition();
    });
    
    // Start auto slide
    setInterval(autoSlide, 5000); // 5 seconds
    
// js for navbar
  
    document.addEventListener('DOMContentLoaded', function() {
      const burgerIcon = document.getElementById('burger-icon');
      const closeIcon = document.getElementById('close-icon');
      const menu = document.getElementById('menu');
      const navbarBurger = document.querySelector('.navbar-burger');
      const navbarClose = document.querySelector('.navbar-close');
      const menuItems = document.querySelectorAll('#menu a');

      function toggleMenu() {
          menu.classList.toggle('hidden');
          burgerIcon.classList.toggle('hidden');
          closeIcon.classList.toggle('hidden');
      }

      navbarBurger.addEventListener('click', toggleMenu);
      navbarClose.addEventListener('click', toggleMenu);

      menuItems.forEach(item => {
          item.addEventListener('click', function() {
              if (!menu.classList.contains('hidden')) {
                  toggleMenu();
              }
          });
      });
  });