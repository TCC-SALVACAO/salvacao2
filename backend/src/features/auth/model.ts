const conexaoLogin = require('../../database/connection');

async function authUser(email, senha){
    const conn = await conexaoLogin.connect();
    const sql = 'SELECT * FROM usuarios WHERE email = ? and senha = ?;'
    const values = [email, senha];
    const [rows] = await conn.query(sql, values);
    return rows;
}

module.exports = {authUser};