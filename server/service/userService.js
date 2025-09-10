import User from "../models/User.js";
import mongoose from "mongoose";

export const createUser = async (data) => {
  const user = new User(data);
  return await user.save();
};

export const getAllUsers = async () => {
  return await User.find();
};

export const getUserById = async (_id) => {
  if (!mongoose.Types.ObjectId.isValid(_id)) {
    throw new Error("Invalid ObjectId");
  }
  return await User.findById(_id);
};

export const updateUser = async (id, data) => {
  return await User.findByIdAndUpdate(id, data, { new: true });
};

export const deleteUser = async (id) => {
  return await User.findByIdAndDelete(id);
};
