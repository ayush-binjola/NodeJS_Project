const register = require('./module/authentication/register')
const bodyParser = require('body-parser')
var jsonParser = bodyParser.json();
const urlencodedParser = bodyParser.urlencoded({ extended: false })

const express = require('express');

const app = express();
app.set('view engine', 'ejs');
app.get('/', function(req, res) {
    res.render('index');
})
app.get('/register', function(req, res) {
    res.render('register')
})
app.post('/register', urlencodedParser, register)

app.listen(4000)