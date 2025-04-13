import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/_lib/prisma";
export async function GET(req: NextRequest) {
  const searchParams = req.nextUrl.searchParams;
  const status = searchParams.get("status");
  if (status == "done") {
    try {
      const result = await prisma.todo.findMany({
        where: { status: "done" },
      });
      return NextResponse.json({ success: true, data: result });
    } catch {
      return NextResponse.json({ success: false });
    }
  }
  try {
    const result = await prisma.todo.findMany({
      where: {
        status: "progress",
      },
    });
    return NextResponse.json({ success: true, data: result });
  } catch {
    return NextResponse.json({ success: false });
  }
}
