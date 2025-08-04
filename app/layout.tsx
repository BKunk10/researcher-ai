import React from "react";
import Sidebar from "../components/Sidebar"; // <-- changed from "@/components/Sidebar"
import './globals.css'; // Make sure this exists and is imported

export const metadata = {
  title: 'Your App Title',
  description: 'Your app description',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="flex min-h-screen bg-muted">
        {/* Sidebar */}
        <Sidebar className="bg-red-500" />

        {/* Main Content */}
        <div className="flex-1 flex flex-col md:ml-64 ml-16 transition-all">
          <main className="flex-1 p-4">{children}</main>
        </div>
      </body>
    </html>
  );
}