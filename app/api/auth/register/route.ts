import prismadb from "@/lib/prismadb";
import bcrypt from "bcrypt";
import { NextResponse } from "next/server";

export const POST = async (req: Request) => {
  const { name, email, password } = await req.json();

  // Check if the request body is valid
  if (!name || !email || !password) {
    return NextResponse.json(
      { message: "Invalid request body" },
      { status: 400 }
    );
  }

  try {
    const existingUser = await prismadb.user.findUnique({
      where: { email },
    });

    if (existingUser) {
      return NextResponse.json(
        {
          message: "Email has been already taken by other user",
        },
        { status: 422 }
      );
    }

    const hashedPassword = await bcrypt.hash(password, 12);

    const user = await prismadb.user.create({
      data: {
        name,
        email,
        hashedPassword,
        image: "",
        emailVerified: new Date(),
      },
    });

    return NextResponse.json({ user }, { status: 201 });
  } catch (error) {
    console.error("Error during registration: ", error);
    return NextResponse.json({ message: "Server Error" }, { status: 500 });
  }
};
