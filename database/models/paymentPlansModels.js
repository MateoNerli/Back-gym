module.exports = (sequelize, DataTypes) => {
  let alias = "PaymentPlans";
  let columns = {
    idpayment_plans: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    description: {
      type: DataTypes.STRING,
    },
    class: {
      type: DataTypes.INTEGER,
    },
    price: {
      type: DataTypes.INTEGER,
    },
    activo: {
      type: DataTypes.INTEGER,
    },
  };
  let config = {};

  const PaymentPlans = sequelize.define(alias, columns, config);
  PaymentPlans.associate = (models) => {
    PaymentPlans.belongsTo(models.Activity, {
      foreignKey: "activities_idactivities",
    });
  };
  return PaymentPlans;
};
