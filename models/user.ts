import mongoose, { Schema, Document, Model } from 'mongoose';

// Define the TypeScript interface for the user
interface IUser extends Document {
  email: string;
  password: string;
}

// Define the schema with types
const userSchema: Schema<IUser> = new Schema({
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
});

// Fix: use `mongoose.models.User` instead of `mongoose.model.user`
const User: Model<IUser> = mongoose.models.User || mongoose.model<IUser>('User', userSchema);

export default User;
