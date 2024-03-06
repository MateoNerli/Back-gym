module.exports = (sequelize, dataTypes) => {
  let alias = "Plan";
  let columns = {
    id: {
      type: dataTypes.INTEGER(11),
      primaryKey: true,
      autoIncrement: true,
      allowNull: false,
    },
    plan: {
      type: dataTypes.STRING(255),
      allowNull: false,
    },
    descripcion: {
      type: dataTypes.STRING(255),
      allowNull: false,
    },
    precio_plan: {
      type: dataTypes.DECIMAL(10, 2),
      allowNull: false,
    },
    condicion: {
      type: dataTypes.STRING(20),
      allowNull: false,
    },
    imagen: {
      type: dataTypes.STRING(100),
      allowNull: true,
    },
    estado: {
      type: dataTypes.INTEGER(11),
      allowNull: false,
    },
    id_user: {
      type: dataTypes.INTEGER,
      allowNull: false,
    },
  };

  let configurations = {
    tableName: "planes",
    timestamps: false,
  };

  const Plan = sequelize.define(alias, columns, configurations);

  return Plan;
};
