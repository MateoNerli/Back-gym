module.exports = (sequelize, DataTypes) => {
  let alias = "Empleado";
  let columns = {
    dni: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false,
    },
    sueldo: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
  };

  let configurations = {
    tableName: "empleado",
    timestamps: false,
  };

  const Empleado = sequelize.define(alias, columns, configurations);

  Empleado.associate = (models) => {
    Empleado.belongsTo(models.Cliente, {
      as: "persona",
      foreignKey: "dni",
    });
  };

  return Empleado;
};
