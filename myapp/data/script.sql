-- CREAR BASE DE DATOS
create schema data;
-- USAR BASE DE DATOS
use data;
-- CREAR TABLA DE USUARIO
create table usuarios (
-- Nombre       	Tipo          Restriccion
	ID          	int           unsigned primary key auto_increment,
	DNI         	int           not null,
    Nombre			varchar (200) not null,
	Email       	varchar(200)  not null,
	FechaDeNac	    date          not null,
	Contraseña  	varchar(500)  not null,
	FotoDePerfil    varchar(200)  not null,
	 -- Crear columnas de Auditoria
	createdAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
	updatedAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
	
);
-- CREAR BASE DE DATOS
create table productos (
-- Nombre 				Tipo 		  Restricción
	ID          		int           unsigned primary key auto_increment,
	NombreDelProducto   varchar(200)  not null,
	IDUser				int			  unsigned,
	Descripción 		varchar(900)  not null,
	Imagen      		varchar(200)  not null,
    Precio				int			  not null,
    FechaDeCarga		date		  not null,
     -- Crear columnas de Auditoria
	createdAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
	updatedAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    FOREIGN KEY (IDUser) REFERENCES usuarios(ID)
	
); 
create table comentarios (
-- Nombre 				Tipo 		  Restricción
	ID		          	int           unsigned primary key auto_increment,
	IDUser			    int			  unsigned,
    IDproduct 			int			  unsigned,
	Comentario	 		varchar(900)  not null,
     -- Crear columnas de Auditoria
	createdAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
	updatedAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    FOREIGN KEY (IDUser) REFERENCES usuarios(ID),
    FOREIGN KEY (IDproduct) REFERENCES productos(ID)
); 
-- Insertar datos a la tabla de usuarios
insert into usuarios values (default,44123456,'florcita12','florcita12@gmail.com',"2003-03-23",'contra123','/images/users/foto-perfil.jpg',default,default);
insert into usuarios values (default,44567948,'valentina1107','vale777@gmail.com',"2002-11-06",'contraseña123','/images/users/foto-perfil.jpg',default,default);
insert into usuarios values (default,44264874,'ailin55','ailinn23@gmail.com',"1999-07-15",'micontraseña99','/images/users/foto-perfil.jpg',default,default);
insert into usuarios values (default,44265848,'zoe0','zoee33@gmail.com',"1995-02-10",'micontra1414','/images/users/foto-perfil.jpg',default,default);
insert into usuarios values (default,44924730,'manu1230','manu80@gmail.com',"1996-12-13",'contraseñademanu80','/images/users/foto-perfil.jpg',default,default);


