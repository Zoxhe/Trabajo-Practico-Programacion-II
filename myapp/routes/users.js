var express = require('express');
var router = express.Router(); //Al almacenar la ejecución de esa función express() en una constante tendremos acceso a todas las funcionalidades que nos da el objeto. Dentro de express encontramos funcionalidades completamente listas para usar. Todas ellas conviven entre sí creando juntas lo que llamamos el ecosistema express.
const userController = require('../controllers/userController')

/* GET users listing. */
router.get('/login', userController.login);
router.get('/profile-edit', userController.profileEdit);
router.get('/profile', userController.profile);
router.get('/register', userController.register);



module.exports = router;
