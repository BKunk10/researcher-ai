"use client";

import { useSession } from "next-auth/react";
import { WelcomeCard } from "./components/WelcomeCard";
import { AuthButtons } from "./components/AuthButtons";
import { Avatar, AvatarFallback, AvatarImage } from "./components/ui/avatar";

export default function Home() {
  const { data: session } = useSession();

  const handleCreateProject = () => {
    alert("Create New Project clicked!");
  };

  if (!session) {
    // Logged out: Show landing screen
    return (
      <main className="p-8 text-center space-y-6">
        <h1 className="text-4xl font-bold tracking-tight">ReSearcher AI</h1>
        <p className="text-gray-600 dark:text-gray-300 max-w-xl mx-auto">
          Your collaborative platform for engineering research and CAD projects.
        </p>
        <AuthButtons />
      </main>
    );
  }

  // Logged in: Show user dashboard
  const { user } = session;
  const safeUser = user ?? { name: "User", image: "" };

  return (
    <main className="p-4 space-y-4">
      <div className="flex justify-end items-center gap-2">
        <Avatar>
          <AvatarImage src={safeUser.image ?? ""} />
          <AvatarFallback>{safeUser.name?.[0] ?? "U"}</AvatarFallback>
        </Avatar>
        <span className="font-medium">{safeUser.name}</span>
      </div>
      <WelcomeCard user={safeUser} onCreateProject={handleCreateProject} />
      {/* Add more dashboard content here */}
    </main>
  );
}
