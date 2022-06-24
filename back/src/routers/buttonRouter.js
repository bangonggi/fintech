import { Router } from "express";
import { UserModel } from "../db/schemas/user";

const buttonRouter = Router();

buttonRouter.put(
  "/buttons/food",
  async (req, res, next) => {
    // await UserModel.
  }
);


export { buttonRouter };