const express = require('express');
const fs = require('fs');
const http2 = require('http2');
const path = require('path')
const spdy = require('spdy')
const _crypto = require('crypto')

const port = 8443


const app = express();


const options = {
    key: fs.readFileSync(__dirname + '/server.key'),
    cert: fs.readFileSync(__dirname + '/server.crt')
}


var spdyh2 = spdy.createServer(options, app).listen(port, (error) => {
    if (error) {
      console.error(error)
      return process.exit(1)
    } else {
      console.log('Listening on port: ' + port + '.')
    }
  })

app.get('/restconf/data/smo-equipment:physicalEquipment', function (req, res) {
   fs.readFile( __dirname + "/" + "smo-equipment-physicalEquipment.json", 'utf8', function (err, data) {
      console.log( data );
      res.end( data );
   });
})

app.get('/system/startupTime', function (req, res) {
   fs.readFile( __dirname + "/" + "startupTime.json", 'utf8', function (err, data) {
      console.log( data );
      res.end( data );
   });
})

app.get('*', (req, res) => {
    res.status(200).json({'server status': 'OK'})
})


/*
const serverh2 = http2.createSecureServer({
  key: fs.readFileSync(__dirname + '/cert/localhost-privkey.pem'),
  cert: fs.readFileSync(__dirname + '/cert/localhost-cert.pem'),
  secureOptions: 'TLSv1_2_method'
}, onRequest);

serverh2.listen(8443);

var serverh2 = app.listen(8443, function () {
   var host = server.address().address
   var port = server.address().port
   console.log("Example app listening at http://%s:%s", host, port)
})
*/