async function connect(){

    if(globalThis.connection && globalThis.connection.state !== 'disconnected'){
        return globalThis.connection;
    }
    const mysql = require("mysql2/promise");
    const connection = await mysql.createConnection({
        host:'localhost',
        user:'root',
        password:'oct1589&',
        database:'salvacao'
    });
    console.log("Conectou no MySQL!");
    globalThis.connection = connection;
    return connection;
}

connect();

module.exports = {connect}