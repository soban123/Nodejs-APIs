var express = require('express');
var router = express.Router();

var http = require('http').createServer(express);
var io = require('socket.io')(http);
/* GET home page. */
router.get('/', function(req, res, next) {
 
  res.sendFile(__dirname + '/index.html');
});


io.on('connection', function(socket){
  console.log('a user connected');
});




module.exports = router;
