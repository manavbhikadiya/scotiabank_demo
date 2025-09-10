import mongoose, {Schema} from "mongoose";

const userSchema = new mongoose.Schema({
//   _id: { type: Schema.Types.ObjectId},
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  age: { type: Number, required: true }
});

export default mongoose.model("User", userSchema);
