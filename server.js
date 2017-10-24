// server.js

// BASE SETUP
// =============================================================================

// call the packages we need
var express    = require('express');        // call express
var app        = express();                 // define our app using express
var bodyParser = require('body-parser');

// configure app to use bodyParser()
// this will let us get the data from a POST
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

var port = process.env.PORT || 8080;        // set our port

// ROUTES FOR OUR API
// =============================================================================
var router = express.Router();              // get an instance of the express Router

router.post('/', function(req, res){
  name = req.body.name;
  console.log("Handling API Call");
  var spawn = require("child_process").spawn;
  var process = spawn('python',["/home/god/node/script.py", JSON.stringify(req.body)]);
  res.json({ message: name });   
});

// more routes for our API will happen here

// REGISTER OUR ROUTES -------------------------------
// all of our routes will be prefixed with /api
app.use('/rpi_led', router);

// START THE SERVER
// =============================================================================
app.listen(port, '192.168.1.3');
console.log('Launching LED Handler on port: ' + port);
