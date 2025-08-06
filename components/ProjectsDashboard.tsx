"use client";

import { useState } from "react";
import NewProjectModal from "./NewProjectModal";
import { Button } from "./ui/button";

// Eventually replace this with real fetched projects
const mockProjects = [
  { id: 1, title: "AI Model Builder", description: "Train LLMs visually." },
  { id: 2, title: "Robotic Arm", description: "Simulated control dashboard." },
];

export default function ProjectsDashboard() {
  const [projects, setProjects] = useState(mockProjects);

  const handleCreate = async (title: string, description: string) => {
    const newProject = {
      id: Date.now(),
      title,
      description,
    };

    // Simulate adding to backend
    setProjects([newProject, ...projects]);
  };

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold">Your Projects</h1>
        <NewProjectModal onCreate={handleCreate} />
      </div>

      {projects.length === 0 ? (
        <p className="text-gray-500">No projects yet. Create one!</p>
      ) : (
        <ul className="space-y-4">
          {projects.map((project) => (
            <li
              key={project.id}
              className="p-4 border rounded-lg shadow-sm bg-white"
            >
              <h2 className="font-semibold text-lg">{project.title}</h2>
              <p className="text-gray-600">{project.description}</p>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
