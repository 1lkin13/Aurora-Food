var owl = $(".owl-carousel");
owl.owlCarousel({
  items:4,
  margin: 10,
  loop: true,
  nav:true,
  navText: [
    '<i class="fa fa-angle-left"></i>', /* Replace with your desired icon */
    '<i class="fa fa-angle-right"></i>' /* Replace with your desired icon */
  ],
  dots: true,
  dotsEach: 1 // Change this value to change the number of dots shown
});



window.addEventListener('scroll', function() {
  const navbar = document.querySelector('nav');


  const scrollPosition = window.scrollY;

  if (scrollPosition > 0) {
    navbar.classList.add('scrolled');


  } else {
    navbar.classList.remove('scrolled');
    // navflex1.classList.remove('scrolled1');

  }
});

var owl = $(".owl-carousel1");
owl.owlCarousel1({
  items:1,
  margin: 10,
  loop: true,
  nav:true,
  navText: [
    '<i class="fa fa-angle-left"></i>', /* Replace with your desired icon */
    '<i class="fa fa-angle-right"></i>' /* Replace with your desired icon */
  ],
  dots: true,
  dotsEach: 1 // Change this value to change the number of dots shown
});
