'use strict';

const express = require('express');

const server = express();

const PORT = process.env.PORT || 3000;

server.listen(PORT, () =>{
  console.log('listening on port',PORT);
});

server.use(express.static('./public'))

// http://localhost:3000/test
server.get('/test',(request,response)=>{
  response.send('You are doing great');
});

// http://localhost:3000/data
server.get('/data', (request, response) => {
  let family = [
    {name:"atallah"},
    {name:"Messina"},
    {name:"Razan"}
  ];
  response.json(family);
});