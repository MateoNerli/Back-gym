module.exports = (sequelize, dataTypes) => {
  let alias = "OrderItem";
  let columns = {
    idorderIterms: {
      type: dataTypes.INTEGER(11),
      primaryKey: true,
      autoIncrement: true,
      allowNull: false,
    },

    nombre: {
      type: dataTypes.STRING(100),
      allowNull: false,
    },
    precio: {
      type: dataTypes.DECIMAL(10, 2),
      allowNull: false,
    },
    cantidad: {
      type: dataTypes.INTEGER(11),
      allowNull: false,
    },
  };
  let configurations = {};

  const OrderItem = sequelize.define(alias, columns, configurations);

  OrderItem.associate = (models) => {
    OrderItem.belongsTo(models.Order, {
      as: "order",
    });

    OrderItem.belongsTo(models.Product, {
      as: "product",
    });
  };

  return OrderItem;
};
