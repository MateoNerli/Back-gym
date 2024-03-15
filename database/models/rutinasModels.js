module.exports = (sequelize, dataTypes) => {
  let alias = "Rutina";
  let columns = {
    codigo: {
      type: dataTypes.INTEGER(11),
      primaryKey: true,
      autoIncrement: true,
      allowNull: false,
    },
    nombre: {
      type: dataTypes.STRING(50),
      allowNull: false,
    },
    dia: {
      type: dataTypes.STRING(1000),
      allowNull: false,
    },
    cliente_dni: {
      type: dataTypes.INTEGER(11),
      allowNull: false,
    },
  };

  let configurations = {};

  const Rutina = sequelize.define(alias, columns, configurations);

  Rutina.associate = (models) => {
    Rutina.belongsTo(models.Cliente, {
      as: "Cliente",
      foreignKey: "cliente_dni",
    });
  };

  return Rutina;
};
