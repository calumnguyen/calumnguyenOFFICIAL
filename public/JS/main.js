//When the user clicks on the hamburger icon
$('.hamburger').click(function(){
  //activate clip-path in the CSS property 'open' for '.nav-links'
  $('.nav-links').toggleClass('open');
  //activate fading effect by changing the opacity % in CSS property 'fade' for '.nav-tags'
  $('.nav-tags').toggleClass('fade');
  //when this happens, hide everything that is not nav
  $('.not-nav').toggleClass('hide');
});

//Alert pops up when user tries to leave the site

const vnmAlert = "Trang Web đang được cải thiện! Bạn có thể kết nối với mình và đóng góp ý kiến phát triển trang Web này được không?";
const engAlert = "The site is still under construction... However, I would love to hear your feedback! Download my resume and connect with me today!";
var alertMessage = "";
//
// $(document).one('mouseleave', function(){
//   setTimeout(function(){
//     alert(alertMessage);
//   }, 1200);
// });


// Set routes based on language

let url = window.location.href.split("/")[3].length;
let lang = window.location.href.split("/")[3];
if (url==0){
  $('#link').attr('href', './hello');
  $('#about').attr('href', './hello');
  $('#connect').attr('href', './connect');
  $('#portfolio').attr('href', './portfolio');
  alertMessage = engAlert;
} else {
  $('#link').attr('href', './'+lang+'/hello');
  $('#about').attr('href', './'+lang+'/hello');
  $('#connect').attr('href', './'+lang+'/connect');
  $('#portfolio').attr('href', './'+lang+'/portfolio');
  alertMessage = vnmAlert;
}
