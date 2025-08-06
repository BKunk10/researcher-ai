import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/db";

export async function DELETE(req: NextRequest, context: { params: { id: string } }) {
  const id = context.params.id;

  try {
    const deletedProject = await prisma.project.delete({
      where: { id },
    });

    return NextResponse.json(deletedProject);
  } catch (error) {
    console.error("Failed to delete project:", error);
    return NextResponse.json({ error: "Failed to delete project" }, { status: 500 });
  }
}
