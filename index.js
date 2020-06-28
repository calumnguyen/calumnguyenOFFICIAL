//Set Up Express and Body Parser

const express = require('express');
const bodyParser = require('body-parser');

//Set a static folder for CSS and Images
const app = express();
app.use(express.static('public'));

//When the user clicks on the homepage, redirect to index.html
app.get('/', function(req, res){
res.sendFile(__dirname+'/index.html');
})

//Confirmation for 'node index.js' or 'nodemon'
app.listen(process.env.PORT || 3000, function(){
console.log('Port is running...');
})
