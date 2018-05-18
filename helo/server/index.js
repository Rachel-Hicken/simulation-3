const express = require('express'),
      bodyParser = require('body-parser'),
      massive = require('massive');
require('dotenv').config();

const{
    SERVER_PORT,
    CONNECTION_STRING
}= process.env

const app = express()

massive(CONNECTION_STRING).then((db)=>{
    console.log('connected to db');
    app.set('db',db);
})

app.use(bodyParser.json());



app.listen(SERVER_PORT, ()=>{
    console.log(`Server is listening to port ${SERVER_PORT}`)
})