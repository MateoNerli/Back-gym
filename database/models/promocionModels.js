module.exports = (sequelize, DataTypes) => {
  let alias = "Promocion";
  let columns = {
    codigo: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false,
    },
    nombre: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    descripcion: {
      type: DataTypes.STRING,
      allowNull: false,
    },

    descuento: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
  };

  let configurations = {
    tableName: "promocion",
    timestamps: false,
  };

  const Promocion = sequelize.define(alias, columns, configurations);

  return Promocion;
};
