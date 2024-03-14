import asyncHandler from "express-async-handler";
import { Router } from "express";
import DummyController from "../Controllers/test";

const router = Router();

router.get("/", asyncHandler(DummyController.getDummyData));

export default router;
