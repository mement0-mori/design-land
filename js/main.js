$(function() {

  $('.header__btn').on('click', function () {
    $('.rightsite-menu').removeClass('rightsite-menu--close');
  });
  $('.rightsite-menu__close').on('click', function () {
    $('.rightsite-menu').addClass('rightsite-menu--close');
  });

})



$('.header__btn-menu').on('click', function () {
  $('.menu').toggleClass('menu--open');
});


$(function() {
    $('.top__slider').slick({
        
      dots: true,
      arrows: false,
      fade: true,
      autoplay: true
        
    });
})


$(function() {
  $('.contact-slider').slick({
    slidesToShow: 10,
    slidesToScroll: 10,
    dots: true,
    arrows: false,
    responsive: [
      {
        breakpoint: 1700,
        settings: {
          slidesToShow: 8,
          slidesToScroll: 8,
        }
      },
      {
        breakpoint: 1370,
        settings: {
          slidesToShow: 6,
          slidesToScroll: 6,
        }
      },
      {
        breakpoint: 1040,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 4,
        }
      }
      ,
      {
        breakpoint: 700,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
        }
      }
      
      // You can unslick at a given breakpoint now by adding:
      // settings: "unslick"
      // instead of a settings object
    ]
      // responsive: [
      //   breakpoint :
      // ]
  });
})


$(function() {
  $('.acrticle-slider__box').slick({
    prevArrow: '<button type="button" class="acrticle-slider__arrow acrticle-slider__arrowleft"><img src="images/arrow-slide-left.svg" alt="arrow left"></button>',
    nextArrow: '<button type="button" class="acrticle-slider__arrow acrticle-slider__arrowright"><img src="images/arrow-slide-right.svg" alt="arrow right"></button>'
      
  });
})





$(function() {
  var mixer = mixitup('.gallery__inner', {
    load: {
      filter: '.living'
    }
  });

});