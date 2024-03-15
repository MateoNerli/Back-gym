module.exports = (sequelize, dataTypes) => {
  let alias = "Product";
  let columns = {
    idproductos: {
      type: dataTypes.INTEGER(11),
      primaryKey: true,
      autoIncrement: true,
      allowNull: false,
    },
    nombre: {
      type: dataTypes.STRING(100),
      allowNull: false,
    },
    descripcion: {
      type: dataTypes.STRING(1000),
      allowNull: false,
    },
    img: {
      type: dataTypes.STRING(100),
      allowNull: true,
    },
    precio: {
      type: dataTypes.DECIMAL(10, 2),
      allowNull: false,
    },
    categoriaId: {
      type: dataTypes.INTEGER,
      allowNull: false,
    },
  };

  let configurations = {};

  const Product = sequelize.define(alias, columns, configurations);

  Product.associate = (models) => {
    Product.belongsTo(models.Categoria, {
      as: "Categoria",
      foreignKey: "categoriaId",
    });
  };

  return Product;
};
