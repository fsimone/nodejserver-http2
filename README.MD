*******************************************************************************
https://webapplog.com/http2-node/
*******************************************************************************
1- GENERATE CERT:

 openssl genrsa -des3 -passout pass:x -out server.pass.key 2048
 
 openssl rsa -passin pass:x -in server.pass.key -out server.key
 
 openssl req -new -key server.key -out server.csr
 
 openssl x509 -req -sha256 -days 365 -in server.csr -signkey server.key -out server.crt
 
*******************************************************************************

2- DOWNLOAD SPDY AND EXPRESS

 npm init
 
 npm i express spdy --save
 
 
 node server.js
