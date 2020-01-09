module.exports = (sequelize, DataTypes) => {
    var Quotes = sequelize.define("Quotes", {
        num_months: {
            type: DataTypes.INTEGER, 
            allowNull: true, 
            validate: {
                len: [1]
            }
        }, 
        cost_month: {
            type: DataTypes.FLOAT,
            allowNull: true,
            validate: {
                len: [1]
            }
        }, 
        paidFull: {
            type: DataTypes.FLOAT, 
            allowNull: false, 
            validate: {
                len: [1]
            }
        }, 
        paidFull: {
            type:DataTypes.FLOAT,
            allowNull: true, 
            validate: {
                len: [1]
            }
        }, 
        comments:{
            type: DataTypes.TEXT, 
            allowNull: true, 
            validate: {
                len: [1, 250]
            }
        }
    }); 

    Quotes.associate = models => {
        Quotes.belongsToMany(models.Application, {
            through: models.Clients,
            as: "quotes",
            foreignKey: {
                allowNull: false
            }
        });
    }

    return Quotes;
}