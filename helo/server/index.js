const express = require('express'),
      bodyParser = require('body-parser'),
      massive = require('massive');
require('dotenv').config();

const controller = require('./controller');

const{
    SERVER_PORT,
    CONNECTION_STRING
}= process.env

const app = express()
app.use(bodyParser.json());

massive(CONNECTION_STRING).then((db)=>{
    console.log('connected to db');
    app.set('db',db);
})

app.post('/', controller.create);
app.get('/auth/:id', controller.readUser);



app.listen(SERVER_PORT, ()=>{
    console.log(`Server is listening to port ${SERVER_PORT}`)
})