odule.exports = (sequelize, DataTypes) => {
  let alias = "Recepcionista";
  let columns = {
    dni: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false,
    },
  };

  let configurations = {
    tableName: "recepcionista",
    timestamps: false,
  };

  const Recepcionista = sequelize.define(alias, columns, configurations);

  Recepcionista.associate = (models) => {
    Recepcionista.belongsTo(models.Empleado, {
      as: "empleado",
      foreignKey: "dni",
    });
  };

  return Recepcionista;
};
