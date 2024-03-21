module.exports = (sequelize, DataTypes) => {
  let alias = "FichaMedica";
  let columns = {
    codigo: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false,
    },
    fecha: {
      type: DataTypes.DATE,
      allowNull: false,
    },
    peso: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    altura: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    med_cintura: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    med_cadera: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    porc_grasa_corporal: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    objetivo: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    dni_cliente: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
  };

  let configurations = {
    tableName: "fichamedica",
    timestamps: false,
  };

  const FichaMedica = sequelize.define(alias, columns, configurations);

  FichaMedica.associate = (models) => {
    FichaMedica.belongsTo(models.Cliente, {
      as: "cliente",
      foreignKey: "dni_cliente",
    });
    FichaMedica.hasMany(models.EnfermedadFicha, {
      as: "EnfermedadFicha",
      foreignKey: "codigo_ficha",
    });
    FichaMedica.hasMany(models.OperacionesFicha, {
      as: "OperacionesFicha",
      foreignKey: "codigo_ficha",
    });
  };

  return FichaMedica;
};
