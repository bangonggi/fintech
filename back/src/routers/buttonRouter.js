import { Router } from "express";
import { UserModel } from "../schemas/user";

const buttonRouter = Router();

buttonRouter.put(
  "/buttons/food",
  async (req, res, next) => {
    // await UserModel.
  }
);


export { buttonRouter };