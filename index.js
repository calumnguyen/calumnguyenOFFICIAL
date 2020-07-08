//Set Up Express and Body Parser

const express = require('express');
const bodyParser = require('body-parser');

//Set a static folder for CSS and Images
const app = express();
app.use(express.static('public'));

app.set('view engine', 'ejs');

app.use(bodyParser.urlencoded({
  extended: true
}))

// EJS objects to pass language-specific contents and render *.ejs files

  let eng = {
    language: "English ",
    about: "About",
    connect: "Connect",
    portfolio: "Portfolio",
    hello: "I'm ",
    helloTwo: " It's my pleasure to see you today!",
    // intro: "Please let me introduce myself",
    intro: "Let's abolish ICE ",
    introTwo: "In a rush? Here's my resume!",
    git: "Find this website on my GitHub repositry!",
    last: "What is your last name?"
  };

  let vnm = {
    language: "Tiếng Việt ",
    about: "Giới Thiệu",
    connect: "Kết Nối",
    portfolio: "Hồ Sơ Năng Lực",
    hello: "Mình là ",
    helloTwo: " Rất vui khi được bạn đến thăm!",
    intro: "Cho mình được tự giới thiệu về bản thân",
    introTwo: "Nếu bạn đang vội, xem qua bản tóm tắt ở đây nhé!",
    git: "Xem tập tin xây dựng trang web này trong kho GitHub của mình nhé!",
    last: "Họ của bạn là gì?"
  };

//Page Routes
  //Reroute users to homepage in Vietnamese, redirect to index.ejs with EJS content from vnm object
app.get('/vnm', function(req, res){
  res.render('index', {language:vnm.language, about:vnm.about, connect:vnm.connect, portfolio:vnm.portfolio, hello:vnm.hello, helloTwo:vnm.helloTwo, intro:vnm.intro, introTwo:vnm.introTwo, git:vnm.git});
})

//Reroute users to homepage in English, redirect to index.ejs with EJS content from eng object
app.get('/', function(req, res){
  res.render('index', {language:eng.language, about:eng.about, connect:eng.connect, portfolio:eng.portfolio, hello:eng.hello, helloTwo:eng.helloTwo, intro:eng.intro, introTwo:eng.introTwo, git:eng.git});
})

//Reroute users to Introduction in Vietnamese, redirect to introduction.ejs with EJS content from vnm object
app.get('/vnm/hello', function(req, res){
  res.render('introduction', {language:vnm.language, about:vnm.about, connect:vnm.connect, portfolio:vnm.portfolio, git:vnm.git});
})

//Reroute users to Introduction in English, redirect to introduction.ejs with EJS content from eng object
app.get('/hello', function(req, res){
  res.render('introduction', {language:eng.language, about:eng.about, connect:eng.connect, portfolio:eng.portfolio, git:eng.git});
})

//Reroute users to Connect in Vietnamese, redirect to connect.ejs with EJS content from vnm object
app.get('/vnm/connect', function(req, res){
  res.render('connect', {language:vnm.language, about:vnm.about, connect:vnm.connect, portfolio:vnm.portfolio, git:vnm.git, last:vnm.last});
})

//Reroute users to Connect in English, redirect to connect.ejs with EJS content from eng object
app.get('/connect', function(req, res){
  res.render('connect', {language:eng.language, about:eng.about, connect:eng.connect, portfolio:eng.portfolio, git:eng.git, last:eng.last});
})

//Reroute users to Portfolio in Vietnamese, redirect to portfolio.ejs with EJS content from vnm object
app.get('/vnm/portfolio', function(req, res){
  res.render('portfolio', {language:vnm.language, about:vnm.about, connect:vnm.connect, portfolio:vnm.portfolio, git:vnm.git});
})

//Reroute users to Portolio in English, redirect to portfolio.ejs with EJS content from eng object
app.get('/portfolio', function(req, res){
  res.render('portfolio', {language:eng.language, about:eng.about, connect:eng.connect, portfolio:eng.portfolio, git:eng.git});
})

//Contact Form
const request = require('request');
const https = require('https');

app.post('/connect', function(req, res) {
  const firstName = req.body.fName;
  const lastName = req.body.lName;
  const email = req.body.email;
  const like = req.body.like;
  const message = req.body.message;

  var data = {
    members: [{
      email_address: email,
      status: "subscribed",
      merge_fields: {
        FNAME: firstName,
        LNAME: lastName,
        LIKES: like,
        MSSGS: message
      }
    }]
  };

  const jsonData = JSON.stringify(data);

  const options = {
      url: "https://us10.api.mailchimp.com/3.0/lists/a461eb083b",
      method: "POST",
      headers: {
        "Authorization": "apikey f41465faf8073b75aafa5a822e3a4138-us10"
      },
      body: jsonData,

    };

    request(options, (err, response, body) => {
      if (err) {
        console.log('Fail')
        // res.sendFile(__dirname + "/failure.html")
      }
      if (response.statusCode === 200) {
        console.log("Succesfully submiting subscription")
        // res.sendFile(__dirname + "/success.html")
      } else {
        console.log("Error submiting subscription")
        console.log(response.statusCode)
        console.log(response)

        // res.sendFile(__dirname + "/failure.html")
      }

    })
  })

//Confirmation for 'node index.js' or 'nodemon'
app.listen(process.env.PORT || 3000, function(){
console.log('Port is running...');
})
