//When the user clicks on the hamburger icon
$('.hamburger').click(function(){
  //activate clip-path in the CSS property 'open' for '.nav-links'
  $('.nav-links').toggleClass('open');
  //activate fading effect by changing the opacity % in CSS property 'fade' for '.nav-tags'
  $('.nav-tags').toggleClass('fade');
  //when this happens, hide everything that is not nav
  $('.not-nav').toggleClass('hide');
});
