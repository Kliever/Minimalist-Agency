$(function(){

  //Добавление класса при клике на элемент
  $('.menu__btn').on('click', function () {
    $('.menu__btn').toggleClass('menu__btn--active');
    $('.menu').toggleClass('menu--active');
  });

  $('#fullpage').fullpage({
    autoScrolling: true,
    scrollHorizontally: true,
    verticalCentered: false,
    scrollOverflow: true,
    anchors: ['main', 'product', 'ideas', 'works', 'contact'],
    menu: '#menu__list',
    menu: '#contact__heart-btn',
    menu: '#header__btn-bottom'
  });

      
});