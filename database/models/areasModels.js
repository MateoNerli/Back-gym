module.exports = (sequelize, DataTypes) => {
  let alias = "Area";
  let columns = {
    codigo: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    nombre: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    descripcion: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    codigo_gimnasio: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
  };
  let config = {
    tableName: "areas",
    timestamps: false,
  };
  const Area = sequelize.define(alias, columns, config);

  Area.associate = function (models) {
    Area.belongsTo(models.Gimnasio, {
      as: "gimnasio",
      foreignKey: "codigo_gimnasio",
    });
  };

  return Area;
};
