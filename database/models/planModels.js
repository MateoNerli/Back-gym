const queryMySQL = require("../config/config").queryMySQL;

exports.getAllPlanes = async () => {
  return await queryMySQL("SELECT * FROM plan");
};

exports.getPlanById = async (id) => {
  return await queryMySQL("SELECT * FROM plan WHERE id = ?", [id]);
};

exports.createPlan = async (plan) => {
  parms = [plan.nombre, plan.descripcion, plan.precio];
  return await queryMySQL(
    "INSERT INTO plan (nombre, descripcion, precio) VALUES (?, ?, ?)",
    parms
  );
};

exports.updatePlan = async (id, plan) => {
  parms = [plan.nombre, plan.descripcion, plan.precio, id];
  return await queryMySQL(
    "UPDATE plan SET nombre = ?, descripcion = ?, precio = ? WHERE id = ?",
    parms
  );
};

exports.delete = async (id) => {
  return await queryMySQL("DELETE FROM plan WHERE id = ?", [id]);
};
