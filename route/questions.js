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


module.exports= {
    display: (lid, cb) => {
        var connection = getConnection();

        let query1 = 'UPDATE questions SET color="black "';
        let query2 = 'UPDATE questions SET color="green" WHERE QID=(SELECT QID FROM Attempted WHERE LID="'+lid +'" AND CI="1")';
        let query3 = 'UPDATE questions SET color="red" WHERE QID=(SELECT QID FROM Attempted WHERE LID="'+lid +'"  AND CI="0")';
        let query4 = 'SELECT * FROM questions';


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
            cb(result);
        })
        connection.end();
    }
<<<<<<< HEAD

}
=======
}
>>>>>>> 6f9ac32de0690c34ea5112ab7d203947a8ac32ac
