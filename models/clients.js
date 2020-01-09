module.exports = (sequelize, DataTypes) => {
    var Clients = sequelize.define("Clients", {
        waiting:{
            type: DataTypes.BOOLEAN, 
            allowNull: false, 
            defaultValue: 0
        }, 
        completed:{
            type: DataTypes.BOOLEAN, 
            allowNull: false, 
            defaultValue: 0
        }, 
        skipApp:{
            type:DataTypes.BOOLEAN,
            allowNull: false,
            defaultValue: 0
        }
    }); 

    Clients.associate = models => {
        Clients.belongsTo(models.dealer, {
            foreignKey: {
                allowNull: false
            }
        });
        Clients.hasMany(models.Quotes, {
            foreignKey: {
                allowNull: false
            }, constraints: false
        });
    }

    return Clients;
}