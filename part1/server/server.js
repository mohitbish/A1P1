const express = require('express'),
app = express();

fs = require('fs'),
http = require('http'),
PORT = 3000,
PORT2 = 8888;




// Cross origin resource sharing to cater for port 4200 to port 3000

const cors = require('cors');

app.use(cors());

//Enable CORS for all HTTP methods

app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Methods", "GET, PUT, POST, post, DELETE, OPTIONS");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});


const bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({
    extended: true
}));


app.use(bodyParser.json());


const httpServer = http.Server(app);


const https = require('https'),
httpsServer = https.createServer(app);
httpServer.listen(PORT, function() {
    console.log(`http Server listening on port: ${PORT}`);
});

httpsServer.listen(PORT2, () => {
    console.log(`Starting htttps server at: ${PORT2}`);
});

app.post('/login', require('./routes/postlogin'));
app.post('/loginafter', require('./routes/postloginafter'));
app.post('/superadmin', require('./routes/postsuperadminadd'));
app.post('/superadminafter', require('./routes/postsuperadmindelete'));