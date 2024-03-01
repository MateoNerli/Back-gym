module.exports = (sequelize, dataTypes) => {
  let alias = "Order";
  let columns = {
    idOrders: {
      type: dataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false,
    },
    total: {
      type: dataTypes.DECIMAL(10, 2),
      allowNull: false,
    },
    paymentMethod: {
      type: dataTypes.STRING(25),
      allowNull: false,
    },
    shippingMethod: {
      type: dataTypes.STRING(25),
      allowNull: true,
    },
  };
  let configurations = {};

  const Order = sequelize.define(alias, columns, configurations);

  Order.associate = (models) => {
    Order.User = Order.belongsTo(models.usersModels, {
      as: "user",
      foreignKey: "userId",
    });
    Order.OrderItems = Order.hasMany(models.orderItemsModels, {
      as: "orderItems",
    });
  };

  return Order;
};
