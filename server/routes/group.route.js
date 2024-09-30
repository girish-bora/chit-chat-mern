import { Router } from "express";
import { verifyToken } from "../middlewares/auth.middleware.js";
import { createGroup } from "../controllers/group.controller.js";

const groupRoutes = Router();

groupRoutes.post("/create-group", verifyToken, createGroup);

export default groupRoutes;
