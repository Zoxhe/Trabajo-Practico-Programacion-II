var express = require('express');
var router = express.Router(); //Al almacenar la ejecución de esa función express() en una constante tendremos acceso a todas las funcionalidades que nos da el objeto. Dentro de express encontramos funcionalidades completamente listas para usar. Todas ellas conviven entre sí creando juntas lo que llamamos el ecosistema express.

const multer = require('multer');
const path = require('path');

const storage = multer.diskStorage({
    destination: function (req, file, cb) { //cb es callback
        return cb(null, 'public/images/users')
    },
    filename: function (req, file, cb) {
        return cb(null, file.fieldname + '-' + Date.now() + ".png")
    }
})

const upload = multer({ storage: storage })

const userController = require('../controllers/userController')

/* GET users listing. */
router.get('/login', userController.login);
router.get('/profile-edit', userController.profileEdit);
router.get('/detalle/:id', userController.profile);
router.get('/register', userController.register);
router.get('/busqueda/:qP?', userController.busqueda);

/* POST users listing. */
router.post('/login', userController.loginPost);
router.post('/register',  upload.single('imagenDePerfil'), userController.proceso_registro);
// AGREGAR RUTA LOGOUT
router.post('/logout', userController.logout);


module.exports = router;
