module.exports = (sequelize, DataTypes) => {
  let alias = "Cliente";
  let columns = {
    dni: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false,
    },
    fecha_inicio: {
      type: DataTypes.DATE,
      allowNull: false,
    },
    fecha_fin: {
      type: DataTypes.DATE,
      allowNull: false,
    },
    ocupacion: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    telefono_emergencia: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    codigo_plan: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    codigo_promocion: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
  };

  let configurations = {
    tableName: "cliente",
    timestamps: false,
  };

  const Cliente = sequelize.define(alias, columns, configurations);

  Cliente.associate = (models) => {
    Cliente.belongsTo(models.Plan, {
      as: "Plan",
      foreignKey: "codigo_plan",
    });
    Cliente.belongsTo(models.Promocion, {
      as: "promocion",
      foreignKey: "codigo_promocion",
    });
  };

  return Cliente;
};
