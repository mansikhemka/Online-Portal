/**
 * Created by mansikhemka on 2/13/17.
 */


const mysql = require('mysql');


var getConnection = ()=>{
    var connection = mysql.createConnection({
        host: 'localhost',
        user: 'root',
        password: '28041997',
        database: 'question'
    });
    connection.connect();
    return connection;
};

module.exports={
    showing:(cb)=>{
        connection.query('SELECT * FROM users',(err, result,fields)=>{
            if(err) throw err;
            cb(result);
        })
    }
}