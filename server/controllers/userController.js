import * as userService from "../service/userService.js";


export const createUser = async (req, res) => {
  try {
    const user = await userService.createUser(req.body);
    res.status(201).json(user);
  } catch (error) {
    const errorMessage = {
      message: "Error occured while creating the user",
      error: error,
      status: error.status,
    };
    res.send(errorMessage);
  }
};

export const updateUser = async (req, res) => {
  try {
    const user = await userService.updateUser(req.params.id, req.body);
    res.json(user);
  } catch (error) {
    const errorMessage = {
      message: "Error occured while updating the user",
      error: error,
      status: error.status,
    };
    res.send(errorMessage);
  }
};

export const deleteUser = async (req, res) => {
  try {
    await userService.deleteUser(req.params.id);
    res.json({ message: "User deleted" });
  } catch (error) {
    const errorMessage = {
      message: "Error occured while deleting the user",
      error: error,
      status: error.status,
    };
    res.send(errorMessage);
  }
};

export const getUsers = async (req, res) => {
  try {
    const users = await userService.getAllUsers();
    res.json(users);
  } catch (error) {
    const errorMessage = {
      message: "Error occured while getting the user",
      error: error,
      status: error.status,
    };
    res.send(errorMessage);
  }
};

export const getUser = async (req, res) => {
  try {
    const user = await userService.getUserById(req.params.id);
    console.log("Dasdsdasdad", user)
    if (!user) return res.status(404).json({ message: "User not found" });
    res.json(user);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};