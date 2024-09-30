import { Router } from "express";
import { verifyToken } from "../middlewares/auth.middleware.js";
import { getContactsForDM, searchContacts } from "../controllers/contacts.controller.js";

const contactsRoutes = Router();

contactsRoutes.post("/search", verifyToken, searchContacts);
contactsRoutes.get("/get-contacts-for-dm", verifyToken, getContactsForDM);

export default contactsRoutes;
