module.exports = (sequelize, dataTypes) => {
  let alias = "Order";
  let columns = {
    idorders: {
      type: dataTypes.INTEGER(11),
      primaryKey: true,
      autoIncrement: true,
      allowNull: false,
    },
    total: {
      type: dataTypes.DECIMAL(10, 2),
      allowNull: false,
    },
    metodoPago: {
      type: dataTypes.STRING(25),
      allowNull: false,
    },
    metodoEnvio: {
      type: dataTypes.STRING(25),
      allowNull: true,
    },
  };
  let configurations = {};

  const Order = sequelize.define(alias, columns, configurations);

  Order.associate = (models) => {
    Order.belongsTo(models.Persona, {
      as: "persona",
      foreignKey: "persona_dni",
    });
    Order.OrderItems = Order.hasMany(models.OrderItem, {
      as: "orderItems",
    });
  };

  return Order;
};
