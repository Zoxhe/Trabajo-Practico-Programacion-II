const usuarios = require('../data/usuariosprueba');

const userController={
    profile:function(req, res) {
        res.render('profile', {
            infoUsuario:usuarios.usuario,
            productos:usuarios.productos
        })
    },
    profileEdit:function(req, res) {
        res.render('profile-edit', {
            infoUsuario:usuarios.usuario
        })
    },
    register:function(req, res) {
        res.render('register')
    },
    login:function(req, res) {
        res.render('login')
    },
    //ver
    agregar: function(req, res) {
        res.render('product-add', {
            infoUsuario:usuarios.usuario
        })
    }
}

module.exports=userController;