import asyncHandler from "express-async-handler";
import { Router } from "express";
import login from "../Controllers/login";

const router = Router();

router.post("/login", asyncHandler(login));

export default router;
