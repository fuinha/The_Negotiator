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
    state: {
      type : DataTypes.STRING, 
      allowNull: false
    },
    zip: {
      type : DataTypes.INTEGER,
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
     },
     image: {
      type : DataTypes.STRING, 
      allowNull: true
    },
    dealer_site: {
      type: DataTypes.STRING,
      allowNull: true
     },
     twitter: {
      type: DataTypes.STRING,
      allowNull: true
     },
     linkedin: {
      type: DataTypes.STRING,
      allowNull: true
     },
     facebook: {
      type: DataTypes.STRING,
      allowNull: true
     }
  });

 dealer.associate = function(models) {
 dealer.hasMany(models.Application, {
      onDelete:"Cascade" 
    });

  dealer.belongsTo(models.User, {
    foreignKey : {
      allowNull : true
    }, onDelete: "Cascade",
    constraints: false
  });

  dealer.hasMany(models.Clients, {
    foreignKey: {
      allowNull: false
    }, 
    onDelete: "Cascade"
  })
dealer.hasMany(models.Quotes,{
  foreignKey: {
    allowNull : false
  },
  onDelete: "Cascade"
})

};

  return dealer;
};
