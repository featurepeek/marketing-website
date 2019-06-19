export const settings = {
  arrows: false,
  autoplay: true,
  autoplaySpeed: 3500,
  centerMode: true,
  centerPadding: '140px',
  // cssEase: 'linear',
  infinite: true,
  slidesToScroll: 1,
  slidesToShow: 3,
  speed: 500,
  // swipeToSlide: true,
  touchThreshold: 10,
  responsive: [
    {
      breakpoint: 1200,
      settings: {
        centerPadding: '240px',
        slidesToShow: 2,
      },
    },
    {
      breakpoint: 1100,
      settings: {
        centerPadding: '200px',
        slidesToShow: 2,
      },
    },
    {
      breakpoint: 1000,
      settings: {
        centerPadding: '150px',
        slidesToShow: 2,
      },
    },
    {
      breakpoint: 900,
      settings: {
        centerPadding: '100px',
        slidesToShow: 2,
      },
    },
    {
      breakpoint: 800,
      settings: {
        centerPadding: '50px',
        slidesToShow: 2,
      },
    },
    {
      breakpoint: 720,
      settings: {
        centerPadding: '150px',
        slidesToShow: 1,
      },
    },
    {
      breakpoint: 504,
      settings: {
        centerPadding: '100px',
        slidesToShow: 1,
      },
    },
    {
      breakpoint: 415,
      settings: {
        autoplaySpeed: 3000,
        centerPadding: '25px',
        cssEase: 'ease',
        slidesToShow: 1,
        speed: 1000,
      },
    },
  ],
}
