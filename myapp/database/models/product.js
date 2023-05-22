/* Es una funcion que recibe 2 parametros */
module.exports = function(sequelize, dataTypes) {

    /* Crear 3 variables */
    let alias = "product"; /* Un apodo para requerirlo en los controllers */

    /* mapeo exacto de cada una de las columnas */
    let cols = {
        ID:{
            autoIncrement: true,
            primaryKey: true,
            type: dataTypes.INTEGER
        },
        NombreDelProducto:{
            type: dataTypes.STRING
        },
        IDUser:{
            type: dataTypes.INTEGER
        },
        Descripción:{
            type: dataTypes.STRING
        },
        Imagen:{
            type: dataTypes.STRING
        },
        Precio:{
            type: dataTypes.INTEGER
        },
        FechaDeCarga:{
            type: dataTypes.DATE
        },
        createdAt:{
            type: dataTypes.DATE
        },
        updatedAt:{
            type:dataTypes.DATE
        }
    }

    /* Obj literal paa configurar la tabla */
    let config = {
        tableName: 'productos',
        timestamps: true, //Si la tabla no tiene los campos created_at y updated_at
        underscored: false, //Si los nombres de las columnas en la db tienen guiones bajos en lugar de camelCase.
    };

    const productos = sequelize.define(alias, cols, config);

    return productos;
};