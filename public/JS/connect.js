//When the user clicks on the hamburger icon
$('.hamburger').click(function(){
  //activate clip-path in the CSS property 'open' for '.nav-links'
  $('.nav-links').toggleClass('open');
  //activate fading effect by changing the opacity % in CSS property 'fade' for '.nav-tags'
  $('.nav-tags').toggleClass('fade');
  //when this happens, hide everything that is not nav
  $('.not-nav').toggleClass('hide');
});

const vnmAlert = "Trang Web đang được cải thiện! Bạn có thể kết nối với mình và đóng góp ý kiến phát triển trang Web này được không?";
const engAlert = "The site is still under construction... However, I would love to hear your feedback! Download my resume and connect with me today!";
var alertMessage = "";
//
// $(document).one('mouseleave', function(){
//   setTimeout(function(){
//     alert(alertMessage);
//   }, 1200);
// });

let url = window.location.href.split("/")[3].length;
let lang = window.location.href.split("/")[3];
if (url==3){
  $('#about').attr('href', './hello');
  $('#connect').attr('href', './connect');
  $('#porfolio').attr('href', './portfolio');
  alertMessage = vnmAlert;
} else {
  $('#about').attr('href', './hello');
  $('#connect').attr('href', './connect');
  $('#porfolio').attr('href', './portfolio');
  alertMessage = engAlert;
}
//
// function animatedForm(){
//   $('.fa-arrow-circle-down').click(function(){
//     const input = $('.fa-arrow-circle-down').prev()[0];
//     const parent = $('.fa-arrow-circle-down').parent()[0];
//     const nextForm = //how to get the sibling of the parent. Ideally parent.next();
//
//     //Check for validation
//
//     if(input.type ==="text" && validateUser(input)) {
//       nextSlide(parent, nextForm);
//     } else if(input.type ==="email" && validateEmail(email)) {
//       nextSlide(parent, nextForm);
//     }
//   });
// }
//
//   function validateUser(input){
//     const validation = /^[a-zA-Z ]{2,30}$/;
//     if(validation.test(input)){
//       error('#ff2e63');
//       return true;
//     }else {
//     error('#252a34');
//     }
//   }
//
//   function validateEmail(email){
//     const validation = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
//     if(validation.test(email)){
//       error('#ff2e63');
//       return true;
//     }else {
//     error('#252a34');
//     }
//   }
//
//   function error(color){
//   $('.colored-section').css('background-color', color);
//   $('.colored-section').css('opacity', '0.8');
// }
//
// function nextSlide(parent, nextForm){
//   parent.attr('.inactive');
//   parent.removeAttr('.active');
//   nextForm.attr('.active');
// }
//
//
//
// animatedForm();
