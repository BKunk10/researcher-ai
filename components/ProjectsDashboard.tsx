// components/ProjectsDashboard.tsx
"use client";

import { useState } from "react";
import NewProjectModal from "./NewProjectModal";

type Project = {
  id: number;
  title: string;
  description: string;
};

export default function ProjectsDashboard() {
  const [projects, setProjects] = useState<Project[]>([]);
  const [nextId, setNextId] = useState(1);

  const handleCreateProject = (title: string, description: string) => {
    const newProject = { id: nextId, title, description };
    setProjects([...projects, newProject]);
    setNextId(nextId + 1);
  };

  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold">Your Projects</h1>
          <p className="text-gray-600">This is where all your research or design projects will live.</p>
        </div>
        <NewProjectModal onCreate={handleCreateProject} />
      </div>

      {/* Dynamic project cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {projects.map((project) => (
          <div
            key={project.id}
            className="border rounded-lg p-4 shadow-sm bg-white"
          >
            <h2 className="font-semibold">{project.title}</h2>
            <p className="text-sm text-gray-500">{project.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
