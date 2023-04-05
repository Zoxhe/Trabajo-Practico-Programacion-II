var express = require('express');
var router = express.Router();
const productController = require('../controllers/productController')

/* GET home page. */
router.get('/', productController.index);

/* GET detalle del producto */
router.get('/detalle/:id', productController.detalle);

/* GET agregar producto */
// router.get('/agregar', productController.agregar);

// /* GET resultados de busqueda */
// router.get('/busqueda/:q?', productController.busqueda);


module.exports = router;
