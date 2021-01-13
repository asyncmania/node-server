import mongoose from "mongoose";
import { ITodo } from "../interfaces/ITodo";

const Todo = new mongoose.Schema(
  {
    title:{
      type: String,
      required: true
    },
    description: {
      type: String,
      required: true
    }
  },
  { timestamps: true }
);

export default mongoose.model<ITodo & mongoose.Document>("Todo", Todo);
