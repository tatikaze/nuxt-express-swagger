import { Router } from "express";

export const itemRouter = Router();

/**
 * @swagger
 * /api/items:
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
itemRouter.post("/", (req, res) => {
  const name = req.body.name;
  res.json({ message: "router root" + name });
});

itemRouter.get("/", (req, res) => {
  const env = process.env.TEST
  res.json({ message: "this is item get" + env });
});

