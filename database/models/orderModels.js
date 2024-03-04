module.exports = (sequelize, DataTypes) => {
  let alias = "Order";
  let columns = {
    idOrders: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false,
    },
    total: {
      type: DataTypes.DECIMAL(10, 2),
      allowNull: false,
    },
    paymentMethod: {
      type: DataTypes.STRING(25),
      allowNull: false,
    },
    shippingMethod: {
      type: DataTypes.STRING(25),
      allowNull: true,
    },
  };
  let configurations = {};

  const Order = sequelize.define(alias, columns, configurations);

  Order.associate = (models) => {
    Order.belongsTo(models.User, {
      as: "user",
      foreignKey: "Users_idUsers",
    });
    Order.hasMany(models.OrderItem, {
      as: "orderItems",
    });
  };

  return Order;
};
