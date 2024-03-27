const db = require("../database/models/personasModels");

const personasController = {
  getAllClientes: async (req, res) => {
    try {
      const clientes = await db.getAllClientes();
      let respuesta = {
        meta: {
          status: 200,
          title: "Listado de clientes",
          total: clientes.length,
        },
        data: clientes,
      };
      res.json(respuesta);
    } catch (error) {
      res.json({ error: error.message });
    }
  },

  getClienteById: async (req, res) => {
    try {
      const cliente = await db.getClienteById(req.params.dni);
      res.json(cliente);
    } catch (error) {
      res.json({ error: error.message });
    }
  },

  createCliente: async (req, res) => {
    try {
      const fechaNacimiento = new Date(req.body.fecha_nacimiento);
      if (isNaN(fechaNacimiento.getTime())) {
        throw new Error("Fecha de nacimiento inválida");
      }

      let fechaFin;
      switch (parseInt(req.body.codigo_plan)) {
        case 1: // Plan mensual
          fechaFin = new Date(fechaNacimiento);
          fechaFin.setMonth(fechaFin.getMonth() + 1); // Agregar un mes
          break;
        case 2: // Plan trimestral
          fechaFin = new Date(fechaNacimiento);
          fechaFin.setMonth(fechaFin.getMonth() + 3); // Agregar tres meses
          break;
        case 3: // Plan semestral
          fechaFin = new Date(fechaNacimiento);
          fechaFin.setMonth(fechaFin.getMonth() + 6); // Agregar seis meses
          break;
        case 4: // Plan anual
          fechaFin = new Date(fechaNacimiento);
          fechaFin.setFullYear(fechaFin.getFullYear() + 1); // Agregar un año
          break;
        default:
          throw new Error("Código de plan inválido");
      }

      const clienteData = {
        dni: parseInt(req.body.dni),
        fecha_ini: new Date(), // Puedes asignar la fecha actual directamente si se va a crear ahora
        fecha_fin: fechaFin,
        ocupacion: req.body.ocupacion,
        telefono_emergencia: req.body.telefono_emergencia,
        codigo_plan: parseInt(req.body.codigo_plan),
        codigo_promocion: parseInt(req.body.codigo_promocion),
      };

      const fichaMedicaData = {
        fecha: new Date(), // Puedes asignar la fecha actual directamente si se va a crear ahora
        peso: parseInt(req.body.peso),
        altura: parseInt(req.body.altura),
        med_cintura: parseInt(req.body.med_cintura),
        med_cadera: parseInt(req.body.med_cadera),
        porc_grasa_corporal: parseInt(req.body.porcentaje_grasa),
        objetivo: req.body.objetivo,
        dni_cliente: parseInt(req.body.dni), // Convertir a entero
      };

      const persona = await db.createPersona({
        dni: clienteData.dni,
        nombre: req.body.nombre,
        apellido: req.body.apellido,
        direccion: req.body.direccion,
        edad: parseInt(req.body.edad),
        telefono: req.body.telefono,
        correo: req.body.correo,
        estado: parseInt(req.body.estado),
        fecha_nacimiento: fechaNacimiento,
        sexo: req.body.sexo,
        gimnasio_codigo: 1,
      });

      const cliente = await db.createCliente(clienteData);
      const fichaMedica = await db.createFichaMedica(fichaMedicaData);

      const codigoFicha = fichaMedica.insertId;

      const operacionFicha = await db.createOperacionesFicha({
        codigo_ficha: codigoFicha, // Utilizar el insertId de la ficha médica
        operacion: req.body.operaciones,
      });

      const enfermedadFicha = await db.createEnfermedadesFicha({
        codigo_ficha: codigoFicha, // Utilizar el insertId de la ficha médica
        enfermedad: req.body.enfermedades,
      });

      res.json({ message: "Cliente creado exitosamente" });
    } catch (error) {
      console.error(error.message);
      res.status(500).json({ error: "Error al crear el cliente" });
    }
  },

  updateCliente: async (req, res) => {
    try {
      // Obtener el cliente actual por su DNI
      const clienteActual = await db.getClienteById(req.params.dni);
      console.log("cliente actak", clienteActual);

      console.log("req.body", req.body);

      // Verificar si el cliente actual existe
      if (!clienteActual) {
        return res.status(404).json({ error: "Cliente no encontrado" });
      }

      const personaUpdateResult = await db.updatePersona({
        nombre: req.body.nombre,
        apellido: req.body.apellido,
        direccion: req.body.direccion,
        telefono: req.body.telefono,
        fecha_nacimiento: req.body.fecha_nacimiento,
        correo: req.body.correo,
        sexo: req.body.sexo,
        estado: req.body.estado,
        edad: req.body.edad,
        gimnasio_codigo: 1,
        dni: req.params.dni,
      });

      const clienteUpdateResult = await db.updateCliente({
        fecha_ini: clienteActual[0].fecha_ini,
        fecha_fin: clienteActual[0].fecha_fin,
        ocupacion: req.body.ocupacion,
        telefono_emergencia: req.body.telefono_emergencia,
        codigo_plan: req.body.codigo_plan,
        codigo_promocion: req.body.codigo_promocion,
        dni: req.params.dni,
      });

      // Actualizar la ficha médica del cliente
      const fichaMedicaUpdateResult = await db.updateFichaMedica({
        fecha: clienteActual[0].fecha,
        peso: req.body.peso,
        altura: req.body.altura,
        med_cintura: req.body.med_cintura,
        med_cadera: req.body.med_cadera,
        porc_grasa_corporal: req.body.porc_grasa_corporal,
        objetivo: req.body.objetivo,
        dni_cliente: req.params.dni,
        codigo: clienteActual[0].codigo,
      });

      // Actualizar las operaciones de la ficha médica
      const operacionesFichaUpdateResult = await db.updateOperacionesFicha({
        codigo_ficha: clienteActual[0].codigo,
        operacion: req.body.operacion,
      });

      // Actualizar las enfermedades de la ficha médica
      const enfermedadesFichaUpdateResult = await db.updateEnfermedadesFicha({
        codigo_ficha: clienteActual[0].codigo,
        enfermedad: req.body.enfermedad,
      });

      console.log("fichaMedicaUpdateResult", fichaMedicaUpdateResult);
      console.log("operacionesFichaUpdateResult", operacionesFichaUpdateResult);
      console.log(
        "enfermedadesFichaUpdateResult",
        enfermedadesFichaUpdateResult
      );

      res.json({ message: "Cliente actualizado exitosamente" });
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: "Error al actualizar el cliente" });
    }
  },

  deleteCliente: async (req, res) => {
    try {
      const person = await db.deleteCliente(req.params.dni);
      person.destroy();
      res.json(person);
    } catch (error) {
      res.json({ error: error.message });
    }
  },
};

module.exports = personasController;
