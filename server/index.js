const dotenv = require('dotenv');
var path = require('path');
const aylien = require("aylien_textapi");
const express = require('express');
const mockAPIResponse = require('./mockAPI.js');
const bodyParser = require('body-parser');

dotenv.config();
// set aylien API credentias
const textapi = new aylien({
    application_id: process.env.API_ID,
    application_key: process.env.API_KEY,
  });
console.log("envAPI_kEY = " + process.env.API_KEY);


//Set up instance of an app
const app = express();
app.use(express.static('dist'));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

console.log(__dirname); 
app.get('/', function (req, res) {
    res.sendFile(path.resolve('src/client/views/index.html'))
});

// designates what port the app will listen to for incoming requests
const server = app.listen(8080, ()=>{console.log(`running on localhost: 8080`)});
//Post route
app.post('/analysis', addData);
    
const addData = (req, res)=>{
  
    
    textapi.sentiment({
        url: req.body.url,
        mode: 'article' 
        }, (error, response)=> {
        if (error === null) {
            // console.log(response);
            res.send(response);
        } else{console.log('hahahahahaa!')}}
    );
        
}
/* // just for test only
textapi.sentiment({
    url: 'https://www.imdb.com/title/tt7286456/',
    mode: 'article' 
    }, (error, response)=> {
    if (error === null) {
        console.log(response);
    } else{console.log('hahahahahaa!')}}
);*/
