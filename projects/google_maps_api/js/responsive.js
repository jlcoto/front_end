      /*
       * Open the drawer when the menu ison is clicked.
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

if ($(window).width() > 549) {
  $('aside').addClass('col-xs-4');
  $('main').addClass('col-xs-8');
}

$(window).resize(function(){
  var windowWidth = $(window).width();
  if(windowWidth > 549){
    $('aside').addClass('col-xs-4');
    $('main').addClass('col-xs-8');
  } else {
    $('aside').removeClass('col-xs-4');
    $('main').removeClass('col-xs-8');
  }
})