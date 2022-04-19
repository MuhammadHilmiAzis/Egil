const express   = require('express')
  const routes      = require('./api/routes')
  const user        = require('./api/routes/user')


const app       = express()
const mysql     = require('mysql')
const port      = 3000

let bodyParser  =require("body-parser");

let dbconnect = mysql.createConnection({
    host     : 'localhost',
    user     : 'root',
    password : '',
    database : 'db-egil'
  });

  dbconnect.connect();

global.db = dbconnect;
 

// Static Files
app.use(express.static('public'))
app.use('/css', express.static(__dirname + 'public/css'))
app.use('/js', express.static(__dirname + 'public/js'))
app.use('/img', express.static(__dirname + 'public/img'))

// all environments
app.set('views','./views')
app.set('view engine', 'ejs')
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(express.static('public'))


// Request Method


app.get('/',routes.index)



// Listen Port
app.listen(port, () =>
    console.info(`Listening on port ${port}`)
)