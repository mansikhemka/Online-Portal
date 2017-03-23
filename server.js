/**
 * Created by mansikhemka on 1/24/17.
 */


const express = require('express');

const app = express();

const path = require('path');

const bodyparser = require('body-parser');

const ID = require('./route/ID');

// const questions = require('./route/questions');

app.use(bodyparser.urlencoded({extended:true}));

app.use(bodyparser.json());

app.use('/', express.static(path.join(__dirname, 'public')));

app.use('/', piku);

var k;

app.get('/isuserthere',(req, res)=>{
    ID.showing((result)=>{
        console.log(result);
        res.send(result);
    })
})

// app.post('/setuser',(req,res)=>{
//     ID.getLID(req.body.name, req.body.pass,(result)=>{
//         console.log(result);
//         k=result;
//         res.send(result);
//     })
// })
//
//
// app.get('/quesfetch',(req, res)=>{
//     questions.display(k,(result)=>{
//         res.send(result);
//     })
// })

app.listen(3333,()=>{
    console.log("http://localhost:3333");
})