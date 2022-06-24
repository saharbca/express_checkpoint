var express = require('express');
var app = express();


app.use(express.json());

app.get('/contact', (req, res) => {
  res.sendFile(__dirname + '/views/contact.html')
})
app.get('/', (req, res) => {
  res.sendFile(__dirname + '/views/home.html')
})
app.get('/services', (req, res) => {
  res.sendFile(__dirname + '/views/services.html')
})

app.use(express.static(__dirname + '/public'));

const getDate = (req, res, next) => {
  const day = new Date().getDay() 
    const hour = new Date().getHours() 
  
    if (hour > 17 || hour < 8 || day === 6 || day ===0 ) {
      res.send("<div><p> We work only from Monday to Friday, from 9 to 17</p></div>");
    } else {
      next();
    }
   }

app.use(getDate);

app.listen(3000,()=>console.log('listening on port 3000'))


module.exports = app;
