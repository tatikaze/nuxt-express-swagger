import { Router } from "express";
import { User } from "../entity/User";
import { validate } from "class-validator";

export const userRouter = Router();

/**
 * @swagger
 * /api/users:
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
 *       description: create user
 */
userRouter.post("/", async (req, res) => {
  const name = req.body.name;

  const user = new User();
  user.name = name;
  const validateError = await validate(user);
  if (validateError.length > 0) {
    return res.status(400).json({ message: "invalid data" });
  }
  const newUser = await user.save();

  return res.status(200).json({ message: "router root", data: newUser });
});

/**
 * @swagger
 * /api/users:
 *   get:
 *     description: get all user
 *     responses:
 *       200:
 *         description: "get all user"
 *         examples:
 *           result:
 *             message: string
 *             data: {}
 */
userRouter.get("/", async (req, res) => {
  const users = await User.find();
  res.json({ message: "test", data: users });
});
