const authRoutes = require('../features/auth/routes');
const userRoutes = require('../features/usuario/routes');
const animalRoutes = require('../features/animais/routes');

module.exports = router =>{
    authRoutes(router)
    userRoutes(router)
    animalRoutes(router)
}