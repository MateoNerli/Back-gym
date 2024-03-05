module.exports = (sequelize, DataTypes) => {
  let alias = "User";
  let columns = {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    usuario: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    nombre: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    correo: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    telefono: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    foto: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    fecha: {
      type: DataTypes.DATE,
      allowNull: true,
    },
    estado: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    rol_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
  };
  let configurations = {
    tableName: "usuarios",
    timestamps: false,
  };

  const User = sequelize.define(alias, columns, configurations);

  User.associate = (models) => {
    User.belongsTo(models.UserRole, {
      as: "UserRole",
      foreignKey: "rol_id",
    });
  };

  return User;
};
