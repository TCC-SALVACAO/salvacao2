export {};

const controllers = require('./controllers');

module.exports = router => {
    router.post('/pets', controllers.insertAnimal);
    router.get('/pets/list', controllers.getAnimais);
}