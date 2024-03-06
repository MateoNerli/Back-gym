module.exports = (sequelize, DataTypes) => {
  let alias = "Asistencias";
  let columns = {
    id_asistencia: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false,
    },
    fecha: {
      type: DataTypes.DATE,
      allowNull: false,
    },
    hora_entrada: {
      type: DataTypes.TIME,
      allowNull: false,
    },
    hora_salida: {
      type: DataTypes.TIME,
      allowNull: true,
    },
    id_cliente: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    estado: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
  };

  let configurations = {
    tableName: "asistencias",
    timestamps: false,
  };

  const Asistencias = sequelize.define(alias, columns, configurations);

  Asistencias.associate = (models) => {
    Asistencias.belongsTo(models.Cliente, {
      as: "Cliente",
      foreignKey: "id_cliente",
    });
  };

  return Asistencias;
};
