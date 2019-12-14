module.exports = (sequelize, DataTypes) => {
    var Clients = sequelize.define("Clients", {
        waiting:{
            type: DataTypes.BOOLEAN, 
            allowNull: true, 
            validate: {
                len: [1, 250]
            }
        }, 
        completed:{
            type: DataTypes.BOOLEAN, 
            allowNull: true, 
            validate: {
                len: [1, 250]
            }
        }
    }); 

    Clients.associate = models => {
        Clients.belongsTo(models.dealer, {
            foreignKey: {
                allowNull: false
            }
        });
        Clients.hasOne(models.Quotes, {
            foreignKey: {
                allowNull: false
            }, constraints: false
        })
    }

    return Clients;
}