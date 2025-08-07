import { NextRequest, NextResponse } from 'next/server';
import { prisma } from '../../../../lib/prisma';

export default async function handler(
  req: NextRequest,
  { params }: { params: { id: string } }
) {
  const id = params.id;

  if (req.method === 'PUT') {
    const body = await req.json();
    try {
      const updated = await prisma.project.update({
        where: { id },
        data: body,
      });
      return NextResponse.json(updated);
    } catch {
      return NextResponse.json({ error: 'Failed to update project' }, { status: 500 });
    }
  }

  if (req.method === 'DELETE') {
    try {
      await prisma.project.delete({
        where: { id },
      });
      return NextResponse.json({ success: true });
    } catch {
      return NextResponse.json({ error: 'Failed to delete project' }, { status: 500 });
    }
  }

  return NextResponse.json({ error: 'Method not allowed' }, { status: 405 });
}
