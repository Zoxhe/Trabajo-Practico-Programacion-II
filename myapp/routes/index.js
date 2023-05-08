//  /routes estaremos administrando el sistema de ruteo de la aplicación. Encontramos los archivos index.js y users.js	 (en este caso tmb products.js)
// En la carpeta routes guardaremos, por cada recurso, un archivo js que administre los request (pedidos) a las rutas que tengan que ver con ese recurso.
// Para empezar a definir el sistema de ruteo de cada recurso hace falta situarse dentro del archivo js del recurso, requerir el módulo express y guardar la ejecución del método que nos provee Express en una variable nueva.
var express = require('express');
var router = express.Router(); //Este método nos va a permitir modularizar por completo todo el sistema de ruteo de una manera sencilla.
const productController = require('../controllers/productController') // para poder utilizar los metodos que nosotros ubicamos en controladores, vamos a requerir el modulo dentro de los archivos de ruteo

/* GET home page. */
router.get('/', productController.index); //Para terminar de configurar la ruta, en el ruteador pasamos como segundo parámetro al método correspondiente usando la notación de punto de los objetos literales.
// Definimos las rutas que consideremos necesarias para manejar distintos tipos de request.
module.exports = router;

//Cada archivo js será un módulo que vamos a exportar para luego requerir dentro del entry point de la aplicación: app.js