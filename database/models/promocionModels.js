const queryMySQL = require("../config/config").queryMySQL;

exports.getAllPromociones = async () => {
  return await queryMySQL("SELECT * FROM promocion");
};

exports.getPromocionById = async (id) => {
  return await queryMySQL("SELECT * FROM promocion WHERE id = ?", [id]);
};

exports.createPromocion = async (promocion) => {
  parms = [promocion.nombre, promocion.descripcion, promocion.descuento];
  return await queryMySQL(
    "INSERT INTO promocion (nombre, descripcion, descuento) VALUES (?, ?, ?)",
    parms
  );
};

exports.updatePromocion = async (id, promocion) => {
  parms = [promocion.nombre, promocion.descripcion, promocion.descuento, id];
  return await queryMySQL(
    "UPDATE promocion SET nombre = ?, descripcion = ?, descuento = ? WHERE id = ?",
    parms
  );
};

exports.delete = async (id) => {
  return await queryMySQL("DELETE FROM promocion WHERE id = ?", [id]);
};
