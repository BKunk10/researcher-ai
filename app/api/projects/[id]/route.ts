import { prisma } from "@/lib/db";
import { NextResponse } from "next/server";

export async function DELETE(
  req: Request,
  context: { params: { id: string } }
) {
  const id = context.params.id;

  if (!id) {
    return NextResponse.json({ error: "Missing project ID" }, { status: 400 });
  }

  try {
    const deleted = await prisma.project.delete({
      where: { id },
    });

    return NextResponse.json(deleted);
  } catch (error) {
    console.error("DELETE error:", error);
    return NextResponse.json({ error: "Failed to delete project" }, { status: 500 });
  }
}

export async function PUT(
  req: Request,
  context: { params: { id: string } }
) {
  const id = context.params.id;
  const body = await req.json();
  const { title, description } = body;

  try {
    const updated = await prisma.project.update({
      where: { id },
      data: {
        title,
        description,
      },
    });

    return NextResponse.json(updated);
  } catch (error) {
    console.error("PUT error:", error);
    return NextResponse.json({ error: "Failed to update project" }, { status: 500 });
  }
}
