function initUpdateNavbarOnScroll() {
  const navbar = document.querySelector('.navbar-wagon');
  if (navbar) {
    window.addEventListener('scroll', () => {
      if (window.scrollY >= window.innerHeight) {
        navbar.classList.remove('navbar-wagon-transparent');
        navbar.classList.add('navbar-wagon-filled');
      } else {
        navbar.classList.remove('navbar-wagon-filled');
      }
    });
  }
}

export { initUpdateNavbarOnScroll };
