const { DataTypes } = require('sequelize');
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define('user', {
    id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      primaryKey: true,
      allowNull: false,
    },
    document: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    name:{
      type: DataTypes.STRING,
      allowNull: false,
    },
    last_name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    username:{
      type: DataTypes.STRING,
      allowNull: false,
      unique: true
    },
    password: {
      allowNull: false,
      type: DataTypes.STRING
    },
  },
  {
    timestamps: false
  });
};
