"use client";
import React from "react";
import { useRouter } from "next/router";
import { LucideIcon, Home, FileText, Settings, Users, BarChart2, Clipboard, Code, GitBranch } from "lucide-react";

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

const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const router = useRouter();
  const currentPath = router.pathname;

  return (
    <div className="flex flex-col md:flex-row h-screen">
      <aside className="bg-gray-800 text-white w-full md:w-64 p-4">
        <h1 className="text-xl font-bold mb-4">App Name</h1>
        <nav>
          <ul className="space-y-2">
            {navItems.map((item) => {
              const isActive = currentPath === item.path;
              return (
                <li key={item.name}>
                  <a
                    href={item.path}
                    className={`flex items-center p-2 rounded-md transition-colors ${
                      isActive ? "bg-gray-700" : "hover:bg-gray-600"
                    }`}
                  >
                    <item.icon className="mr-2" />
                    {item.name}
                  </a>
                </li>
              );
            })}
          </ul>
        </nav>
      </aside>
      <main className="flex-1 p-4 overflow-y-auto">{children}</main>
    </div>
  );
};

export default Layout;