module.exports = (sequelize, DataTypes) => {
  let alias = "Entrenador";
  let columns = {
    dni: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false,
    },
  };

  let config = {
    tableName: "entrenador",
    timestamps: false,
  };

  const Entrenador = sequelize.define(alias, columns, config);

  Entrenador.associate = (models) => {
    Entrenador.belongsTo(models.Empleado, {
      as: "empleado",
      foreignKey: "dni",
    });
  };

  return Entrenador;
};
