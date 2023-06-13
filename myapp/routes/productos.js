var express = require('express');
var router = express.Router(); 
const productController = require('../controllers/productController');



/* GET detalle del producto */
router.get('/detalle/:id', productController.detalle);

/* GET Mostrar forms para agregar producto */
router.get('/agregar', productController.mostrarFormAgregar);

/* POST agregar producto */
router.post('/agregar', productController.agregar);

// /* GET resultados de busqueda */
router.get('/busqueda/:q?', productController.busqueda); // rutas parametrizadas: Usando la misma estructura básica para definir una ruta aclaramos en el path cuál es el parámetro que va a ir variando haciendo uso de los dos puntos seguido del nombre que represente al dato que estará llegando en la url.

module.exports = router;
