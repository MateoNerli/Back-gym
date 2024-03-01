module.exports = (sequelize, dataTypes) => {
  let alias = "OrderItem";
  let columns = {
    idOrderItems: {
      type: dataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false,
    },

    name: {
      type: dataTypes.STRING(100),
      allowNull: false,
    },
    price: {
      type: dataTypes.DECIMAL(10, 2),
      allowNull: false,
    },
    quantity: {
      type: dataTypes.INTEGER(11),
      allowNull: false,
    },
  };
  let configurations = {};

  const OrderItem = sequelize.define(alias, columns, configurations);

  OrderItem.associate = (models) => {
    OrderItem.belongsTo(models.orderModels, {
      as: "order",
    });

    OrderItem.belongsTo(models.productsModels, {
      as: "product",
    });
  };

  return OrderItem;
};
