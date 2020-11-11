import { Router } from "express";
import { userRouter } from "./controller/user";
import { itemRouter } from "./controller/item";

export const router = Router();

router.use("/users", userRouter);
router.use("/items", itemRouter);
