// NAV TAB
const initTabNav = () => {
  const tabMenu = document.querySelectorAll('.js-tabmenu li');
  const tabContent = document.querySelectorAll('.js-tabcontent section');

  if (tabMenu.length && tabContent.length) {
    tabContent[0].classList.add('ativo');

    const activeTab = (index) => {
      tabContent.forEach((section) => {
        section.classList.remove('ativo');
      });
      tabContent[index].classList.add('ativo');
    };

    tabMenu.forEach((itemMenu, index) => {
      itemMenu.addEventListener('click', () => {
        activeTab(index);
      });
    });
  }
};
initTabNav();

// ACCORDION LIST
const initAccordion = () => {
  const accordionList = document.querySelectorAll('.js-accordion dt');
  const activeClass = 'active';
  if (accordionList.length) {
    accordionList[0].classList.add(activeClass);
    accordionList[0].nextElementSibling.classList.add(activeClass);

    function activeAccordion() {
      this.classList.toggle(activeClass);
      this.nextElementSibling.classList.toggle(activeClass);
    }

    accordionList.forEach((item) => {
      item.addEventListener('click', activeAccordion);
    });
  }
};
initAccordion();

// SMOOTH SCROLL LINK
const initSmoothScroll = () => {
  const internalLinks = document.querySelectorAll('.js-menu a[href^="#"]');

  const scrollToSection = (event) => {
    event.preventDefault();
    const href = event.currentTarget.getAttribute('href');
    const section = document.querySelector(href);

    section.scrollIntoView({
      behavior: 'smooth',
      block: 'start',
    });

    // Forma Alternativa
    // const top = section.offsetTop;
    // window.scrollTo({
    //   top: top,
    //   behavior: 'smooth',
    // });
  };

  internalLinks.forEach((link) => {
    link.addEventListener('click', scrollToSection);
  });
};
initSmoothScroll();
