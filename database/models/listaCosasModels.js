module.exports = (sequelize, DataTypes) => {
  let alias = "ListaCosas";
  let columns = {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false,
    },
    nombre: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    descripcion: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    gimnasio_codigo: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
  };

  let config = {
    tableName: "lista_cosas",
    timestamps: false,
  };

  const ListaCosas = sequelize.define(alias, columns, config);

  ListaCosas.associate = function (models) {
    ListaCosas.belongsTo(models.Gimnasio, {
      as: "gimnasio",
      foreignKey: "gimnasio_codigo",
    });
  };

  return ListaCosas;
};
