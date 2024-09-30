import { Router } from "express";
import { verifyToken } from "../middlewares/auth.middleware.js";
import { getAllContacts, getContactsForDM, searchContacts } from "../controllers/contacts.controller.js";

const contactsRoutes = Router();

contactsRoutes.post("/search", verifyToken, searchContacts);
contactsRoutes.get("/get-contacts-for-dm", verifyToken, getContactsForDM);
contactsRoutes.get("/get-all-contacts", verifyToken, getAllContacts);

export default contactsRoutes;
