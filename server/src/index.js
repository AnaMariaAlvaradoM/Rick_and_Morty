const express = require('express');
const server = express();
const router = require('./routes/index');
const morgan = require('morgan')
const PORT = 3001;


server.use(express.json());
server.use(morgan('dev'));

server.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Credentials', 'true');
    res.header(
       'Access-Control-Allow-Headers',
       'Origin, X-Requested-With, Content-Type, Accept'
    );
    res.header(
       'Access-Control-Allow-Methods',
       'GET, POST, OPTIONS, PUT, DELETE'
    );
    next();
 });

 server.use('/rickandmorty', router);

server.listen(PORT, () => {
   console.log(`Server raised in port: ${PORT}`);
}); 





// const http = require("http");

// const {getCharById} = require("./controllers/getCharById.js")
// const PORT = 3001;

// http
// .createServer((req, res) =>{
//     res.setHeader('Access-Control-Allow-Origin', '*');
//     if( req.url.includes("/rickandmorty/character")){
//         const id = req.url.split("/").at(-1); //string

//         getCharById(res, +id)
//     }
// })
// .listen(PORT)

// //! TAREA WEB SERVER

// const http = require("http");
// const data = require('./utils/data');
// const characters = require("./utils/data.js");
// const getCharacterbyId = require("./controllers/getCharById.js")
// const PORT = 3001;

// http.createServer((req, res) =>{

//     res.setHeader('Access-Control-Allow-Origin', '*');

//     if( req.url.includes("/rickandmorty/character")){
//         const id = req.url.split("/").at(-1); //string
//         const character = characters.find((character) => 
//         character.id === +id)

//         // const id = req.url.split("/").pop(); //string
//         // const character = characters.filter( char => char.id === Number(id)[0]);
//         return res
//         .writeHead(200, { "Content-Type": "application/json"})
//         .end(JSON.stringify(character));
//     }
// }).listen(PORT);