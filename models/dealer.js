// var bcrypt = require("bcryptjs");

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

  // dealer.prototype.validPassword = function(password) {
  //   return bcrypt.compareSync(password, this.password);
  // };

  // dealer.addHook("beforeCreate", function(dealer) {
  //   dealer.password = bcrypt.hashSync(dealer.password, bcrypt.genSaltSync(10), null);
  // });


 dealer.associate = function(models) {
  
 dealer.hasMany(models.Application, {
      onDelete:"Cascade" 
    });
  };

  return dealer;
};
