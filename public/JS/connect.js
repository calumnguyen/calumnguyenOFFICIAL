//When the user clicks on the hamburger icon
$('.hamburger').click(function() {
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

// $(document).one('mouseleave', function(){
//   setTimeout(function(){
//     alert(alertMessage);
//   }, 1200);
// });

// Set routes based on language

$('#english').attr('href', '/connect');
$('#vietnamese').attr('href', '/vnm/connect');

let url = window.location.href.split("/")[3].length;
let lang = window.location.href.split("/")[3];
if (url==3){
  $('#about').attr('href', './hello');
  $('#connect').attr('href', './connect');
  $('#portfolio').attr('href', './portfolio');
  $('#copyright').attr('href', '/vnm');
  alertMessage = vnmAlert;
} else {
  $('#about').attr('href', './hello');
  $('#connect').attr('href', './connect');
  $('#portfolio').attr('href', './portfolio');
  $('#copyright').attr('href', './');
  alertMessage = engAlert;
}

// Form validation/animation

function animatedForm() {

  var name = "";
  // Last Name
  $('.fa-arrow-circle-down.lname').click(function() {

    lname = $('.fa-arrow-circle-down.lname').prev().val()

    if (validateUser(lname)) {
      $('.field-lname').addClass('inactive');
      $('.field-lname').removeClass('active');
      $('.field-fname').addClass('active');
      $('.field-fname').removeClass('inactive');
      if (url == 3) {
        $('#prompt').text('Tên bạn là gì?');
      } else {
        $('#prompt').text('What is your preferred first name?');
      }
      console.log('Last name ',lname);
    } else{
      $('.field-lname').css('animation','shake 0.5s ease');
      console.log('Wrong last name type');
    }


  });

  // First Name
  $('.fa-arrow-circle-down.fname').click(function() {

    fname = $('.fa-arrow-circle-down.fname').prev().val()
    name = fname;

    if (validateUser(fname)) {
      $('.field-fname').addClass('inactive');
      $('.field-fname').removeClass('active');
      $('.field-email').addClass('active');
      $('.field-email').removeClass('inactive');
      if (url == 3) {
        $('#prompt').text('Địa chỉ email của '+name+' là gì?');
      } else {
        $('#prompt').text('What is your email address, '+name+'?');
      }
      console.log('First name ',fname);
    } else{
      $('.field-fname').css('animation','shake 0.5s ease');
      console.log('Wrong first name type')
    }
  });

  // Email
  $('.fa-arrow-circle-down.email').click(function() {

    email = $('.fa-arrow-circle-down.email').prev().val()

    if (validateEmail(email)) {
      $('.field-email').addClass('inactive');
      $('.field-email').removeClass('active');
      $('.field-like').addClass('active');
      $('.field-like').removeClass('inactive');
      if (url == 3) {
        $('#prompt').text(name+' ơi, '+name+' hứng thú về lĩnh vực nào nhỉ?');
        $('#like-input').val('Tất cả mọi lĩnh vực!');
      } else {
        $('#prompt').text('Which areas of study are you interested in, '+name+'?');
        $('#like-input').val('Everything!');
      }
      console.log('Email ',email);
    } else{
      $('.field-email').css('animation','shake 0.5s ease');
      console.log('Wrong Email type')
    }
  });


  // Like, interests
  $('.fa-arrow-circle-down.like').click(function() {

    like = $('.fa-arrow-circle-down.like').prev().val()
      $('.field-like').addClass('inactive');
      $('.field-like').removeClass('active');
      $('.field-message').addClass('active');
      $('.field-message').removeClass('inactive');
      if (url == 3) {
        $('#prompt').text('Cuối cùng, '+name+' có muốn gửi mình một lời nhắn không?');
        $('#message-input').val('Đi ăn chè với '+name+' nha Calum ơi!');
      } else {
        $('#prompt').text('Lastly, would you like to send me a message, '+name+'?');
        $('#message-input').val("Let's grab coffee, Calum! - "+name);
      }
      console.log('Like ',like);

  });

  // Message
  $('.fa-arrow-circle-down.message').click(function() {
    message = $('.fa-arrow-circle-down.message').prev().val()
        console.log('message ',message);
  });

};


function validateUser(input) {
  const validation = /^[a-zA-Z ]{2,30}$/;
  if (validation.test(input)) {
    error('#ff2e63');
    return true;
  } else {
    error('#252a34');
  }
}

function validateEmail(email) {
  const validation = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  if (validation.test(email)) {
    error('#ff2e63');
    return true;
  } else {
    error('#252a34');
  }
}

// Return keypress = button clicks

$('.doNotPost').keydown(function(event){
  if (event.keyCode == 13){
      event.preventDefault();
      var target = event.target;
      $(target).next().trigger('click');
      $(target).parent().next().children().focus();
      return false;
  }
})

function error(color) {
  $('.colored-section').css('background-color', color);
}

animatedForm();