-- Insertar datos a la tabla de productos
insert into productos values (default, 'Ferrari 250 GTO 1963', 1, 'Berlinetta de dos plazas, motor delantero, tracción trasera, motor V12 de 3 litros capaz de erogar 300 caballos en la mayoría de los construidos, y una variante más potente, con 4 litros de cilindrada y 330 caballos.','/images/img_autos/ferrari 250.jpg', 45000000, "2020-03-23", default,default );
insert into productos values (default, 'Rolls-Royce Boat Tail', 2, 'Cuenta con un motor V12 de 6.75 litros que produce 563 caballos de fuerza y 850 Nm de torque, lo que le permite acelerar de 0 a 100 km/h en solo 4,9 segundos.','/images/img_autos/Rolls-Royce Boat Tail.jpeg',28000000, "2022-02-14",default,default);
insert into productos values (default, 'Bugatti La Vouiture Noire', 3, 'Está equipado con un motor W16 de 8.0 litros que produce 1500 caballos de fuerza y 1600 Nm de torque. Puede acelerar de 0 a 100 km/h en solo 2.4 segundos y alcanzar una velocidad máxima de 420 km/h.','/images/img_autos/Bugatti La Vouiture Noire.jpeg',11000000,"2021-09-24",default,default );
insert into productos values (default, 'Bugatti Centodieci ', 4, 'Está equipado con un motor W16 de 8.0 litros que produce 1600 caballos de fuerza y 1600 Nm de torque. Puede acelerar de 0 a 100 km/h en solo 2.4 segundos y alcanzar una velocidad máxima de 380 km/h.','/images/img_autos/bugatti centodieci.jpeg',8000000,"2020-07-05" ,default,default);
insert into productos values (default, 'Mercedes-Maybach Exelero', 5, 'Está equipado con un motor V12 biturbo de 5.9 litros que produce 700 caballos de fuerza y 1020 Nm de torque. Puede acelerar de 0 a 100 km/h en solo 4.4 segundos y alcanzar una velocidad máxima de 350 km/h.','/images/img_autos/Mercedes-Maybach Exelero.jpg',7200000, "2023-04-11",default,default );
insert into productos values (default, 'Bugatti Divo', 1, 'Cuenta con un motor W16 de 8.0 litros capaz de producir una potencia de 1,500 caballos de fuerza y un par motor máximo de 1,600 Nm. También tiene con una transmisión automática de 7 velocidades tracción en las cuatro ruedas.','/images/img_autos/bugatti divo.jpeg',5400000, "2022-06-19",default,default );
insert into productos values (default, 'Koenigsegg CCXR Trevita', 2, 'El CCXR Trevita se distingue por su acabado exterior único en fibra de carbono recubierta con diamantes, que le da un aspecto plateado brillante y resplandeciente. Además, cuenta con un motor V8 de 4,8 litros de doble turboalimentación, capaz de generar una potencia de 1.004 caballos de fuerza y un par motor máximo de 1.080 Nm.','/images/img_autos/Koenigsegg CCXR Trevita.jpeg',4300000,"2021-08-10" ,default,default);
insert into productos values (default, 'Lamborghini Veneno', 3, 'El Veneno utiliza un motor V12 de 6.5 litros capaz de producir una potencia máxima de 750 caballos de fuerza, lo que le permite acelerar de 0 a 100 km/h en tan solo 2.8 segundos y alcanzar una velocidad máxima de 355 km/h.','/images/img_autos/Lamborghini Veneno.jpeg',4200000,"2021-04-23" ,default,default );
insert into productos values (default, 'Bugatti Chiron Super Sport 300+', 4, 'Utiliza el motor W16 de 8.0 litros y ha sido ajustado para producir una potencia máxima de 1,578 caballos de fuerza y un par motor máximo de 1,600 Nm. También cuenta con una transmisión automática de 7 velocidades y tracción en las cuatro ruedas.','/images/img_autos/Bugatti Chiron Super Sport 300+.jpg',3500000, "2022-01-22" ,default,default);
insert into productos values (default, 'Lamborghini Sian', 5, 'Cuenta con un motor V12 de 6.5 litros que produce 785 caballos de fuerza, junto con un motor eléctrico de 48 voltios que produce 34 caballos de fuerza, lo que da una potencia combinada de 819 caballos de fuerza. El automóvil también cuenta con un sistema de almacenamiento de energía de supercondensadores en lugar de las baterías convencionales.','/images/img_autos/Lamborghini Sian.jpeg',3000000,"2020-09-21",default,default );

