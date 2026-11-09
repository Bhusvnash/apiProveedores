import db from "../../config/dbconnection.js";

/**
 * @description Funciones que interactúan con tbl_proveedores.
 */
export const model = {
  getAll: async () => {
    const sql = "SELECT * FROM tbl_proveedores";
    const [rows] = await db.query(sql);
    return rows;
  },

  getById: async (id) => {
    const sql = "SELECT * FROM tbl_proveedores WHERE id = ?";
    const [rows] = await db.query(sql, [id]);
    return rows[0] ?? null;
  },

  deleteById: async (id) => {
    const sql = "DELETE FROM tbl_proveedores WHERE id = ?";
    const [result] = await db.query(sql, [id]);
    return result.affectedRows > 0;
  },

  create: async (data) => {
    //  email
    const [emailExiste] = await db.query(
      "SELECT id FROM tbl_proveedores WHERE email = ?",
      [data.email],
    );

    if (emailExiste.length > 0) {
      throw new Error("El email ya está registrado");
    }

    //  NIT
    const [nitExiste] = await db.query(
      "SELECT id FROM tbl_proveedores WHERE nit = ?",
      [data.nit],
    );

    if (nitExiste.length > 0) {
      throw new Error("El nit ya está registrado");
    }

    const proveedor = {
      nit: data.nit,
      nombre: data.nombre,
      contacto: data.contacto,
      email: data.email,
      telefono: data.telefono,
      ciudad: data.ciudad,
      estado: data.estado,
    };

    const sql = "INSERT INTO tbl_proveedores SET ?";
    const [result] = await db.query(sql, [proveedor]);

    return result.insertId;
  },

  updateById: async (id, proveedor) => {
    const sql = `
      UPDATE tbl_proveedores SET
        nit = ?,
        nombre = ?,
        contacto = ?,
        email = ?,
        telefono = ?,
        ciudad = ?,
        estado = ?
      WHERE id = ?
    `;

    const [result] = await db.query(sql, [
      proveedor.nit,
      proveedor.nombre,
      proveedor.contacto,
      proveedor.email,
      proveedor.telefono,
      proveedor.ciudad,
      proveedor.estado,
      id,
    ]);

    return result.affectedRows > 0;
  },
};
