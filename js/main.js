$(function(){

  $('.slider__inner, .news__slider-inner').slick({
    nextArrow: '<button type="button" class="slick-btn slick-next"></button>',
    prevArrow: '<button type="button" class="slick-btn slick-prev"></button>',
    infinite: true,
    autoplay:true,
    autoplaySpeed:3000,
  });

  // $('#service, .services__items').slick({
  //   nextArrow: '<button type="button" class="slick-btn slick-next"></button>',
  //   prevArrow: '<button type="button" class="slick-btn slick-prev"></button>',
  //   infinite: true,
  //   autoplay:true,
  //   autoplaySpeed:3000,
  // });

  $('select').styler();

  $('.header__btn-menu').on('click', function(){
    $('.menu ul').slideToggle();
  });

});