-- Insertar datos a la tabla de comentarios
-- Post 1
insert into comentarios values (default,1,1,'me encanto el auto, muy recomendado',default,default);
insert into comentarios values (default,2,1,' ya se lo presumí a todo el mundo',default,default);
insert into comentarios values (default,3,1,'lo uso hasta para comprar el pan',default,default);
insert into comentarios values (default,4,1,'la mejor compra que hice en toda mi vida',default,default);
insert into comentarios values (default,5,1,'gasté mi sueldo de por lo menos 8 años pero valió la pena',default,default);
-- Post 2
insert into comentarios values (default,1,2,'en 10 años vuelvo para comprarlo',default,default);
insert into comentarios values (default,2,2,' lo necesitoooo',default,default);
insert into comentarios values (default,3,2,'lo quiero ya',default,default);
insert into comentarios values (default,4,2,'es muuuy exclusivo, lo quiero',default,default);
insert into comentarios values (default,5,2,'donde lo coonsiguieron, hay pocos de estos en el mundo',default,default);
-- Post 3
insert into comentarios values (default,1,3,'me gustó mucho',default,default);
insert into comentarios values (default,2,3,' el mejor auto lejos',default,default);
insert into comentarios values (default,3,3,'se lo compré a mi hijo y le encantó, recomendadísimo',default,default);
insert into comentarios values (default,4,3,'no esta mal pero esperaba más',default,default);
insert into comentarios values (default,5,3,'esta sobrevalorado',default,default);
-- Post 4
insert into comentarios values (default,1,4,'hay autos mejores, si gastó esa cantidad de plata prefiero un ferrari',default,default);
insert into comentarios values (default,2,4,'estoy encantado',default,default);
insert into comentarios values (default,3,4,'la estética de este maquinon es una de las cosas que más destaca',default,default);
insert into comentarios values (default,4,4,'algún día voy a comprarlo',default,default);
insert into comentarios values (default,5,4,'desde joven que quiero uno de estos',default,default);
-- Post 5
insert into comentarios values (default,1,5,'es lo más',default,default);
insert into comentarios values (default,2,5,'muy piola',default,default);
insert into comentarios values (default,3,5,'estoy chocha',default,default);
insert into comentarios values (default,4,5,'es impresionante lo rápido que es',default,default);
insert into comentarios values (default,5,5,'no caigo en que tengo uno de estos',default,default);
-- Post 6
insert into comentarios values (default,1,6,'recomendadísimo',default,default);
insert into comentarios values (default,2,6,' es buenísimo',default,default);
insert into comentarios values (default,3,6,'mis felicitaciones para los administradores de la página, mi compra fue muy rápida y segura',default,default);
insert into comentarios values (default,4,6,'estoy enamorada del auto',default,default);
insert into comentarios values (default,5,6,'lo amo banda',default,default);
-- Post 7 
insert into comentarios values (default,1,7,'lo mega recomiendo',default,default);
insert into comentarios values (default,2,7,' es lo mejor de lo mejor en autos',default,default);
insert into comentarios values (default,3,7,'estoy muy emocionada,acabo de comprarlooo',default,default);
insert into comentarios values (default,4,7,'espero que la Afip no me persiga por esto',default,default);
insert into comentarios values (default,5,7,'los lambo son mejores',default,default);
-- Post 8
insert into comentarios values (default,1,8,'si tienen la posibilidad de comprarlo, háganlo no se van a arrepentir',default,default);
insert into comentarios values (default,2,8,'elegí ser feliz y lo compré',default,default);
insert into comentarios values (default,3,8,'no solo cuesta comprarlo sino también manternerlo pero lo recomiendo',default,default);
insert into comentarios values (default,4,8,'es el mejor de todos los autos de alta gama en mi humilde opinión',default,default);
insert into comentarios values (default,5,8,'muy fachero',default,default);
-- Post 9
insert into comentarios values (default,1,9,'mi amigo se compró uno y esta tremendo',default,default);
insert into comentarios values (default,2,9,'lo quiero en negro',default,default);
insert into comentarios values (default,3,9,'el motor es tremendo',default,default);
insert into comentarios values (default,4,9,'es buenisímo',default,default);
insert into comentarios values (default,5,9,'lo cuido como oro',default,default);
-- Post 10
insert into comentarios values (default,1,10,'muy bueno',default,default);
insert into comentarios values (default,2,10,' lo amo',default,default);
insert into comentarios values (default,3,10,'quiero comprar otro',default,default);
insert into comentarios values (default,4,10,'autazo',default,default);
insert into comentarios values (default,5,10,'despúes de años al fin lo pude comprar',default,default);

