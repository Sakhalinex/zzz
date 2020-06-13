// Слайдер на главной
$(document).ready(function(){
    $('.header__slider').slick({
        arrows:false,
        dots:true,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 6000,
    });
});

// Бургер на мобильных телефонах
$(document).ready(function() {
    $('.header__burger').click(function(event) {
        $('.header__burger, .header__top-menu').toggleClass('active');
    });
});

//Табы на главной
(function($) {
$(function() {
  
  $('ul.tabs__caption').on('click', 'li:not(.active)', function() {
    $(this)
      .addClass('active').siblings().removeClass('active')
      .closest('div.tabs').find('div.tabs__content').removeClass('active').eq($(this).index()).addClass('active');
  });
  
});
})(jQuery);


//Выпадающее меню
$(document).ready(function() {
    $('.open-sub').click(function(event) {
        $('.open-sub, .sub-menu-block').toggleClass('active');
    });
});

//Табы на карточке товара
(function($) {
$(function() {
  
  $('ul.product-card__tabs-list').on('click', 'li:not(.active)', function() {
    $(this)
      .addClass('active').siblings().removeClass('active')
      .closest('div.product-card__tabs').find('div.product-card__tabs-content').removeClass('active').eq($(this).index()).addClass('active');
  });
  
});
})(jQuery);

// Слайдер на карточке товара

$(document).ready(function(){
    $('.other-goods__items').slick({
        arrows:true,
        dots:false,
        slidesToShow: 3,
        slidesToScroll: 1,

        
    });
});

//Большой слайдер на карточке

$(document).ready(function(){
    $('.viewed__slider').slick({
        arrows:true,
        dots:false,
        slidesToShow: 4,
        slidesToScroll: 1,

        
    });
});

//Приоритет загрузки JS(Оптимизация скорости загрузки)

function downloadJSAtOnload() {
      var element = document.createElement("script");
      element.src = "script.js";
      document.body.appendChild(element);
   }
   if (window.addEventListener)
      window.addEventListener("load", downloadJSAtOnload, false);
   else if (window.attachEvent)
      window.attachEvent("onload", downloadJSAtOnload);
   else window.onload = downloadJSAtOnload;
