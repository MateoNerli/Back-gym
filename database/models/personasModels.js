module.exports = (sequelize, DataTypes) => {
  let alias = "Persona";
  let columns = {
    dni: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false,
    },
    nombre: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    apellido: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    direccion: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    telefono: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    correo: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    estado: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },

    fecha_nacimiento: {
      type: DataTypes.DATE,
      allowNull: false,
    },
    sexo: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    gimnasio_codigo: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
  };

  let config = {
    tableName: "persona",
    timestamps: false,
  };

  const Persona = sequelize.define(alias, columns, config);

  Persona.associate = (models) => {
    Persona.belongsTo(models.Gimnasio, {
      as: "gimnasio",
      foreignKey: "gimnasio_codigo",
    });
  };

  return Persona;
};
