module.exports = (sequelize, DataTypes) => {
  let alias = "EnfermedadFicha";
  let columns = {
    codigo_ficha: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      allowNull: false,
    },
    nombre_enfermedad: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  };
  let config = {
    tableName: "enfermedades_ficha",
    timestamps: false,
  };
  const EnfermedadFicha = sequelize.define(alias, columns, config);

  EnfermedadFicha.associate = function (models) {
    EnfermedadFicha.belongsTo(models.FichaMedica, {
      as: "fichaMedica",
      foreignKey: "codigo_ficha",
    });
  };

  return EnfermedadFicha;
};
