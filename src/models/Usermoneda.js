const { DataTypes } = require('sequelize');
module.exports = (sequelize) => {
  sequelize.define('usermoneda', {
    id: {
      type: DataTypes.UUID, 
      defaultValue: DataTypes.UUIDV4, //
      allowNull: false,
      primaryKey: true
    },
    name: {
      type: DataTypes.STRING(50),
      allowNull: false,
    },
    user: {
      type: DataTypes.STRING(25),
      allowNull: false
    },
    password: {
      type: DataTypes.STRING(20),
      allowNull: false
    },
    saldo: {
      type: DataTypes.ARRAY(DataTypes.STRING),
      allowNull: false
    },
    correo: {
      type: DataTypes.STRING(50),
      allowNull: false
    },
    pais: {
      type: DataTypes.STRING(50),
      allowNull: false
    },
    phone: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    fecdata: {
      type: DataTypes.STRING(10),
      allowNull: false
    },
    pagopending: {
      type: DataTypes.STRING(20),
      allowNull: false,
    },
    access: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
    },
    createdindb: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: true, 
    }
  });
};
