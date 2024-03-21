module.exports = (sequelize, DataTypes) => {
  let alias = "Cliente";
  let columns = {
    dni: {
      type: DataTypes.STRING,
      primaryKey: true,
      allowNull: false,
    },
    fecha_ini: {
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
    Cliente.belongsTo(models.Persona, {
      as: "persona",
      foreignKey: "dni",
    });
    Cliente.belongsTo(models.Plan, {
      as: "Plan",
      foreignKey: "codigo_plan",
    });
    Cliente.belongsTo(models.Promocion, {
      as: "promocion",
      foreignKey: "codigo_promocion",
    });
    Cliente.hasMany(models.FichaMedica, {
      as: "FichaMedica",
      foreignKey: "dni_cliente",
    });
  };

  return Cliente;
};
