(function() {
  "use strict";
/**
   * Easy selector helper function
   */
  const select = (el, all = false) => {
    el = el.trim();
    if (all) {
      return [...document.querySelectorAll(el)];
    } else {
      return document.querySelector(el);
    }
  };

  /**
   * Easy event listener function
   */
  const on = (type, el, listener, all = false) => {
    let selectEl = select(el, all);
    if (selectEl) {
      if (all) {
        selectEl.forEach(e => e.addEventListener(type, listener));
      } else {
        selectEl.addEventListener(type, listener);
      }
    }
  };

  /**
   * Menu isotope and filter
   */
  window.addEventListener('load', () => {
    let menuContainer = select('.menus-container1');
    if (menuContainer) {
      let menuIsotope = new Isotope(menuContainer, {
        filter: '.filter-activeesk',
        layoutMode: 'fitRows'
      });

      let menuFilters = select('#menus-flters1 li', true);

      on('click', '#menus-flters1 li', function(e) {
        e.preventDefault();
        menuFilters.forEach(function(el) {
          el.classList.remove('filter-active1');
        });
        this.classList.add('filter-active1');

        menuIsotope.arrange({
          filter: this.getAttribute('data-filter1')
        });

      }, true);
    }

  });

})();

