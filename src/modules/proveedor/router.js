import { Router } from "express";
import * as proveedor from "./controller.js";

const router = Router();

router.get(`/api/proveedor`, proveedor.getAll);
router.get(`/api/proveedor/:id`, proveedor.getById);
router.post(`/api/proveedor`, proveedor.create);
router.put(`/api/proveedor/:id`, proveedor.updateById);
router.delete(`/api/proveedor/:id`, proveedor.deleteById);
export default router;
