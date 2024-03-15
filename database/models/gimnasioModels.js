module.exports = (sequelize, DataTypes) => {
  let alias = "Gimnasio";
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
    telefono: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    direccion: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  };

  let config = {
    tableName: "gimnasio",
    timestamps: false,
  };

  const Gimnasio = sequelize.define(alias, columns, config);

  return Gimnasio;
};
