function initNavbarOnScrool() {
  const navbar = document.querySelector('.navbar-wagon');
  if (navbar) {
    window.addEventListener('scroll',() => {
      if (window.scrollY >= window.innerHeight) {
        navbar.classList.add('navbar-wagon-white');
      } else {
        navbar.classLis.remove('navbar-wagon-white');
      }
    });
  }
}

export { initNavbarOnScrool };
