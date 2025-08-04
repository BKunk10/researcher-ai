"use client";
import React from "react";
import { LucideIcon, Home, FileText, Settings, Users, BarChart2, Clipboard, Code, GitBranch } from "lucide-react";

// (Optional) If you want to keep Layout, export it as a named export
const navItems = [
  { name: "Dashboard", icon: Home, path: "/dashboard" },
  { name: "Projects", icon: FileText, path: "/projects" },
  { name: "Components", icon: Code, path: "/components" },
  { name: "Testing Lab", icon: Clipboard, path: "/testing-lab" },
  { name: "Analysis", icon: BarChart2, path: "/analysis" },
  { name: "Research", icon: GitBranch, path: "/research" },
  { name: "Collaboration", icon: Users, path: "/collaboration" },
  { name: "Settings", icon: Settings, path: "/settings" },
];

export const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <div className="flex flex-col md:flex-row h-screen">
    <aside className="bg-gray-800 text-white w-full md:w-64 p-4">
      <h1 className="text-xl font-bold mb-4">App Name</h1>
      <nav>
        <ul className="space-y-2">
          {navItems.map((item) => (
            <li key={item.name}>
              <a
                href={item.path}
                className="flex items-center p-2 rounded-md transition-colors hover:bg-gray-600"
              >
                <item.icon className="mr-2" />
                {item.name}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </aside>
    <main className="flex-1 p-4 overflow-y-auto">{children}</main>
  </div>
);

type WelcomeCardProps = {
  user?: {
    name?: string | null;
    email?: string | null;
    image?: string | null;
  };
  onCreateProject: () => void;
};

export const WelcomeCard: React.FC<WelcomeCardProps> = ({ user, onCreateProject }) => (
  <div className="p-6 bg-white rounded shadow text-center">
    <h2 className="text-2xl font-bold mb-2">
      Welcome, {user?.name || "Researcher"}!
    </h2>
    <p className="mb-4">Ready to start a new project?</p>
    <button
      onClick={onCreateProject}
      className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition"
    >
      Create Project
    </button>
  </div>
);