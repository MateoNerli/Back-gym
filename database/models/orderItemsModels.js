module.exports = (sequelize, DataTypes) => {
  let alias = "OrderItem";
  let columns = {
    idOrderItems: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false,
    },
    name: {
      type: DataTypes.STRING(100),
      allowNull: false,
    },
    price: {
      type: DataTypes.DECIMAL(10, 2),
      allowNull: false,
    },
    quantity: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
    },
  };
  let configurations = {
    tableName: "orderItems",
    timestamps: false,
  };

  const OrderItem = sequelize.define(alias, columns, configurations);

  OrderItem.associate = (models) => {
    OrderItem.belongsTo(models.Product, {
      foreignKey: "Products_idProducts",
    });
    OrderItem.belongsTo(models.Order, {
      foreignKey: "Orders_idOrders",
    });
  };

  return OrderItem;
};
