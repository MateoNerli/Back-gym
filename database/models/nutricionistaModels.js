modules.export = (sequelize, DataTypes) => {
  let alias = "Nutricionista";
  let columns = {
    dni: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false,
    },
  };

  let configurations = {
    tableName: "nutricionista",
    timestamps: false,
  };

  const Nutricionista = sequelize.define(alias, columns, configurations);

  Nutricionista.associate = (models) => {
    Nutricionista.belongsTo(models.Empleado, {
      as: "empleado",
      foreignKey: "dni",
    });
  };

  return Nutricionista;
};
