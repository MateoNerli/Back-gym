module.exports = (sequelize, dataTypes) => {
  let alias = "Rutina";
  let columns = {
    id: {
      type: dataTypes.INTEGER(11),
      primaryKey: true,
      autoIncrement: true,
      allowNull: false,
    },
    dia: {
      type: dataTypes.STRING(50),
      allowNull: false,
    },
    descripcion: {
      type: dataTypes.STRING(1000),
      allowNull: false,
    },
    id_user: {
      type: dataTypes.INTEGER(11),
      allowNull: false,
    },
    estado: {
      type: dataTypes.INTEGER(11),
      allowNull: false,
    },
  };

  let configurations = {};

  const Rutina = sequelize.define(alias, columns, configurations);

  Rutina.associate = (models) => {
    Rutina.belongsTo(models.User, {
      as: "user",
      foreignKey: "id_user",
    });
  };

  return Rutina;
};
