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
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-indigo-200 via-white to-blue-100 dark:from-gray-900 dark:via-gray-950 dark:to-gray-900 transition-colors">
        <div className="bg-white/90 dark:bg-gray-950/90 rounded-3xl shadow-2xl p-10 flex flex-col items-center max-w-md w-full border-0 animate-fade-in relative">
          <div className="mb-4 relative flex items-center justify-center">
            <span className="absolute rounded-full bg-gradient-to-tr from-indigo-400 via-blue-300 to-indigo-600 opacity-40 blur-lg w-20 h-20"></span>
            <img
              src="/logo.png"
              alt="ReSearcher AI Logo"
              width={80}
              height={80}
              className="relative rounded-full border-4 border-indigo-400 dark:border-indigo-700 shadow-lg bg-white"
              style={{ zIndex: 1 }}
            />
          </div>
          <h1 className="text-3xl font-extrabold text-indigo-700 dark:text-indigo-300 mb-2 text-center">
            ReSearcher AI
          </h1>
          <p className="text-gray-600 dark:text-gray-400 mb-6 text-center">
            Your collaborative platform for engineering research and CAD projects.
          </p>
          <AuthButtons />
        </div>
        <style jsx global>{`
          @keyframes fade-in {
            from { opacity: 0; transform: translateY(20px);}
            to { opacity: 1; transform: translateY(0);}
          }
          .animate-fade-in {
            animation: fade-in 0.7s cubic-bezier(.4,0,.2,1) both;
          }
        `}</style>
      </div>
    );
  }

  // Logged in: Show user dashboard
  const { user } = session;
  const safeUser = user ?? { name: "User", image: "" };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-blue-200 via-white to-indigo-200 dark:from-gray-900 dark:via-gray-950 dark:to-gray-900 transition-colors">
      <div className="flex justify-end items-center gap-2 w-full max-w-xl mb-4">
        <Avatar>
          <AvatarImage src={safeUser.image ?? ""} />
          <AvatarFallback>{safeUser.name?.[0] ?? "U"}</AvatarFallback>
        </Avatar>
        <span className="font-medium">{safeUser.name}</span>
      </div>
      <WelcomeCard user={safeUser} onCreateProject={handleCreateProject} />
      {/* Add more dashboard content here */}
    </div>
  );
}
