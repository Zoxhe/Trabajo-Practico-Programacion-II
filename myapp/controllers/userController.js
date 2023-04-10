const usuarios = require('../data/datos');

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
    }
}

module.exports=userController;