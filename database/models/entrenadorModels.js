module.exports = (sequelize, DataTypes) => {
  let alias = "Entrenador";
  let columns = {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false,
    },
    nombre: {
      type: DataTypes.STRING(100),
      allowNull: false,
    },
    apellido: {
      type: DataTypes.STRING(100),
      allowNull: false,
    },
    telefono: {
      type: DataTypes.STRING(100),
      allowNull: false,
    },
    correo: {
      type: DataTypes.STRING(100),
      allowNull: false,
    },
    direccion: {
      type: DataTypes.STRING(100),
      allowNull: false,
    },
    estado: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    id_user: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
  };

  let configurations = {
    tableName: "entrenador",
    timestamps: false,
  };

  const Entrenador = sequelize.define(alias, columns, configurations);

  Entrenador.associate = (models) => {
    Entrenador.belongsTo(models.User, {
      as: "user",
      foreignKey: "id_user",
    });
  };

  return Entrenador;
};
