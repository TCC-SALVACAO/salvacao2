const Boom = require('boom');
const model = require('./model');

module.exports = {
    auth: async ctx => {
        
        const { request: {body}, response } = ctx

        const email = body.email;
        const senha = body.senha;

        
        const [users] = await model.authUser(email, senha);
        
        if(users){
            response.body = {
                email: users.email,
                nome: users.nome,
                id: users.id
            }
        }else{
            response.status = 401
            response.body = {result: Boom.unauthorized()}
        }
    }
}