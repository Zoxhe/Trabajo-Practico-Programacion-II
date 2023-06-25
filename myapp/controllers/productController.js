//const { or } = require('sequelize'); no la usamos, era de prueba

const db = require('../database/models'); //requerimos los modelos.

const productos = db.product; //Alias del modelo
const comentarios =db.comentarios;

const productController = {
    findAll: (req, res) => {
      productos.findAll({
        include: [{association: "user"},{association: "comentarios"}],
        order: [ ['createdAt', 'DESC']],
        //limit:10    deberiamos limitar la cantidad de resultados
      })
      .then(function (result) {
            //return res.send(result[5])
          return res.render('index', { autos: result });  
      })
      .catch(function (err){
          console.log(err);

      });
    },
    detalle:(req, res) => {
        let id = req.params.id;

        let rel = {
            include: [{ association: 'user' }, { association: "comentarios",include: [{ association: 'user' }]}],
            };
        productos.findByPk(id, rel)
        .then(function(result){
            console.log(result);
            //res.send(result);
            return res.render ('product',{
                productos: result
            })
        })
        .catch(function(error){
            console.log(error);
        });
    },
    busqueda:(req,res)=>{
        let nombreProducto=req.query.q;
        const op=db.Sequelize.Op;
            productos.findAll({
                where:
                    {[op.or]:[
                        {NombreDelProducto:{[op.like]: "%"+nombreProducto +"%"}},
                        {Descripción:{[op.like]: "%"+nombreProducto +"%"}}
                    ]},
                order:[['createdAt','DESC']],
                include: [{association: "user"},{association: "comentarios"}]
            })
            .then(function (result) {
                return res.render('search-results', { productos: result });  
            })
            .catch(function (err){
                console.log(err);
      
            });
    },
    mostrarFormAgregar:(req, res)=>{
        if(req.session.usuarioLogueado != undefined){
            res.render('product-add');
        }else{
            res.render('login');
        }
        
    },
    agregar:(req, res)=>{
        
        let info= req.body;
        productos.create(info)
        .then((result)=>{
            return res.redirect('/');
        }).catch((error)=>{
            console.log(error);
        });
    },
    comentariosagregar:(req,res)=>{
        let id = req.params.id;
        let Comentario= req.body;
        comentarios.create(Comentario)
        .then((result)=>{
            //res.send(result)
            return res.redirect("/productos/detalle/" + id );
        }).catch((error)=>{
            console.log(error);
        });
    },
    FormEditar: (req, res) => {
        let id = req.params.id;
        productos.findByPk(id)
        .then((result) => {
            console.log(result);
            if(req.session.usuarioLogueado != undefined ){
                if(req.session.usuarioLogueado.Id==result.IDUser){
                    return res.render("product-edit", { productos: result });
                }else{ return res.send('No puede editar proyectos ajenos')}
            }else{ return res.render ('login');}
        })

        .catch((err) => {
        console.log(err);
        });

        
    },
    EditarProd: (req, res) => {
        let id = req.params.id;
        let info = req.body; //Guardo la info del formulario de editar
        console.log(info);
        //La funcion update recibe dos parametros: lo que quiero actualiza (info) y el otro un objeto literal
        productos.update(info,{
            where:[
                {ID:id}//El primer id es una propiedad de la base de datos y el segundo es la varibale que definimos antes
            ]
        }).then((result) => {
            return res.redirect("/productos/detalle/" + id );
        }).catch((error) => {
            console.log(error);
        })
    },
    EliminarProd: (req,res)=> {
        let id= req.body.id
        //Utilizo el método destroy
        productos.destroy({
            where: [
                {ID:id}
            ]
     
        }).then((result) => {
            return res.redirect('/')
        }).catch((error) => {
            console.log(error);
        })
        
    }
    
  }; 
  
module.exports = productController;

