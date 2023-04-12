
const productos = require('../data/datos');


const productController = {
    index: function(req, res) {
        res.render('index', {autos : productos.productos})
    },
    detalle: function(req, res) {
        let id = req.params.id
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