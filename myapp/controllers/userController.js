// const usuarios = require('../data/datos');

const db = require('../database/models'); //requerimos los modelos.
const bcrypt = require('bcryptjs'); //requerimos bcryptjs para encriptar las contraseñas.
//Seleccionamos el modelo sobre el cual queremos aplicar el método findAll(). En este caso: producto
const usuarios = db.user; //Alias del modelo
const producto = db.product; 

function validar_email(email) {
    // Debe ser string, contener un @ y un punto.
    if (typeof(email) != 'string') {
        return false;
    } else if (email.indexOf('@') == -1) {
        return false;
    } else if (email.indexOf('.') == -1) {
        return false;
    }

    // No haya espacios
    if (email.indexOf(' ') != -1) {
        return false;
    }

    return true;
}

function validar_dni(dni) {
    let string_dni
    if (typeof(dni) == 'number') {
        string_dni = dni.toString();
    } else if (typeof(dni) == 'string') {
        string_dni = dni;
    } else {
        return false;
    }

    if (string_dni.length > 8 || string_dni.length < 7) {
        return false;
    }

    // Deben ser todos números
    for (let i = 0; i < string_dni.length; i++) {
        if (isNaN(parseInt(string_dni[i]))) {
            return false;
        }
    }

    return true;
}

function validar_password(password) {
    if (password.length < 3) {
        return false;
    }

    return true;
}
//HAY QUE CAMBIAR LO DE ARRIBA

const userController={
    busqueda:(req,res)=>{
        let nombrePersona=req.query.qP;
        const op=db.Sequelize.Op;
            usuarios.findAll({
                where:
                    {[op.or]:[
                        {Nombre:{[op.like]: "%"+nombrePersona +"%"}},
                        {Email:{[op.like]: "%"+nombrePersona +"%"}}
                    ]},
                order:[
                    ['ID','DESC']
                ],
                include: [{association: "product"}]
            })
            .then(function (result) {
                return res.render('search-results-users', { personas: result });  
            })
            .catch(function (err){
                console.log(err);
      
            });
    },
    profile:(req, res)=> {
        let id = req.params.id
           
       /*  let relacion={
            include: [{association: "product",include:[{association:"comentarios"}]}],
            order: [ ['createdAt', 'DESC']]

        }
        usuarios.findByPk(id,relacion)
        .then(function (result) {
            console.log(result);
            return res.render('profile', { infoUsuario: result });  
        })
        .catch(function (err){
            console.log(err);
      
        });  */ 

        let relacion={
            include: [{association: "user"}],
            where : [{IDUser: id}],
            order: [ ['createdAt', 'DESC']]
        }
        producto.findAll(relacion)
        .then(function (result) {
            console.log(result);
            //res.send(result)
            return res.render('profile', { infoProducto: result, infoUsuario: result[0].user });  
        })
        .catch(function (err){
            console.log(err);
      
        });

  
    },
    profileEdit:function(req, res) {
        res.render('profile-edit', { //Express utiliza el método .render() para enviar la vista al navegador. Se encarga de procesar el archivo EJS y enviar el HTML resultante al navegador.
            infoUsuario:usuarios.usuario
        })
    },
    register:function(req, res) {
        if (req.session.usuarioLogueado == undefined) {
            res.render('register')
        } else {
            res.redirect('/')
        }
    },
    proceso_registro:function(req, res) {
        let info = req.body;

        if (! validar_email(info.email)) {
            res.send('El email ingresado no es válido');
        }

        if (! validar_dni(info.dni)) {
            res.send('El DNI ingresado no es válido');
        }

        let contrasenia_encriptada
        if (! validar_password(info.password)) {
            res.send('La contraseña ingresada no es válida');
        }
        contrasenia_encriptada = bcrypt.hashSync(info.password, 10);

        usuarios.findOne({
            where: {
                email: info.email
            }
        })
        .then(function (result) {
            if (result) {
                res.send('El email ya se encuentra en uso');
            } else {
                usuarios.findOne({
                    where: {
                        Nombre: info.username
                    }
                })
                .then(function (result) {
                    if (result) {
                        res.send('El email y el nombre de usuario ya se encuentran en uso')
                    } else {
                        usuarios.create({
                            DNI: info.dni,
                            Nombre: info.username,
                            Email: info.email,
                            FechaDeNac: info.fecnac,
                            Contraseña: contrasenia_encriptada,
                            FotoDePerfil: info.imagenDePerfil || 'default-image.png' //Aca va la ruta de la imagen. Por ahora es default.jpg
                        })
                        .then(function (result) {
                            res.redirect('/users/login')
                        })
                        .catch(function (error) {
                            console.log(error);
                        })
                    }
                })
                .catch(function (error) {
                    console.log(error);
                })
            }
        })
        .catch(function (error) {
            console.log(error);
        })
    },
    login:function(req, res) {
        res.render('login')
    },
    loginPost: function(req, res){
       
         //Busco el email y la contraseña correcta para que el user inicie sesion
        let email_buscado = req.body.email;
        let contra_buscada = req.body.keyword;
        let email_correcto= {
            where: {Email:email_buscado}
        };
        usuarios.findOne (email_correcto)
        
        .then(function(result){
            
            if (result != null){
                let correct_password= bcrypt.compareSync (contra_buscada, result.Contraseña)
                //Si la contraseña es correcta respecto de un usuario determinado entonces ponemos un usuario en sesion
               
                if (correct_password){
            
                
                    req.session.usuarioLogueado = result.dataValues;
                    //Creo las cookies para que recuerde al usuario
                    if(req.body.rememberme != undefined){
                       res.cookie('userId', result.ID, {maxAge: 1000 * 60 * 15})//COMO SE CAMBIO EL NOMBRE DEL ID DE USUARIOS POR "Id", capaz que este ID habria que cambiarlo?
                   }
                    return res.redirect('/');

                } else {
                    return res.send ("Contraseña incorrecta, intente de nuevo")

                }
            
            }else {
                return res.send ("Email no registrado")
            }
        }).catch(function(error) {
            console.log(error);

        })
    },
    // AGREGAR METODO LOGOUT
    logout: function(req, res) {
        if (req.locals.user != undefined) {
            req.session.destroy();
            req.locals.user = null;
            res.redirect('/users/login')
        }
    }
}

module.exports=userController;