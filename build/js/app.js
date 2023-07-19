if (document.querySelector('.navigation__menu--nojs') !== null) {
  document.querySelector('.navigation__menu--nojs').classList.remove('navigation__menu--nojs');
}

if (document.querySelector('.navigation__toggler--nojs') !== null) {
  document.querySelector('.navigation__toggler--nojs').classList.remove('navigation__toggler--nojs');
}

if (document.querySelector('.block-center--nojs') !== null) {
  let a = document.querySelector('.block-center--nojs');
  a.classList.remove('block-center--nojs');
  a.classList.add('block-center');
}

if (document.querySelector('.page-header__bar') !== null) {
  document.querySelector('.page-header__bar').classList.remove('block-center');
}


//Мобильное меню - бургер
if (document.querySelector('.navigation__toggler') !== null && document.querySelector('.navigation__menu') !== null) {
  let navMenu = document.querySelector('.navigation__menu');
  let navToggler = document.querySelector('.navigation__toggler');

  navToggler.addEventListener('click', (e) => {
    e.preventDefault();
    if (navToggler.classList.contains('navigation__toggler--opened')) {
      navToggler.classList.remove('navigation__toggler--opened');
      navMenu.classList.remove('navigation__menu--opened');
    } else {
      navToggler.classList.add('navigation__toggler--opened');
      navMenu.classList.add('navigation__menu--opened');
    }
  });
}

//Cравнение до и после
if (document.querySelector('.togglers__button') !== null && document.querySelector('.togglers') !== null &&
  document.querySelector('.images__item--before') !== null && document.querySelector('.images__item--after') !== null) {
  let togglerBtns = document.querySelectorAll('.togglers__button');
  let switcher = document.querySelector('.togglers');
  let imgBefore = document.querySelector('.images__item--before');
  let imgAfter = document.querySelector('.images__item--after');

  togglerBtns.forEach((btn) => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();

      if (document.documentElement.clientWidth < 768) {
        if (btn.getAttribute('data-toggler') == 'before' && switcher.classList.contains('togglers--after')) {
          //console.log('было');
          switcher.classList.remove('togglers--after');
          switcher.classList.add('togglers--before');
          imgBefore.classList.add('images__item--active');
          imgAfter.classList.remove('images__item--active');
        } else if (btn.getAttribute('data-toggler') == 'after' && switcher.classList.contains('togglers--before')) {
          //console.log('стало');
          switcher.classList.remove('togglers--before');
          switcher.classList.add('togglers--after');
          imgBefore.classList.remove('images__item--active');
          imgAfter.classList.add('images__item--active');
        }
      }

    });
  });
}
