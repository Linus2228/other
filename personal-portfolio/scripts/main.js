// slides in text when document is loaded
$(document).ready(function(){
  $('.greeting p').addClass('animated slideInRight');
  $('.greeting p').show();
});


// adding smooth scroll

$('a[href*="#"]:not([href="#"])').on('click', function (e) {

  // prevent default anchor click behavior
  e.preventDefault();

  // store hash
  var hash = this.hash;

  // animate
  $('html, body').animate({
    scrollTop: $(hash).offset().top
  }, 1050, function (){

  });

});
