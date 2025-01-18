
window.addEventListener('scroll', function() {
    const navbar = document.querySelector('nav');
  
  
    const scrollPosition = window.scrollY;
  
    if (scrollPosition > 0) {
      navbar.classList.add('scrolled');
  
  
    } else {
      navbar.classList.remove('scrolled');

  
    }
  });