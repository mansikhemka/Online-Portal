/**
 * Created by mansikhemka on 1/24/17.
 */


const express = require('express');
const app = express();
const path = require('path');
const bodyparser = require('body-parser');

const ID = require('./route/ID');
const home = require('./route/home')

app.use(bodyparser.urlencoded({extended:true}));
app.use(bodyparser.json());

app.set('views', path.join(__dirname,'views'));
app.set('view engine', 'hbs');

app.use('/', express.static(path.join(__dirname, '/public')));

app.use('/home', home);

var k;
var y=0;

app.post('/isuserthere',(req, res)=>{
    ID.showing((result)=>{
        console.log(result);

        for(var i=0;i<result.length;i++){
            if(result[i].name==req.body.name && result[i].password==req.body.pass){
                y=1;
                k=req.body.sno;
                break;
            }
        }
    })
        if(y==1) {
            // home.disp(k,(results)=>{
            //     console.log(results+" yo");
            // // res.render('home',{question: results});
            // })
            home.disp(k);
        }
        else
            res.send("Please Sign Up First!");


})

app.post('/setuser',(req,res)=>{
    ID.getLID(req.body.name, req.body.pass, req.body.email, (result)=>{
        res.send(result);
    })
})


// app.get('/quesfetch',(req, res)=>{
//     console.log(k);
//     questions.display(k,(result)=>{
//         res.send(result);
//     })
// })

app.listen(3333,()=>{
    console.log("http://localhost:3333");
})