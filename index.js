const swiper = new Swiper('.swiper', {
  direction: 'horizontal',
  loop: true, // Ativa loop para carrossel funcionar
  centeredSlides: false,
  
  // Configuração padrão para desktop
  slidesPerView: 4, // Mostra 4 cards no desktop (ajustável)
  spaceBetween: 30,

  // Paginação
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
    dynamicBullets: true
  },

  // Navegação
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

  // Breakpoints responsivos
  breakpoints: {
    // Mobile: 0px - 767px
    0: {
      slidesPerView: 1,
      spaceBetween: 20,
      centeredSlides: true // Centraliza no mobile
    },
    // Tablet: 768px - 1023px
    768: {
      slidesPerView: 2,
      spaceBetween: 25,
      centeredSlides: false
    },
    // Desktop: 1024px+
    1024: {
      slidesPerView: 3, // Ou 4 se quiser mais
      spaceBetween: 30,
      centeredSlides: false
    },
    // Desktop grande: 1280px+
    1280: {
      slidesPerView: 4,
      spaceBetween: 30,
      centeredSlides: false
    }
  },

  autoplay: {
    delay: 4000,
    disableOnInteraction: false,
    pauseOnMouseEnter: true
  },
});