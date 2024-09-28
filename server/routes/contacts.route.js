import { Router } from "express";
import { verifyToken } from "../middlewares/auth.middleware.js";
import { searchContacts } from "../controllers/contacts.controller.js";

const contactsRoutes = Router();

contactsRoutes.post("/search", verifyToken, searchContacts);

export default contactsRoutes;
