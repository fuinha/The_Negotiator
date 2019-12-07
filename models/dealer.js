module.exports = function(sequelize, DataTypes) {
  
  var dealer = sequelize.define("dealer", {
    
    business_name: {
      type: DataTypes.STRING,
      allowNull: false
    },
    address: {
      type: DataTypes.STRING,
      allowNull: false
      },
    owner: {
      type: DataTypes.STRING,
      allowNull: false
      },
    agent: {
      type: DataTypes.STRING,
      allowNull: false
      },
    phone_number: {
      type: DataTypes.STRING,
      allowNull: false
      },
    email: {
      type: DataTypes.STRING,
      allowNull: false
     }
  });

 dealer.associate = function(models) {
  
 dealer.hasMany(models.Application, {
      onDelete:"Cascade" 
    });
  };

  return dealer;
};
