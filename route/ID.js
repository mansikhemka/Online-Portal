/**
 * Created by mansikhemka on 2/13/17.
 */


const mysql = require('mysql');


var getConnection = ()=>{
    var connection = mysql.createConnection({
        host: 'localhost',
        user: 'username',
        password: 'password',
        database: 'question'
    });
    connection.connect();
    return connection;
};

module.exports={
    showing:(cb)=>{

        var connection = getConnection();
        let queryS = 'select * from users;';

        connection.query(queryS, (err, result, fields)=>{
            if(err) throw err;
            //
            cb(result);
            console.log(result[0]);
        })
        connection.end();

    },

    getLID: (a,b,c,cb)=>{
         var connection = getConnection();
         let queryS = 'insert into users (name, password, email)values("'+a+'","'+b+'","'+c+'")';

         connection.query(queryS, (err, result, fields)=>{
             if(err) throw err;

             cb(result);
             console.log(result[0]);
         })
        connection.end();
    }
<<<<<<< HEAD

}
=======
}
>>>>>>> 6f9ac32de0690c34ea5112ab7d203947a8ac32ac
