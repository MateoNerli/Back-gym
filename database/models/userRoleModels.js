module.exports = (sequelize, DataTypes) => {
  let alias = "UserRole";
  let columns = {
    iduser_roles: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    name: {
      type: DataTypes.STRING,
    },
    type: {
      type: DataTypes.INTEGER,
    },
  };
  let config = {};

  const UserRole = sequelize.define(alias, columns, config);

  UserRole.associate = (models) => {
    UserRole.belongsTo(models.User, {
      foreignKey: "Users_idUsers",
    });
  };

  return UserRole;
};
