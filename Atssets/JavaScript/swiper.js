var swiper = new Swiper(".mySwiper", {
    cssMode: true,
    mousewheelControl: false,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
      allowTouchMove: false,
      mousewheelControl: false,
    },
    pagination: {
      el: ".swiper-pagination",
    },
    mousewheel:{
      enabled: false,
      mousewheelControl: false,
    },
    keyboard: {
      enabled: false,
      keyboarControl: false,
    },

  });