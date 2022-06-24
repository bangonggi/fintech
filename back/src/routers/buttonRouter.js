import { Router } from "express";
import { UserModel } from "../db/schemas/user";
import { login_required } from "../middlewares/login_required";

const buttonRouter = Router();

buttonRouter.put(
  "/buttons/food",
  login_required,
  async (req, res, next) => {
    try {
      const userId = req.currentUserId
      const user = await UserModel.findOne({ userId })

      if(!user) {
        throw new Error("존재하지 않는 userId입니다.")
      }

      const hp = user.hp;
      const once = user.once;
      const currentMoney = user.currentMoney;
      const updatedHp = hp < 80 ? hp + 20 : 100
      console.log("currentMoney ?", user);
      const updatedUser = await UserModel.findOneAndUpdate(
        { userId },
        { $set: { food: true, hp: updatedHp, currentMoney: user.currentMoney + once } },
        { returnOriginal: false }
      );
      
      const body = {
        success: true,
        payload: updatedUser,
      };

      res.status(200).send(body);

    } catch (error) {
      next(error);
    }
  }
);

buttonRouter.put(
  "/buttons/news",
  login_required,
  async (req, res, next) => {
    try {
      const userId = req.currentUserId
      const user = await UserModel.findOne({ userId })

      if(!user) {
        throw new Error("존재하지 않는 userId입니다.")
      }

      const news = user.news;

      if(news) {
        throw new Error("news 값이 이미 true 입니다.")
      }

      const fp = user.fp;

      const updatedUser = await UserModel.findOneAndUpdate(
        { userId },
        { $set: { news: true, fp: fp + 1 } },
        { returnOriginal: false }
      );
      
      const body = {
        success: true,
        payload: updatedUser,
      };

      res.status(200).send(body);

    } catch (error) {
      next(error);
    }
  }
);

buttonRouter.put(
  "/buttons/game",
  login_required,
  async (req, res, next) => {
    try {
      const userId = req.currentUserId
      const user = await UserModel.findOne({ userId })

      if(!user) {
        throw new Error("존재하지 않는 userId입니다.")
      }

      const game = user.game;

      if(game) {
        throw new Error("game 값이 이미 true 입니다.")
      }

      const ep = user.ep;
      const updatedEp = ep < 90 ? ep + 10 : 100
      const currentMoney = user.currentMoney;
      const once = user.once;

      const updatedUser = await UserModel.findOneAndUpdate(
        { userId },
        { $set: { game: true, ep: updatedEp, currentMoney: currentMoney + once } },
        { returnOriginal: false }
      );
      
      const body = {
        success: true,
        payload: updatedUser,
      };

      res.status(200).send(body);

    } catch (error) {
      next(error);
    }
  }
);

buttonRouter.put(
  "/buttons/cure",
  login_required,
  async (req, res, next) => {
    try {
      const userId = req.currentUserId
      const user = await UserModel.findOne({ userId })

      if(!user) {
        throw new Error("존재하지 않는 userId입니다.")
      }

      const hp = user.hp
      const ep = user.ep

      if(hp > 20 && ep > 10 ) {
        throw new Error("hp > 20, ep > 10 입니다.")
      }

      const updatedHp = hp < 40 ? hp + 60 : 100
      const updatedEp = ep < 50 ? hp + 50 : 100
      const currentMoney = user.currentMoney;
      const once = user.once;

      const updatedUser = await UserModel.findOneAndUpdate(
        { userId },
        { $set: { hp: updatedHp, ep: updatedEp, currentMoney: currentMoney + once*4 } },
        { returnOriginal: false }
      );
      
      const body = {
        success: true,
        payload: updatedUser,
      };

      res.status(200).send(body);

    } catch (error) {
      next(error);
    }
  }
);

export { buttonRouter };