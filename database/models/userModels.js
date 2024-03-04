module.exports = (sequelize, DataTypes) => {
  let alias = "User";
  let columns = {
    idUsers: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    dni: {
      type: DataTypes.INTEGER,
    },
    name: {
      type: DataTypes.STRING,
    },
    lastname: {
      type: DataTypes.STRING,
    },
    email: {
      type: DataTypes.STRING,
    },
    phone: {
      type: DataTypes.STRING,
    },
    password: {
      type: DataTypes.STRING,
    },
    img: {
      type: DataTypes.STRING,
    },
    adress: {
      type: DataTypes.STRING,
    },
    Birth_date: {
      type: DataTypes.DATE,
    },
    reviews: {
      type: DataTypes.STRING,
    },
    sex: {
      type: DataTypes.STRING,
    },
    activo: {
      type: DataTypes.INTEGER,
    },
  };
  let config = {};

  const User = sequelize.define(alias, columns, config);

  User.associate = (models) => {
    User.hasMany(models.Order, {
      as: "orders",
      foreignKey: "Users_idUsers",
    });
  };

  return User;
};
