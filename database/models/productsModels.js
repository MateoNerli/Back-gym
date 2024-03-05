module.exports = (sequelize, dataTypes) => {
  let alias = "Product";
  let columns = {
    id: {
      type: dataTypes.INTEGER(11),
      primaryKey: true,
      autoIncrement: true,
      allowNull: false,
    },
    name: {
      type: dataTypes.STRING(100),
      allowNull: false,
    },
    description: {
      type: dataTypes.STRING(1000),
      allowNull: false,
    },
    img: {
      type: dataTypes.STRING(100),
      allowNull: true,
    },
    price: {
      type: dataTypes.DECIMAL(10, 2),
      allowNull: false,
    },
    category_id: {
      type: dataTypes.INTEGER,
      allowNull: false,
    },
  };

  let configurations = {};

  const Product = sequelize.define(alias, columns, configurations);

  Product.associate = (models) => {
    Product.belongsTo(models.Categoria, {
      as: "Categoria",
      foreignKey: "category_id",
    });
  };

  return Product;
};
