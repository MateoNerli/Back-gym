module.exports = (sequelize, DataTypes) => {
  let alias = "Activity";
  let columns = {
    idActivities: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    name: {
      type: DataTypes.STRING,
    },
    description: {
      type: DataTypes.STRING,
    },
    duration: {
      type: DataTypes.INTEGER,
    },
    price: {
      type: DataTypes.INTEGER,
    },
  };
  let config = {};

  const Activity = sequelize.define(alias, columns, config);

  Activity.associate = (models) => {};

  return Activity;
};
