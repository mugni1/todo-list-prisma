import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/_lib/prisma";
export async function GET() {
  try {
    const result = await prisma.todo.findMany();
    return NextResponse.json({ success: true, data: result });
  } catch {
    return NextResponse.json({ success: false });
  }
}
