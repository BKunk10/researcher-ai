import React from "react";
import Sidebar from "@/components/Sidebar";

export default function MainLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex min-h-screen bg-muted">
      {/* Sidebar */}
      <Sidebar className="bg-red-500" />

      {/* Main Content */}
      <div className="flex-1 flex flex-col md:ml-64 ml-16 transition-all">
        <main className="flex-1 p-4">{children}</main>
      </div>
    </div>
  );
}