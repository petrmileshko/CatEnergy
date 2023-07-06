
if(document.querySelector('.navigation__menu--nojs') !==null)
document.querySelector('.navigation__menu--nojs').classList.remove('navigation__menu--nojs');

if(document.querySelector('.navigation__toggler') !==null && document.querySelector('.navigation__menu') !==null) {
let navMenu = document.querySelector('.navigation__menu');
let navToggler = document.querySelector('.navigation__toggler');

navToggler.addEventListener('click', (e)=> {
e.preventDefault();
if(navToggler.classList.contains('navigation__toggler--opened')) {
  navToggler.classList.remove('navigation__toggler--opened');
  navMenu.classList.remove('navigation__menu--opened');
}
else {
  navToggler.classList.add('navigation__toggler--opened');
  navMenu.classList.add('navigation__menu--opened');
}
});
}
