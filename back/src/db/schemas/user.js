import { Schema, model } from "mongoose";

const UserSchema = new Schema(
  {
    userId: {
      type: String,
      required: true,
    },
    name: {
      type: String,
      required: true,
    },
    charName: {
      type: String,
      required: false,
    },
    goal: {
      type: Number,
      required: false,
    },
    once: {
      type: Number,
      required: false,
    },
    currentMoney: {
      type: Number,
      required: false,
      default: 0,
    },
    countDay: {
      type: Number,
      required: false, 
      default: 1,
    },
    q1: {
      type: String,
      required: false,
    },
    q2: {
      type: String,
      required: false,
    },
    hp: {
      type: Number,
      required: false,
      default: 80,
    },
    ep: {
      type: Number,
      required: false,
      default: 60,
    },
    fp: {
      type: Number,
      required: false,
      default: 0,
    },
    food: {
      type: Boolean,
      required: false,
      default: false,
    },
    news: {
      type: Boolean,
      required: false,
      default: false,
    },
    game: {
      type: Boolean,
      required: false,
      default: false,
    },
  },
  {
    timestamps: true,
  }
);

const UserModel = model("User", UserSchema);

export { UserModel };
