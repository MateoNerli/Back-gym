const queryMySQL = require("../config/config").queryMySQL;

exports.getAllClientes = () => {
  return queryMySQL(
    `select * from persona p
  inner join cliente c on c.dni = p.dni
  inner join fichamedica f on f.dni_cliente = c.dni
  inner join enfermedades_ficha ef on ef.codigo_ficha = f.codigo
  inner join operaciones_ficha o on o.codigo_ficha = f.codigo;`,
    []
  );
};

exports.getClienteById = (dni) => {
  return queryMySQL(
    `select * from persona p
  inner join cliente c on c.dni = p.dni
  inner join fichamedica f on f.dni_cliente = c.dni
  inner join enfermedades_ficha ef on ef.codigo_ficha = f.codigo
  inner join operaciones_ficha o on o.codigo_ficha = f.codigo
  where p.dni = ?;`,
    [dni]
  );
};

exports.createPersona = (persona) => {
  parms = [
    persona.dni,
    persona.nombre,
    persona.apellido,
    persona.direccion,
    persona.telefono,
    persona.fecha_nacimiento,
    persona.correo,
    persona.sexo,
    persona.estado,
    persona.edad,
    persona.gimnasio_codigo,
  ];
  return queryMySQL(
    `insert into persona (dni, nombre, apellido, direccion, telefono, fecha_nacimiento, correo, sexo, estado, edad, gimnasio_codigo) values (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?);`,
    parms
  );
};

exports.createCliente = (cliente) => {
  parms = [
    cliente.dni,
    cliente.fecha_ini,
    cliente.fecha_fin,
    cliente.ocupacion,
    cliente.telefono_emergencia,
    cliente.codigo_plan,
    cliente.codigo_promocion,
  ];
  return queryMySQL(
    `insert into cliente (dni, fecha_ini, fecha_fin, ocupacion, telefono_emergencia, codigo_plan, codigo_promocion) values (?, ?, ?, ?, ?, ?, ?);`,
    parms
  );
};

exports.createFichaMedica = (ficha) => {
  parms = [
    ficha.fecha,
    ficha.peso,
    ficha.altura,
    ficha.med_cintura,
    ficha.med_cadera,
    ficha.porc_grasa_corporal,
    ficha.objetivo,
    ficha.dni_cliente,
  ];
  return queryMySQL(
    `insert into fichamedica (fecha, peso, altura, med_cintura, med_cadera, porc_grasa_corporal, objetivo, dni_cliente) values (?, ?, ?, ?, ?, ?, ?, ?);`,
    parms
  );
};

exports.createOperacionesFicha = (operacion) => {
  parms = [operacion.codigo_ficha, operacion.operacion];
  return queryMySQL(
    `insert into operaciones_ficha (codigo_ficha, operacion) values (?, ?);`,
    parms
  );
};

exports.createEnfermedadesFicha = (enfermedad) => {
  parms = [enfermedad.codigo_ficha, enfermedad.enfermedad];
  return queryMySQL(
    `insert into enfermedades_ficha (codigo_ficha, enfermedad) values (?, ?);`,
    parms
  );
};

exports.updatePersona = (persona) => {
  parms = [
    persona.nombre,
    persona.apellido,
    persona.direccion,
    persona.telefono,
    persona.fecha_nacimiento,
    persona.correo,
    persona.sexo,
    persona.estado,
    persona.edad,
    persona.gimnasio_codigo,
    persona.dni,
  ];
  return queryMySQL(
    `update persona set nombre = ?, apellido = ?, direccion = ?, telefono = ?, fecha_nacimiento = ?, correo = ?, sexo = ?, estado = ?, edad = ?, gimnasio_codigo = ? where dni = ?;`,
    parms
  );
};

exports.updateCliente = (cliente) => {
  parms = [
    cliente.fecha_ini,
    cliente.fecha_fin,
    cliente.ocupacion,
    cliente.telefono_emergencia,
    cliente.codigo_plan,
    cliente.codigo_promocion,
    cliente.dni,
  ];
  return queryMySQL(
    `update cliente set fecha_ini = ?, fecha_fin = ?, ocupacion = ?, telefono_emergencia = ?, codigo_plan = ?, codigo_promocion = ? where dni = ?;`,
    parms
  );
};

exports.updateFichaMedica = (ficha) => {
  parms = [
    ficha.fecha,
    ficha.peso,
    ficha.altura,
    ficha.med_cintura,
    ficha.med_cadera,
    ficha.porc_grasa_corporal,
    ficha.objetivo,
    ficha.dni_cliente,
    ficha.codigo,
  ];
  return queryMySQL(
    `update fichamedica set fecha = ?, peso = ?, altura = ?, med_cintura = ?, med_cadera = ?, porc_grasa_corporal = ?, objetivo = ?, dni_cliente = ? where codigo = ?;`,
    parms
  );
};

exports.updateOperacionesFicha = (operacion) => {
  parms = [operacion.operacion, operacion.codigo_ficha];
  return queryMySQL(
    `update operaciones_ficha set operacion = ? where codigo_ficha = ?;`,
    parms
  );
};

exports.updateEnfermedadesFicha = (enfermedad) => {
  parms = [enfermedad.enfermedad, enfermedad.codigo_ficha];
  return queryMySQL(
    `update enfermedades_ficha set enfermedad = ? where codigo_ficha = ?;`,
    parms
  );
};

exports.deleteCliente = (dni) => {
  return queryMySQL(`delete from persona where dni = ?;`, [dni]);
};
