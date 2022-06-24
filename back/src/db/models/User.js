import { UserModel } from "../schemas/user";

class User {
  static async create({ newUser }) {
    const createdNewUser = await UserModel.create(newUser);
    return createdNewUser;
  }

  static async findById({ userId }) {
    const user = await UserModel.findOne({ id: userId });
    return user;
  }

  static async findAll() {
    const users = await UserModel.find({});
    return users;
  }

  static async update({ userId, toUpdate }) { 
    const updatedUser = await UserModel.findOneAndUpdate(
      { id: userId },
      { $set: toUpdate },
      { returnOriginal: false },
    )
      .lean();

    return updatedUser;
  }
}

export { User };
