module.exports = (sequelize, DataTypes) => {
  let alias = "PaymenteMeans";
  let columns = {
    idpayment_means: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    description: {
      type: DataTypes.STRING,
    },
    activo: {
      type: DataTypes.INTEGER,
    },
  };
  let config = {
    tableName: "payment_means",
    timestamps: false,
  };

  const PaymenteMeans = sequelize.define(alias, columns, config);

  PaymenteMeans.associate = (models) => {
    PaymenteMeans.belongsTo(models.PaymentPlans, {
      foreignKey: "Payment_Plans_idPayment_Plans",
    });
  };

  return PaymenteMeans;
};
