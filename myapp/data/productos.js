const autos = [
    {
        id: 1,
        marca: 'Ford',
        modelo: 'Fiesta',
        anio: 2019,
        precio: 150000,
        foto: '/images/products/ford-fiesta-2019.jpg',
        color: 'Azul',
        comentarios: [
            {
                id: 1,
                usuario: {
                    id : 1,
                    nombre: 'Juan Perez',
                    email: 'jperez@ejemplo.com',
                    foto: '/images/users/default-image.png'
                },
                comentario: 'Excelente auto, muy buena elección'
            },
            {
                id: 2,
                usuario: {
                    id : 2,
                    nombre: 'Maria Lopez',
                    email: 'mlopez@ejemplo.com',
                    foto: '/images/users/default-image.png'
                },
                comentario: 'Muy buen auto, lo recomiendo'
            }
        ]
    },
    {
        id: 2,
        marca: 'Ford',
        modelo: 'Focus',
        anio: 2019,
        precio: 150000,
        foto: '/images/products/ford-fiesta-2019.jpg',
        color: 'Azul',
        comentarios: []
    }
]

module.exports = autos