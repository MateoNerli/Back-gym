module.exports = (sequelize, DataTypes) => {
  let alias = "Categoria";
  let columns = {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false,
    },
    nombre: {
      type: DataTypes.STRING(100),
      allowNull: false,
    },
    descripcion: {
      type: DataTypes.STRING(1000),
      allowNull: false,
    },
  };

  let configurations = {
    tableName: "categoria",
    timestamps: false,
  };

  const Categoria = sequelize.define(alias, columns, configurations);

  return Categoria;
};
