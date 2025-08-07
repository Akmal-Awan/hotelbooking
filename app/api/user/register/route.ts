import connectDB from "@/lib/mongoose";
import User from "@/models/user";
import { NextResponse } from "next/server";
import bcrypt from "bcryptjs"; 

export async function POST(req: Request) {
  try {
    await connectDB();

    const { email, password, name, } = await req.json();

    if (!email || !password || !name ) {
      return NextResponse.json({ message: "All fields are required" }, { status: 400 });
    }

    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return NextResponse.json({ message: "User already exists" }, { status: 400 });
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const newUser = new User({
      email,
      password: hashedPassword,
      name,
    });

    await newUser.save();

    return NextResponse.json({ message: "User registered successfully" }, { status: 201 });
  } catch (error) {
    console.error("Register API Error:", error);
    return NextResponse.json({ message: "Server error" }, { status: 500 });
  }
}
