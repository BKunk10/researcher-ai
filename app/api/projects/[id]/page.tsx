import { prisma } from "@/lib/db";
import { notFound } from "next/navigation";

interface Props {
  params: { id: string };
}

export default async function ProjectPage({ params }: Props) {
  const project = await prisma.project.findUnique({
    where: { id: params.id },
  });

  if (!project) return notFound();

  return (
    <div className="max-w-2xl mx-auto py-10 space-y-4">
      <h1 className="text-3xl font-bold">{project.title}</h1>
      <p className="text-muted-foreground">{project.description}</p>
      <p className="text-sm text-muted-foreground">
        Created at: {new Date(project.createdAt).toLocaleString()}
      </p>
    </div>
  );
}
