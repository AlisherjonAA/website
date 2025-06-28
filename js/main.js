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

  $('#myForm').on('submit', function (e) {
    e.preventDefault(); // Sahifa yangilanishini to‘xtatadi
    // 1. Forma ma'lumotlarini JSON ko‘rinishida yig‘ish
    let formData = {
      name: $('input[name="name1"]').val(),
      phone: $('input[name="phone_number"]').val()
    };

    // 2. AJAX so‘rovni yuborish
    $.ajax({
      url: 'https://saferoute-8eba3-default-rtdb.firebaseio.com/users.json',                 // Backend endpoint manzili
      type: 'POST',
      contentType: 'application/json', // JSON yuborilishini bildiradi
      data: JSON.stringify(formData), // JSON formatga o‘tkazish
      success: function (response) {
        // Masalan: alert("Yuborildi!") yoki formani tozalash
        $('#myForm')[0].reset();
        $.fancybox.close();
        alert("Your message has been sent. We will contact you.")
      },
      error: function (xhr, status, error) {
        console.error('Xatolik:', error);
        $('#myForm')[0].reset();
        $.fancybox.close();
      }
    });
  });

  $('#fullInfo').on('submit', function (e) {
    e.preventDefault(); // Sahifa yangilanishini to‘xtatadi
    // 1. Forma ma'lumotlarini JSON ko‘rinishida yig‘ish
    let formData = {
      name: $('input[name="name2"]').val(),
      phone: $('input[name="phone"]').val(),
      info: $('textarea[name="info"]').val(),
      email: $('input[name="email"]').val()
    };

    // 2. AJAX so‘rovni yuborish
    $.ajax({
      url: 'https://saferoute-8eba3-default-rtdb.firebaseio.com/users_full.json',                 // Backend endpoint manzili
      type: 'POST',
      contentType: 'application/json', // JSON yuborilishini bildiradi
      data: JSON.stringify(formData), // JSON formatga o‘tkazish
      success: function (response) {
        // Masalan: alert("Yuborildi!") yoki formani tozalash
        $('#fullInfo')[0].reset();
        alert("Your message has been sent. We will contact you.")
      },
      error: function (xhr, status, error) {
        console.error('Xatolik:', error);
        $('#fullInfo')[0].reset();
      }
    });
  });
});