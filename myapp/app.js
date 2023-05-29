var createError = require('http-errors');
var express = require('express'); //Express-generator crea de manera automática una estructura de carpetas, archivos y dependencias que nos sirven para inicializar cualquier aplicación.
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
const session = require('express-session');
const db = require('./database/models')

var indexRouter = require('./routes/index');
var productosRouter = require('./routes/productos'); //Para implementarlo dentro de app.js , creamos una constante y requerimos el módulo.
var usersRouter = require('./routes/users');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(logger('dev')); 
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public'))); //esto especifica que por default las imagenes estaran siempre en public. entonces al usarlas solo ponemos el nombre de la carpeta y el archivo donde estan dentro de public.

app.use(session({
  secret: "A completar", // COMPLETAR CON PALABRA SECRETA
  resave: true,
  saveUninitialized: false
}))

app.use(function(req, res, next) { // FALTA CHECKEAR
  req.cookie = {};
  req.cookie.userId = undefined;
  if (req.session.usuarioLogueado != undefined) {
    res.locals.usuarioLogueado = req.session.usuarioLogueado;
  } else {
    res.locals.usuarioLogueado = undefined;
  }
  return next();
})

app.use(function(req, res, next){ // FALTA CHECKEAR
  if (req.cookie.userId != undefined && req.session.usuarioLogueado == undefined) {
    db.user.findByPk(req.cookie.userId)
    .then(function(usuario) {
      usuario.dataValues.password = undefined;
      req.session.usuarioLogueado = usuario;
      res.locals.usuarioLogueado = usuario;
    })
    .catch(function(error) {
      console.log(error);
    })
  } else {
    res.locals.usuarioLogueado = req.session.usuarioLogueado;
  }

  return next();
})

app.use(function(req, res, next) { // FALTA CHECKEAR
  if (req.session.usuarioLogueado != undefined) {
    res.locals.usuarioLogueado = req.session.usuarioLogueado;
  }
  return next();
});

//rutas
app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/productos', productosRouter); // método  use()     que recibe dos parámetros. El primero un string que será el nombre del recurso, en este caso productos. Al ser una ruta debe empezar con la /. El segundo un string que será el nombre de la constante en la que almacenamos el módulo del recurso. 
// De esta forma estamos definiendo que cada solicitud del recurso productos sea atendida por el módulo rutasProductos y toda su lógica.

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;