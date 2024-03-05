module.exports = (sequelize, DataTypes) => {
  let alias = "Cliente";
  let columns = {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false,
    },
    dni: {
      type: DataTypes.STRING(10),
      allowNull: false,
    },
    nombre: {
      type: DataTypes.STRING(100),
      allowNull: false,
    },
    telefono: {
      type: DataTypes.STRING(100),
      allowNull: false,
    },
    direccion: {
      type: DataTypes.STRING(100),
      allowNull: false,
    },
    fecha: {
      type: DataTypes.DATE,
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
    tableName: "clientes",
    timestamps: false,
  };

  const Cliente = sequelize.define(alias, columns, configurations);

  Cliente.associate = (models) => {
    Cliente.belongsTo(models.User, {
      foreignKey: "id_user",
      as: "user",
    });
  };

  return Cliente;
};
