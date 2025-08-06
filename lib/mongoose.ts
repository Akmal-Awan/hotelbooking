import mongoose from "mongoose";

const connectToDatabase = async (): Promise<void> => {
  try {
    const mongoURI = process.env.MongoURI;

    if (!mongoURI) {
      throw new Error("MongoURI is not defined in environment variables.");
    }

    await mongoose.connect(mongoURI);
    console.log("✅ Connected to MongoDB successfully");
  } catch (error) {
    console.error("❌ Error connecting to MongoDB:", (error as Error).message);
  }
};

export default connectToDatabase;
