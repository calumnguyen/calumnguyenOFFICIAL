//Set Up Express and Body Parser

const express = require('express');
const bodyParser = require('body-parser');

//Set a static folder for CSS and Images
const app = express();
app.use(express.static('public'));

app.set('view engine', 'ejs');

//When the user clicks on the homepage, redirect to index.html

  let eng = {
    language: "English ",
    about: "About",
    connect: "Connect",
    portfolio: "Portfolio",
    hello: "I'm ",
    helloTwo: " It's my pleasure to see you today!",
    intro: "Please let me introduce myself",
    introTwo: "In a rush? Here's my resume!"
  };

  let vnm = {
    language: "Tiếng Việt ",
    about: "Giới Thiệu",
    connect: "Kết Nối",
    portfolio: "Portfolio",
    hello: "Mình là ",
    helloTwo: " Rất vui khi được bạn đến thăm!",
    intro: "Cho mình được tự giới thiệu về bản thân",
    introTwo: "Đang vội? Đọc sơ qua Resume!"
  };

app.get('/vnm', function(req, res){
  res.render('index', {language:vnm.language, about:vnm.about, connect:vnm.connect, portfolio:vnm.portfolio, hello:vnm.hello, helloTwo:vnm.helloTwo, intro:vnm.intro, introTwo:vnm.introTwo});
})

app.get('/', function(req, res){
  res.render('index', {language:eng.language, about:eng.about, connect:eng.connect, portfolio:eng.portfolio, hello:eng.hello, helloTwo:eng.helloTwo, intro:eng.intro, introTwo:eng.introTwo});
})

app.get('/vnm-hello', function(req, res){
  res.render('introduction', {language:vnm.language, about:vnm.about, connect:vnm.connect, portfolio:vnm.portfolio});
})

app.get('/hello', function(req, res){
  res.render('introduction', {language:eng.language, about:eng.about, connect:eng.connect, portfolio:eng.portfolio});
})




//Confirmation for 'node index.js' or 'nodemon'
app.listen(process.env.PORT || 3000, function(){
console.log('Port is running...');
})
