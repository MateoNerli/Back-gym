module.exports = (sequelize, DataTypes) => {
  let alias = "UserRole";
  let columns = {
    id: {
      type: DataTypes.INTEGER(11),
      primaryKey: true,
      autoIncrement: true,
      allowNull: false,
    },
    role_name: {
      type: DataTypes.STRING(50),
      allowNull: false,
    },
    description: {
      type: DataTypes.STRING(255),
      allowNull: false,
    },
  };
  let configurations = {
    tableName: "userrole",
    timestamps: false,
  };

  const UserRole = sequelize.define(alias, columns, configurations);

  return UserRole;
};
