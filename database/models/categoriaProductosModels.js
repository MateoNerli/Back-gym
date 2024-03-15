module.exports = (sequelize, DataTypes) => {
  let alias = "Categoria";
  let columns = {
    idcategoriaProductos: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false,
    },
    nombre: {
      type: DataTypes.STRING(45),
      allowNull: false,
    },
    descripcion: {
      type: DataTypes.STRING(200),
      allowNull: false,
    },
  };

  let configurations = {
    tableName: "categoriaproductos",
    timestamps: false,
  };

  const Categoria = sequelize.define(alias, columns, configurations);

  return Categoria;
};
