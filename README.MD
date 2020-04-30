*******************************************************************************
https://webapplog.com/http2-node/
*******************************************************************************
1- GENERATE CERT:

 openssl genrsa -des3 -passout pass:x -out server.pass.key 2048
 
 openssl rsa -passin pass:x -in server.pass.key -out server.key
 
 openssl req -new -key server.key -out server.csr
 
 openssl x509 -req -sha256 -days 365 -in server.csr -signkey server.key -out server.crt
 
*******************************************************************************
You are about to be asked to enter information that will be incorporated
into your certificate request.
What you are about to enter is what is called a Distinguished Name or a DN.
There are quite a few fields but you can leave some blank
For some fields there will be a default value,
If you enter '.', the field will be left blank.
-----
Country Name (2 letter code) [AU]:IT
State or Province Name (full name) [Some-State]:ITALY
Locality Name (eg, city) []:BARI
Organization Name (eg, company) [Internet Widgits Pty Ltd]:Manpower
Organizational Unit Name (eg, section) []:Experis
Common Name (e.g. server FQDN or YOUR name) []:TestCertNodeJS - HTTP2 CA
Email Address []:francesco.simone@email.it

Please enter the following 'extra' attributes
to be sent with your certificate request
A challenge password []:
An optional company name []:

*******************************************************************************
Signature ok
subject=/C=IT/ST=ITALY/L=BARI/O=Manpower/OU=Experis/CN=TestCertNodeJS - HTTP2 CA/emailAddress=francesco.simone@email.it
Getting Private key

*******************************************************************************

2- DOWNLOAD SPDY AND EXPRESS

 npm init
 
 npm i express spdy --save
 
 
 node server.js
