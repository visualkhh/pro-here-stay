const express = require("express");
const app = express();
app.use(express.static('public'));
app.engine('html', require('ejs').renderFile);
app.set('view engine', 'ejs');
const port = process.env.PORT;
 
var expressWs = require('express-ws')(app);
app.ws('/echo', function(ws, req) {
    ws.on('message', function(msg) {
      ws.send(msg);
    });
  });

var o = {} // empty Object
var key = 'reponse';
o[key] = []; // empty Array, which you can push() values into
 
 
var data = {
    name: 'jason',
    age: '33'
};
var data2 = {
    name: 'mike',
    data: '34'
};
o[key].push(data);
o[key].push(data2);
 
var result = JSON.stringify(o);
 
// app.get("/", (req, res) => {
// res.send(result);
// });
app.listen(port||80);
