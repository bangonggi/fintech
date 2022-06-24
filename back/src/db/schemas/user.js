import { Schema, model } from "mongoose";

const UserSchema = new Schema(
  {
    id: {
      type: String,
      required: true,
    },
    name: {
      type: String,
      required: true,
    },
    goal: {
      type: Number,
      required: true,
    },
    once: {
      type: Number,
      required: true,
    },
    currentMoney: {
      type: Number,
      required: true,
      default: 0,
    },
    countDay: {
      type: Number,
      required: true, 
      default: 1,
    },
    q1: {
      type: String,
      required: true,
    },
    q2: {
      type: String,
      required: true,
    },
    hp: {
      type: Number,
      required: true,
      default: 80,
    },
    ep: {
      type: Number,
      required: true,
      default: 60,
    },
    fp: {
      type: Number,
      required: true,
      default: 0,
    },
    food: {
      type: Boolean,
      required: true,
      default: false,
    },
    news: {
      type: Boolean,
      required: true,
      default: false,
    },
    game: {
      type: Boolean,
      required: true,
      default: false,
    },
  },
  {
    timestamps: true,
  }
);

const UserModel = model("User", UserSchema);

export { UserModel };
