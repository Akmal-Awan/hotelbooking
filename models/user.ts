import mongoose, { Schema, Document, Model } from 'mongoose';
export interface IUser extends Document {
  email: string;
  password: string;
  name: string;
}

const userSchema: Schema<IUser> = new Schema({
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  name: { type: String, required: true },
});

const User: Model<IUser> = mongoose.models.User || mongoose.model<IUser>('User', userSchema);

export default User;
