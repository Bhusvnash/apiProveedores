import { model } from "./model.js";


const regexEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;


export const getAll = async (req, res) => {
  try {
    const results = await model.getAll();
    return res.status(200).json(results);
  } catch (e) {
    return res.status(500).json({ Error: e.message });
  }
};


export const getById = async (req, res) => {
  try {
    const { id } = req.params;

    if (!id || !Number.isInteger(Number(id)) || Number(id) <= 0)
      return res.status(400).json({ Error: "ID inválido" });

    const rpt = await model.getById(id);

    return rpt
      ? res.status(200).json(rpt)
      : res.status(404).json({ Error: "No se encontró el proveedor" });
  } catch (e) {
    return res.status(500).json({ Error: e.message });
  }
};


export const deleteById = async (req, res) => {
  try {
    const { id } = req.params;

    if (!id || !Number.isInteger(Number(id)) || Number(id) <= 0)
      return res.status(400).json({ Error: "ID inválido" });

    const rpt = await model.deleteById(id);

    if (!rpt)
      return res.status(404).json({ Error: "No se encontró el proveedor" });

    return res.status(204).end();
  } catch (e) {
    return res.status(500).json({ Error: e.message });
  }
};


export const create = async (req, res) => {
  const { nit, nombre, contacto, email, telefono, ciudad, estado } =
    req.body ?? {};

  if (!nit || !nombre || !contacto || !email || !ciudad)
    return res.status(400).json({ Error: "Faltan datos obligatorios" });

  if (!regexEmail.test(email))
    return res.status(400).json({ Error: "El email no es válido" });

  const datos = {
    nit,
    nombre,
    contacto,
    email,
    telefono: telefono || null,
    ciudad,
    estado: estado || null,
  };

  try {
    const result = await model.create(datos);

    return res.status(201).json({
      message: "Proveedor registrado correctamente",
      id: result,
    });
  } catch (e) {
    if (e.code === "ER_DUP_ENTRY" || e.message.includes("ya está registrado")) {
      return res.status(409).json({ Error: e.message });
    }

    return res.status(500).json({ Error: e.message });
  }
};

export const updateById = async (req, res) => {
  const { id } = req.params;

  const { nit, nombre, contacto, email, telefono, ciudad, estado } =
    req.body ?? {};

  try {
    if (!id || !Number.isInteger(Number(id)) || Number(id) <= 0)
      return res.status(400).json({ Error: "ID inválido" });

    if (!nit || !nombre || !contacto || !email || !ciudad)
      return res.status(400).json({ Error: "Faltan datos obligatorios" });

    if (!regexEmail.test(email))
      return res.status(400).json({ Error: "El email no es válido" });

    const proveedor = {
      nit,
      nombre,
      contacto,
      email,
      telefono: telefono || null,
      ciudad,
      estado: estado || null,
    };

    const rpt = await model.updateById(id, proveedor);

    return rpt
      ? res.status(200).json({ message: "Proveedor actualizado" })
      : res.status(404).json({ Error: "No se encontró el proveedor" });
  } catch (e) {
    if (e.code === "ER_DUP_ENTRY")
      return res
        .status(409)
        .json({ Error: "El NIT o email ya está registrado" });

    return res.status(500).json({ Error: e.message });
  }
};
