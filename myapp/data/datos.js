const data= {
    usuario: {
        id: 1,
        nombreDeUsuario: "valentina1107",
        contraseña: "contraseña123",
        email: "vale777@gmail.com",
        fechaDeNacimiento:"11-11-2002",
        DNI:4434717,
        fotoDePerfil: "/images/users/foto-perfil.jpg"
    },
    productos:[
        {
            id:1,
            imagen: '/images/img_autos/ferrari 250.jpg',
            nombreDelProducto: "Ferrari 250 GTO 1963",
            descripcion: "Berlinetta de dos plazas, motor delantero, tracción trasera, motor V12 de 3 litros capaz de erogar 300 caballos en la mayoría de los construidos, y una variante más potente, con 4 litros de cilindrada y 330 caballos.",
            fechaDeCarga: "01-03-23",
            precio:1990000,
            comentarios: [
                {
                    id : 1,
                    usuario:{
                        nombreDeUsuario: "florcita12",
                        imagenDePerfil: "/images/users/default-image.png",
                    },
                    textoDelComentario:"me encanto el auto, muy recomendado"
                    
                },
                {   
                    id:2,
                    usuario:{
                        nombreDeUsuario: "flor",
                        imagenDePerfil: "/images/users/default-image.png",
                    },
                    textoDelComentario:"me encanto el autoo"
                    
                }
            ]
        },{
            id:2,
            imagen: '/images/img_autos/ferrari 250.jpg',
            nombreDelProducto: "Ferrari",
            descripcion: "Berlinetta de dos plazas, motor delantero, tracción trasera, motor V12 de 3 litros capaz de erogar 300 caballos en la mayoría de los construidos, y una variante más potente, con 4 litros de cilindrada y 330 caballos.",
            fechaDeCarga: "01-03-23",
            precio:1990000,
            comentarios: [
                {
                    id : 1,
                    usuario:{
                        nombreDeUsuario: "florcita12",
                        imagenDePerfil: "/images/users/default-image.png",
                    },
                    textoDelComentario:"me encanto el auto, muy recomendado"
                    
                },
                {   
                    id:2,
                    usuario:{
                        nombreDeUsuario: "flor",
                        imagenDePerfil: "/images/users/default-image.png",
                    },
                    textoDelComentario:"me encanto el autoo"
                    
                }
            ]
        },{
            id:3,
            imagen: '/images/img_autos/ferrari 250.jpg',
            nombreDelProducto: "Ferrari2",
            descripcion: "Berlinetta de dos plazas, motor delantero, tracción trasera, motor V12 de 3 litros capaz de erogar 300 caballos en la mayoría de los construidos, y una variante más potente, con 4 litros de cilindrada y 330 caballos.",
            fechaDeCarga: "01-03-23",
            precio:1990000,
            comentarios: [
                {
                    id : 1,
                    usuario:{
                        nombreDeUsuario: "florcita12",
                        imagenDePerfil: "/images/users/default-image.png",
                    },
                    textoDelComentario:"me encanto el auto, muy recomendado"
                    
                },
                {   
                    id:2,
                    usuario:{
                        nombreDeUsuario: "flor",
                        imagenDePerfil: "/images/users/default-image.png",
                    },
                    textoDelComentario:"me encanto el autoo"
                    
                }
            ]
        },{
            id:4,
            imagen: '/images/img_autos/ferrari 250.jpg',
            nombreDelProducto: "BUGATTI",
            descripcion: "Berlinetta de dos plazas, motor delantero, tracción trasera, motor V12 de 3 litros capaz de erogar 300 caballos en la mayoría de los construidos, y una variante más potente, con 4 litros de cilindrada y 330 caballos.",
            fechaDeCarga: "01-03-23",
            precio:1990000,
            comentarios: [
                {
                    id : 1,
                    usuario:{
                        nombreDeUsuario: "florcita12",
                        imagenDePerfil: "/images/users/default-image.png",
                    },
                    textoDelComentario:"me encanto el auto, muy recomendado"
                    
                },
                {   
                    id:2,
                    usuario:{
                        nombreDeUsuario: "flor",
                        imagenDePerfil: "/images/users/default-image.png",
                    },
                    textoDelComentario:"me encanto el autoo"
                    
                }
            ]
        }
        /*,{
            id:2,
            imagen:'/images/img_autos/Rolls-Royce Boat Tail.jpeg',
            nombreDelProducto: "Rolls-Royce Boat Tail",
            descripcion: " Cuenta con un motor V12 de 6.75 litros que produce 563 caballos de fuerza y 850 Nm de torque, lo que le permite acelerar de 0 a 100 km/h en solo 4,9 segundos.",
            fechaDeCarga: "02-03-23",
            comentarios: {
                nombreDeUsuario: "joaqui34",
                textoDelComentario:" ya se lo presumí a todos los envidiosos ",
                imagenDePerfil: "foto"
    
            }
        }, {
            id:3,
            imagen: '/images/img_autos/Bugatti La Vouiture Noire.jpeg',
            nombreDelProducto: "Bugatti 'La Vouiture Noire'",
            descripcion: "Está equipado con un motor W16 de 8.0 litros que produce 1500 caballos de fuerza y 1600 Nm de torque. Puede acelerar de 0 a 100 km/h en solo 2.4 segundos y alcanzar una velocidad máxima de 420 km/h.",
            fechaDeCarga: "03-03-23",
            comentarios: {
                nombreDeUsuario: "messi56",
                textoDelComentario:" ahora soy pobre pero con auto nuevo",
                imagenDePerfil: "foto"
    
            }
        },     {
            id:4,
            imagen: '/images/img_autos/bugatti centodieci.jpeg',
            nombreDelProducto: "Bugatti Centodieci ",
            descripcion: "Está equipado con un motor W16 de 8.0 litros que produce 1600 caballos de fuerza y 1600 Nm de torque. Puede acelerar de 0 a 100 km/h en solo 2.4 segundos y alcanzar una velocidad máxima de 380 km/h.",
            fechaDeCarga: "04-03-23", 
            comentarios: {
                nombreDeUsuario: "matteo78",
                textoDelComentario:" lo uso hasta para comprar el pan",
                imagenDePerfil: "foto"
    
            }
        },{
            id:5,
            imagen: '/images/img_autos/Mercedes-Maybach Exelero.jpg',
            nombreDelProducto: "Mercedes-Maybach Exelero",
            descripcion: "Está equipado con un motor V12 biturbo de 5.9 litros que produce 700 caballos de fuerza y 1020 Nm de torque. Puede acelerar de 0 a 100 km/h en solo 4.4 segundos y alcanzar una velocidad máxima de 350 km/h",
            fechaDeCarga: "05-03-23",
            comentarios:  {
                nombreDeUsuario: "benito910",
                textoDelComentario:" la mejor compra que hice en toda mi vida ",
                imagenDePerfil: "foto"
    
            }
        },{
            id:6,
            imagen: '/images/img_autos/bugatti divo.jpeg',
            nombreDelProducto: "Bugatti Divo",
            descripcion: " Cuenta con un motor W16 de 8.0 litros capaz de producir una potencia de 1,500 caballos de fuerza y un par motor máximo de 1,600 Nm. También tiene con una transmisión automática de 7 velocidades tracción en las cuatro ruedas.",
            fechaDeCarga: "06-03-23",
            comentarios:  
            {
                nombreDeUsuario: "miguel1112",
                textoDelComentario:" me gusto mucho",
                imagenDePerfil: "foto"
    
            }
        },{
            id:7,
            imagen: '/images/img_autos/Koenigsegg CCXR Trevita.jpeg',
            nombreDelProducto: "Koenigsegg CCXR Trevita",
            descripcion: "El CCXR Trevita se distingue por su acabado exterior único en fibra de carbono recubierta con diamantes, que le da un aspecto plateado brillante y resplandeciente. Además, cuenta con un motor V8 de 4,8 litros de doble turboalimentación, capaz de generar una potencia de 1.004 caballos de fuerza y un par motor máximo de 1.080 Nm.",
            fechaDeCarga: "07-03-23",
            comentarios: {
                nombreDeUsuario: "brian1314",
                textoDelComentario:" no esta mal pero esperaba más ",
                imagenDePerfil: "foto"
    
            }
        },{
            id:8,
            imagen: '/images/img_autos/Lamborghini Veneno.jpeg',
            nombreDelProducto: "Lamborghini Veneno ",
            descripcion: "El Veneno utiliza un motor V12 de 6.5 litros capaz de producir una potencia máxima de 750 caballos de fuerza, lo que le permite acelerar de 0 a 100 km/h en tan solo 2.8 segundos y alcanzar una velocidad máxima de 355 km/h.",
            fechaDeCarga: "08-03-23",
            comentarios:  {
                nombreDeUsuario: "sol00",
                textoDelComentario:" lo amo",
                imagenDePerfil: "foto"

            }
        },{
            id:9,
            imagen: '/images/img_autos/Bugatti Chiron Super Sport 300+.jpg',
            nombreDelProducto: "Bugatti Chiron Super Sport 300+",
            descripcion: "Utiliza el motor W16 de 8.0 litros y ha sido ajustado para producir una potencia máxima de 1,578 caballos de fuerza y un par motor máximo de 1,600 Nm. También cuenta con una transmisión automática de 7 velocidades y tracción en las cuatro ruedas.",
            fechaDeCarga: "09-03-23",
            comentarios:  {
                nombreDeUsuario: "user000",
                textoDelComentario:" se lo compré a mi hijo y le encantó, recomendadísimo",
                imagenDePerfil: "foto"
    
            }
        },{
            id:10,
            imagen: '/images/img_autos/Lamborghini Sian.jpeg',
            nombreDelProducto: "Lamborghini Sian",
            descripcion: "Cuenta con un motor V12 de 6.5 litros que produce 785 caballos de fuerza, junto con un motor eléctrico de 48 voltios que produce 34 caballos de fuerza, lo que da una potencia combinada de 819 caballos de fuerza. El automóvil también cuenta con un sistema de almacenamiento de energía de supercondensadores en lugar de las baterías convencionales.",
            fechaDeCarga: "10-03-23",
            comentarios: {
                nombreDeUsuario: "marquito123",
                textoDelComentario:"El mejor auto lejos",
                imagenDePerfil: "foto"
    
            }
        }*/
    ]

}

module.exports= data