/* Es una funcion que recibe 2 parametros */
module.exports = function(sequelize, dataTypes) {

    /* Crear 3 variables */
    let alias = "Productos"; /* Un apodo para requerirlo en los controllers */

    /* mapeo exacto de cada una de las columnas */
    let cols = {
        ID:{
            autoIncrement: true,
            primaryKey: true,
            type: dataTypes.INTEGER,
        },
        NombreDelProducto:{
            type: dataTypes.VARCHART,
        },
        IDUser:{
            type: dataTypes.INT,
        },
        Descripción:{
            type: dataTypes.VARCHART,
        },
        Imagen:{
            type: dataTypes.VARCHART,
        },
        Precio:{
            type: dataTypes.INT,
        },
        FechaDeCarga:{
            type: dataTypes.DATE,
        },
    }

    /* Obj literal paa configurar la tabla */
    let config = {
        tableName: 'productos',
        timestamps: true, //Si la tabla no tiene los campos created_at y updated_at
        underscored: true, //Si los nombres de las columnas en la db tienen guiones bajos en lugar de camelCase.
    };

    const productos = sequelize.define(alias, cols, config);

    return productos;
};