(function() {
  "use strict";

  /**
   * Testimonials slider
   */
  new Swiper('.events-slider1', {
    speed: 600,
    loop: true,
    autoplay: {
      delay: 5000,
      disableOnInteraction: false
    },
    slidesPerView: 'auto',
    pagination: {
      el: '.swiper-pagination',
      type: 'bullets',
      clickable: true
    }
  });

  const time = () => {

        const activerow = document.querySelector('#activerow1');

        const monday = document.querySelector('.monday');
        const tuesday = document.querySelector('.tuesday');
        const wednesday = document.querySelector('.wednesday');
        const thursday = document.querySelector('.thursday');
        const friday = document.querySelector('.friday');
        const saturday = document.querySelector('.saturday');
        const sunday = document.querySelector('.sunday');


        switch (new Date().getDay()) {

            case 1:
                monday.setAttribute("id", "activerow1");
                break;
            case 2:
                tuesday.setAttribute("id", "activerow1");
                break;
            case 3:
                wednesday.setAttribute("id", "activerow1");
                break;
            case 4:
                thursday.setAttribute("id", "activerow1");
                break;
            case 5:
                friday.setAttribute("id", "activerow1");
                break;
            case 6:
                saturday.setAttribute("id", "activerow1");
                break;
            case 0:
                sunday.setAttribute("id", "activerow1");
                break;
        }

    }
    time();

})();