// carasoual
$(".owl-carousel").owlCarousel({
  loop: true,
  margin: 10,
  nav: true,
  stagePadding: 5,
  autoplay: true,
  autoplayTimeout: 1000,
  dots: false,
  responsive: {
    0: {
      items: 4,
    },
    600: {
      items: 5,
    },
    800: {
      items: 6,
    },
    1000: {
      items: 7,
    },
    1200: {
      items: 8,
    },
    1400: {
      items: 12,
    },
  },
});
