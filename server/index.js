const dotenv = require('dotenv');
dotenv.config();

var path = require('path');
const aylien = require("aylien_textapi");
// set aylien API credentias
const textapi = new aylien({
    application_id: process.env.API_ID,
    application_key: process.env.API_KEY,
    // application_id: '2b81f139',
    // application_key: '66ad381628d44ff00ac2f5d53e4269ef',
  });
  console.log("envAPI_kEY = " + process.env.API_KEY);

const express = require('express');
const mockAPIResponse = require('./mockAPI.js');
//Set up instance of an app
const app = express();
app.use(express.static('dist'));
// console.log(__dirname); // to print directory name

// i do not Know why using that in course
app.get('/', function (req, res) {
    // res.sendFile('dist/index.html')
    res.sendFile(path.resolve('src/client/views/index.html'))
});

// designates what port the app will listen to for incoming requests
app.listen(8080, function () {
    console.log('Port 8080 is running...')
});

//Post route
// app.post('/analysis', addData);
    
const addData = (req, res)=>{
  
    
    textapi.sentiment({
        url: req.body.url,
        mode: 'article' 
        }, (error, response)=> {
        if (error === null) {
            console.log(response);
            res.send(nlpData);
        } else{console.log('hahahahahaa!')}}
    );
        
}