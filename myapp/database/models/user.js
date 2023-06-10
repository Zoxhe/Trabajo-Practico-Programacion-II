/* Es una funcion que recibe 2 parametros */
module.exports = function(sequelize, dataTypes) {

    /* Crear 3 variables */
    let alias = "user"; /* Un apodo para requerirlo en los controllers */

    /* mapeo exacto de cada una de las columnas */
    let cols = {
        ID:{
            autoIncrement: true,
            primaryKey: true,
            type: dataTypes.INTEGER
        },
        DNI:{
            type: dataTypes.INTEGER
        },
        Nombre:{
            type: dataTypes.STRING
        },
        Email:{
            type: dataTypes.STRING
        },
        FechaDeNac:{
            type: dataTypes.DATE
        },
        Contraseña:{
            type: dataTypes.STRING
        },
        FotoDePerfil:{
            type: dataTypes.STRING
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
        tableName: 'usuarios',
        timestamps: true, //Si la tabla no tiene los campos created_at y updated_at
        underscored: false, //Si los nombres de las columnas en la db tienen guiones bajos en lugar de camelCase.
    };

    const usuarios = sequelize.define(alias, cols, config);

    usuarios.associate = function(models) {
        usuarios.hasMany(models.product, {
            as: "product",
            foreignKey: "IDUser"
        }),
        usuarios.hasMany(models.comentarios, {//es de preuva, acordarse de sacarlo
            as: "comentarios",
            foreignKey: "IDUser"
        })
    }


    return usuarios;
};