const autos = require('../data/productos')
const usuarios = require('../data/usuariosprueba');


const productController = {
    index: function(req, res) {
        res.render('index', {autos : autos})
    },
    detalle: function(req, res) {
        let id = req.params.id
        let auto
        for (let i = 0; i < autos.length; i++) {
            if (autos[i].id == id) {
                auto = autos[i]
            }
        }
        res.render('product', {auto : auto})
    },
    busqueda:function(req,res){
        let nombreDelProducto=req.params.q;
        let resultado= [];

        for (let i=0; i<usuarios.productos.length;i++){
            if(nombreDelProducto == usuarios.productos[i].nombreDelProducto){
                resultado.push(usuarios.productos[i]);
            }
        }
        res.render('search-results', {productos:resultado })
    }
    
    //agregar: function(req, res) {
    //    res.render('product-add')
    //}//ver
};

module.exports = productController;