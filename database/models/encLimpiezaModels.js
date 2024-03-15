module.exports = (sequelize, DataTypes) => {
  let alias = "EncLimpieza";
  let columns = {
    dni: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false,
    },
    sueldo: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
  };

  let configurations = {
    tableName: "enc_limpieza",
    timestamps: false,
  };

  const EncLimpieza = sequelize.define(alias, columns, configurations);

  EncLimpieza.associate = (models) => {
    EncLimpieza.belongsTo(models.Empleado, {
      as: "empleado",
      foreignKey: "dni",
    });
  };

  return EncLimpieza;
};
