import { Router } from "express";
import { verifyToken } from "../middlewares/auth.middleware.js";
import { createGroup, getGroupMessages, getUserGroups } from "../controllers/group.controller.js";

const groupRoutes = Router();

groupRoutes.post("/create-group", verifyToken, createGroup);
groupRoutes.get("/get-user-groups", verifyToken, getUserGroups);
groupRoutes.get("/get-group-messages/:channelId", verifyToken, getGroupMessages);

export default groupRoutes;
