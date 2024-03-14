import asyncHandler from "express-async-handler";
import { Router } from "express";
import LoginController from "../Controllers/login";

const router = Router();

router.get("/login", asyncHandler(LoginController.login));

export default router;
