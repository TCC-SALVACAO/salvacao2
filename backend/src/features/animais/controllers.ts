const animalModel = require('./model');

module.exports = {

    insertAnimal: async ctx => {
        const { request: {body}, response } = ctx
        
        const latitude = body.latitude;
        const longitude = body.longitude;
        const titulo = body.titulo;
        const descricao = body.descricao;
        const foto = body.image;   

        const animal = await animalModel.insertAnimal(latitude, longitude, titulo, descricao,foto);
        //const animal = await animalModel.insertAnimal(latitude, longitude, titulo, descricao,foto);
        if(animal){
            response.body={
               mensagem: "Deu certo"
            }
        }else{
           console.log("ainda não")
        }
    },

    getAnimais: async ctx => {
        const {request: {body}, response} = ctx

        const animais = await animalModel.getAnimais();
        if(animais){
            response.body = animais
        }
    }
}