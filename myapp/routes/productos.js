var express = require('express');
var router = express.Router(); 
const productController = require('../controllers/productController')


/* GET detalle del producto */
//router.get('/detalle/:id', productController.detalle);

/* GET agregar producto */
//router.get('/agregar', productController.agregar); // router: Variable que guarda la ejecución del método router que nos proporciona Express. Escribimos el método HTTP que queremos atender: get, post, put, patch ó delete.

// /* GET resultados de busqueda */
router.get('/busqueda/:q?', productController.busqueda); // rutas parametrizadas: Usando la misma estructura básica para definir una ruta aclaramos en el path cuál es el parámetro que va a ir variando haciendo uso de los dos puntos seguido del nombre que represente al dato que estará llegando en la url.

module.exports = router;
