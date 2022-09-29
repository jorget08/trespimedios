const { DataTypes } = require('sequelize');
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define('sale', {
    id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      primaryKey: true,
      allowNull: false,
    },
    quantity:{
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    sale_at:{
      type: DataTypes.DATEONLY,
      allowNull: false,
    },
  },
  {
    timestamps: true
  });
};
