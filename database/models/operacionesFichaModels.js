module.exports = (sequelize, DataTypes) => {
  let alias = "OperacionesFicha";
  let columns = {
    codigo_ficha: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      allowNull: false,
    },
    operacion: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  };
  let config = {
    tableName: "operaciones_ficha",
    timestamps: false,
  };
  const OperacionesFicha = sequelize.define(alias, columns, config);

  OperacionesFicha.associate = function (models) {
    OperacionesFicha.belongsTo(models.FichaMedica, {
      as: "fichaMedica",
      foreignKey: "codigo_ficha",
    });
  };

  return OperacionesFicha;
};
