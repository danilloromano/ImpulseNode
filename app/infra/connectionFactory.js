 var mysql = require('mysql');
 
  function createdbConnection(){
       return mysql.createConnection({
            host: "localhost",
            user: "root",
            password : "dfromano",
            database: "impulse_node"
        });
    }

    module.exports = function(){
    	return createdbConnection;
    }