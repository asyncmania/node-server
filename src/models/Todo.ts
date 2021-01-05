import mongoose from "mongoose";
import { ITodo } from "../interfaces/ITodo";

const Todo = new mongoose.Schema(
  {
    title: String,
    description: String,
  },
  { timestamps: true }
);

export default mongoose.model<ITodo & mongoose.Document>("Todo", Todo);
