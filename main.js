let menuOpenBtn = document.getElementById('menu-open-btn'); /*open btn*/
let mobileMenu = document.getElementById('mob-menu-div'); /*mobile menu*/
let menuCloseBtn = document.getElementById('menu-close-btn'); /*close btn*/

/* open menu */
menuOpenBtn.addEventListener('click', function () {
  mobileMenu.classList.add('is-open');
  alert(mobileMenu.classList);
});

/* close menu */
menuCloseBtn.addEventListener('click', function () {
  mobileMenu.classList.remove('is-open');
  alert(mobileMenu.classList);
});