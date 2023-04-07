const data={
    usuario:{
        id: 1,
        nombreDeUsuario: 'Juan Perez',
        contraseña: 'Fiesta',
        email:'jperez@ejemplo.com',
        fechaDeNacimiento: 2019,
        nroDeDocumento: 150000,
        foto: '/images/users/foto-perfil.jpg'
    },
    productos:[
        {
            id:1,
            foto: '/images/products/img-samsung-galaxy-s10.jpg',
            nombreDelProducto: "Ferrari 250 GTO 1963",
            descripción: "Berlinetta de dos plazas, motor delantero, tracc",
            fechaDeCarga: "01-03-23",
            comentarios:[ 
                {   
                    nombreDeUsuario: "florcita12",
                    imagenDePerfil: "foto",
                    textoDelComentario:"me encanto el auto, muy recomendado"
                },
                {   
                    nombreDeUsuario: "flor",
                    imagenDePerfil: "foto",
                    textoDelComentario:"me encanto el autoo"
                }
            ]
        },{
            id:2,
            foto: '/images/products/img-cafetera-moulinex.jpg',
            nombreDelProducto: "Rolls-Royce Boat Tail",
            descripción:"Cuenta con un motor V12 de 6.75 litros que pro",
            fechaDeCarga: "02-03-23",
            comentarios:[
                {
                    nombreDeUsuario: "joaqui34",
                    imagenDeperfil: "foto",
                    textoDelComentario:" ya se lo presumí a todos los envidios"
                },
                {   
                    nombreDeUsuario: "florcita12",
                    imagenDePerfil: "foto",
                    textoDelComentario:"me encanto el auto, muy recomendado"
                },
                {   
                    nombreDeUsuario: "florcita12",
                    imagenDePerfil: "foto",
                    textoDelComentario:"me encanto el auto, muy recomendado"
                }
            ]
        }
    ]
}


module.exports=data