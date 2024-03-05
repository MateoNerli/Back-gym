module.exports = (sequelize, DataTypes) => {
  let alias = "DetallePlan";
  let columns = {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    id_cliente: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    id_plan: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    fecha: {
      type: DataTypes.DATE,
      allowNull: false,
    },
    hora: {
      type: DataTypes.TIME,
      allowNull: false,
    },
    fecha_venc: {
      type: DataTypes.DATE,
      allowNull: false,
    },
    fecha_limit: {
      type: DataTypes.DATE,
      allowNull: false,
    },
    id_user: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    estado: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
  };
  let configurations = {
    tableName: "detalle_planes",
    timestamps: false,
  };

  const DetallePlan = sequelize.define(alias, columns, configurations);

  DetallePlan.associate = (models) => {
    DetallePlan.belongsTo(models.Cliente, {
      as: "Cliente",
      foreignKey: "id_cliente",
    });
    DetallePlan.belongsTo(models.Plan, {
      as: "Plan",
      foreignKey: "id_plan",
    });
    DetallePlan.belongsTo(models.User, {
      as: "User",
      foreignKey: "id_user",
    });
  };
  return DetallePlan;
};
