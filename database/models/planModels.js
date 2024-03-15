module.exports = (sequelize, DataTypes) => {
  let alias = "Plan";
  let columns = {
    codigo: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false,
    },
    nombre: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    precio: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    descripcion: {
      type: DataTypes.string,
      allowNull: false,
    },
  };

  let config = {
    tableName: "plan",
    timestamps: false,
  };

  const Plan = sequelize.define(alias, columns, config);

  return Plan;
};
