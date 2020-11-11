import { Router } from "express";

export const userRouter = Router();

/**
 * @swagger
 * /api/user:
 *   post:
 *     description: aaa
 *     parameters:
 *       - in: body
 *         name: name
 *         required: true
 *         type: string
 *         schema:
 *          type: object
 *          properties:
 *            name:
 *              type: string
 *   responses:
 *     200:
 *       description: aa
 */
userRouter.post("/", (req, res) => {
  const name = req.body.name;
  res.json({ message: "router root" + name });
});

userRouter.get("/", (req, res) => {
  res.json({ message: "test" });
});
