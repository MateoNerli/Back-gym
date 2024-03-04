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
    classes: {
      type: DataTypes.INTEGER,
    },
    price: {
      type: DataTypes.INTEGER,
    },
    activo: {
      type: DataTypes.INTEGER,
    },
  };
  let config = {
    tableName: "payment_plans",
    timestamps: false,
  };

  const PaymentPlans = sequelize.define(alias, columns, config);
  PaymentPlans.associate = (models) => {
    PaymentPlans.belongsTo(models.Activity, {
      foreignKey: "activities_idactivities",
    });
  };
  return PaymentPlans;
};
