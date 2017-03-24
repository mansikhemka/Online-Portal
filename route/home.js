/**
 * Created by mansikhemka on 3/23/17.
 */


const express = require('express');
const  router = express.Router();
const mysql = require('mysql');

var getConnection = ()=>{
    var connection = mysql.createConnection({
        host     : 'localhost',
        user : 'root',
        password : '28041997',
        database : 'question'
    });
    connection.connect();
    return connection;
}

var sno;


   disp = (a)=>{
        sno = a;
        const question = [];

        let query1 = 'UPDATE questions SET color="black "';
        let query2 = 'UPDATE questions SET color="green" WHERE QID=(SELECT QID FROM attempted WHERE LID="'+sno +'" AND CI="1")';
        let query3 = 'UPDATE questions SET color="red" WHERE QID=(SELECT QID FROM attempted WHERE LID="'+sno +'"  AND CI="0")';
        let query4 = 'SELECT * FROM questions';


        var connection = getConnection();

        connection.query(query1, (err, result, fields) => {
            if (err) throw err;
        })
        connection.query(query2, (err, result, fields) => {
            if (err) throw err;
        })
        connection.query(query3, (err, result, fields) => {
            if (err) throw err;
        })
        connection.query(query4, (err, result, fields) => {
            if (err) throw err;
            for(var i=0;i<result.length;i++){
                question.push({QID: result[0].qid, qname:result[0].qname,ans:result[0].ans,color:result[0].color,rate:result[0].rate});
            }
        })
       router.get('/',(req, res)=>{
           res.render('home',{question:question});
       })

       module.exports = router;

       connection.end();
    }






