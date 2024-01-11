import prismadb from "@/lib/prismadb";
import { NextResponse } from "next/server";

export const GET = async (req: Request) => {
  try {
    const { email, password } = await req.json();
    const user = await prismadb.user.findUnique({
      where: { email },
    });

    if (!user) {
      return NextResponse.json({ error: "user not found" }, { status: 404 });
    }

    return NextResponse.json({ user }, { status: 200 });
  } catch (error:any) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
};
