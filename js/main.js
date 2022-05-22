$(function() {

  $('.header__btn').on('click', function () {
    $('.rightsite-menu').removeClass('rightsite-menu--close');
  });
  $('.rightsite-menu__close').on('click', function () {
    $('.rightsite-menu').addClass('rightsite-menu--close');
  });

})




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