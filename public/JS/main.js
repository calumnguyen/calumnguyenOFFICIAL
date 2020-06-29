//When the user clicks on the hamburger icon
$('.hamburger').click(function(){
  //activate clip-path in the CSS property 'open' for '.nav-links'
  $('.nav-links').toggleClass('open');
  //activate fading effect by changing the opacity % in CSS property 'fade' for '.nav-tags'
  $('.nav-tags').toggleClass('fade');
  //when this happens, hide everything that is not nav
  $('.not-nav').toggleClass('hide');
});

var alertMessage = [
  "It's still a rocky road... However, I would love to hear your feedback! Download my resume and connect with me today!",
  "Unde-lorem Construct-ipsom! However, I would love to hear your feedback! Download my resume and connect with me today!",
  "Under Construction... However, I would love to hear your feedback on it! Download my resume and connect with me today!!",
]

const randomNumber = Math.floor(Math.random()*3);

setTimeout(function(){
  alert(alertMessage[randomNumber]);
}, 2000 );
