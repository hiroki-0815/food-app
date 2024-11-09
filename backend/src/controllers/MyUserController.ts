// controllers/MyUserController.ts
import { Request, Response, RequestHandler } from "express";
import User from "../models/user";

export const createCurrentUser: RequestHandler = async (req, res) => {
  try {
    const { auth0Id } = req.body;
    const existingUser = await User.findOne({ auth0Id });

    if (existingUser) {
      res.status(200).send();
      return;  
    }

    const newUser = new User(req.body);
    await newUser.save();

    res.status(201).json(newUser.toObject());
    return;  
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Error creating user" });
    return; 
  }
};
