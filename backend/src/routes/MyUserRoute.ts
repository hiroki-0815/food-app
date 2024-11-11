import express from "express";
import { createCurrentUser } from "../controllers/MyUserController";
import { jwtCheck } from "../middleware/auth";

const router = express.Router();

router.post("/",jwtCheck, createCurrentUser);

export default router;
