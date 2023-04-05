const autos = require('../data/productos')

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
    }
}

module.exports = productController