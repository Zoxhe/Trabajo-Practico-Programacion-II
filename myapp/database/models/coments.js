module.exports = function(sequelize, dataTypes) {

    /* Crear 3 variables */
    let alias = "comentarios"; /* Un apodo para requerirlo en los controllers */

    /* mapeo exacto de cada una de las columnas */
    let cols = {
        ID:{
            autoIncrement: true,
            primaryKey: true,
            type: dataTypes.INTEGER
        },
        IDUser:{
            type: dataTypes.INTEGER
        },
        IDproduct:{
            type: dataTypes.INTEGER
        },
        Comentario:{
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
        tableName: 'comentarios',
        timestamps: true, //Si la tabla no tiene los campos created_at y updated_at
        underscored: false, //Si los nombres de las columnas en la db tienen guiones bajos en lugar de camelCase.
    };

    const coments = sequelize.define(alias, cols, config);

    coments.associate = function(models) {
        coments.belongsTo(models.product, {
            as: "product",
            foreignKey: "IDproduct"
        })
    }


    return coments;
};