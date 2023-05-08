
const productos = require('../data/datos');  //aca basicamente estamos llamando a los modulos que vamos a utilizar o necesitar 


const productController = { //varaibel co un objeto literal que contendra un metodo para cada request
    index: function(req, res) {
        res.render('index', {autos : productos.productos})
    },
    detalle: function(req, res) {
        let id = req.params.id //Haciendo uso de la propiedad params del objeto literal  request podemos capturar esos valores parametrizados y así empezar a definir qué hacer con cada uno de ellos.
        let auto
        for (let i = 0; i < productos.productos.length; i++) {
            if (productos.productos[i].id == id) {
                auto = productos.productos[i]
            }
        }
        res.render('product', {auto : auto})
    },
    busqueda:function(req,res){
       
        let nombreProducto=req.query.q;
        let nombreProductoMinuscula=nombreProducto.toLocaleLowerCase()
        let resultado= [];

        for (let i=0; i<productos.productos.length;i++){
            let textoProducto= productos.productos[i].nombreDelProducto; 
            let textoProductoMinuscula=textoProducto.toLocaleLowerCase()

            let porcion=textoProductoMinuscula.substring(0,2)

            if(nombreProductoMinuscula.includes(porcion)){
                resultado.push(productos.productos[i]);
            }

        }
        res.render('search-results', {productos:resultado })
    },
    agregar: function(req, res) {
        res.render('product-add', {
            infoUsuario:productos.usuario
        })
    }
};

module.exports = productController;