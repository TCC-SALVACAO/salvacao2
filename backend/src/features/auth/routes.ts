export {};

const controllers = require('./controllers');

module.exports = router => {
    router.post('/login', controllers.auth)
}