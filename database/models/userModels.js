module.exports = (sequelize, DataTypes) => {
  let alias = "User";
  let columns = {
    id: {
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
      type: DataTypes.INTEGER,
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
      type: DataTypes.INTEGER,
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
    User.hasMany(models.Roles, {
      as: "userRole",
      foreignKey: "Users_idUsers",
    });
    User.belongsToMany(models.Membership, {
      as: "memberships",
      through: "Users_has_Memberships",
      foreignKey: "Users_idUsers",
      otherKey: "Memberships_idMemberships",
    });
  };
  return User;
};
