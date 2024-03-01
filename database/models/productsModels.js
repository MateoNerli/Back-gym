module.exports = (sequelize, dataTypes) => {
  let alias = "Product";
  let columns = {
    idProducts: {
      type: dataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false,
    },
    name: {
      type: dataTypes.STRING(100),
      allowNull: false,
    },
    category: {
      type: dataTypes.STRING(45),
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
  };

  let configurations = {};

  const Product = sequelize.define(alias, columns, configurations);

  return Product;
};
