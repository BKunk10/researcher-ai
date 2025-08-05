"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

export default function ProjectsDashboard() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleCreate = async () => {
    if (!title) return;

    setIsLoading(true);

    try {
      const res = await fetch("/api/projects", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ title, description }),
      });

      if (!res.ok) throw new Error("Failed to create project");

      const data = await res.json();
      alert("Project created: " + data.title);
      setTitle("");
      setDescription("");
    } catch (error) {
      alert("Error creating project.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="space-y-6">
      <div className="flex flex-col gap-2 max-w-lg">
        <h1 className="text-2xl font-bold">Create a New Project</h1>
        <Input
          placeholder="Project title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <Textarea
          placeholder="Optional description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
        <Button onClick={handleCreate} disabled={isLoading}>
          {isLoading ? "Creating..." : "Create Project"}
        </Button>
      </div>
    </div>
  );
}
