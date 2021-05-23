export {};
const model = require('./model');

module.exports = {
    create: async ctx =>{
        const { request: {body}, response } = ctx

        const nome = body.nome;
        const email = body.email;
        const senha = body.senha;

        
        const user = await model.createUser(nome, email, senha);
        
        if(user){
            response.body = {
                mensagem: "Usuário Cadastrado"
            }
            console.log('Usuário Cadastrado')
        }else{
            console.log('deu ruim')
        }
    }
}