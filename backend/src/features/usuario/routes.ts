export{};

const controllers = require("./controllers")

module.exports = router => {
    router.post('/create/user', controllers.create)
}