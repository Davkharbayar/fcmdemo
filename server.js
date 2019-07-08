const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
var path = require('path');

const app = express();
const port = 4000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static('public'));
app.use(cors());

app.options("*",function(req,res,next){
    res.header("Access-Control-Allow-Origin", req.get("Origin")||"*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,PATCH,OPTIONS');
      res.status(200).end();
  });


  app.get('/', function(req, res) {
    res.sendFile(path.join(__dirname + '/public/index.html'));
});
    // Start the server
  app.listen(port, () => {
    console.log('We are live on ' + port);
})

