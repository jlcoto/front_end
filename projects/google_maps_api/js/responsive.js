/*
 * Open the drawer when the sandwich icon is clicked is clicked.
 */
var clickSandwich = document.querySelector('#sandwich-menu');
var main = document.querySelector('main');
var drawer = document.querySelector('#menu');

clickSandwich.addEventListener('click', function(e) {
  drawer.classList.toggle('open');
  e.stopPropagation();
});
main.addEventListener('click', function() {
  drawer.classList.remove('open');
});

