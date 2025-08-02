"use client";
import React from "react";
import Image from "next/image";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardFooter,
} from "./ui/card";
import { Button } from "./ui/button";
import { signOut } from "next-auth/react";

interface WelcomeCardProps {
  user: {
    name?: string | null;
    image?: string | null;
  };
  onCreateProject: () => void;
}

export const WelcomeCard: React.FC<WelcomeCardProps> = ({
  user,
  onCreateProject,
}) => (
  <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-200 via-white to-indigo-200 dark:from-gray-900 dark:via-gray-950 dark:to-gray-900 transition-colors">
    <Card className="max-w-xl w-full mx-auto shadow-2xl rounded-3xl bg-white/90 dark:bg-gray-950/90 border-0 animate-fade-in">
      <CardHeader>
        <div className="flex flex-row items-center gap-4">
          <div className="relative">
            <span className="absolute -inset-1 rounded-full bg-gradient-to-tr from-indigo-400 via-blue-300 to-indigo-600 opacity-40 blur-lg"></span>
            <Image
              src={user.image || "/default-avatar.png"}
              alt="User Avatar"
              width={56}
              height={56}
              className="relative rounded-full border-4 border-indigo-400 dark:border-indigo-700 shadow-lg"
            />
          </div>
          <div>
            <CardTitle className="text-2xl font-extrabold text-indigo-700 dark:text-indigo-300 drop-shadow">
              Welcome, {user.name || "User"}!
            </CardTitle>
            <p className="text-sm text-gray-500 dark:text-gray-400 mt-1 italic">
              Ready to innovate today?
            </p>
          </div>
        </div>
      </CardHeader>

      <CardContent>
        <div className="mb-4">
          <p className="text-gray-700 dark:text-gray-300 leading-relaxed text-lg">
            <span className="font-semibold text-indigo-600 dark:text-indigo-400">ReSearcher AI</span> is your collaborative workspace for engineering research and CAD innovation.
            <br />
            <span className="text-gray-500 dark:text-gray-400 text-base">
              Manage, test, and iterate on designs faster—with built-in AI tools tailored for modern engineering teams.
            </span>
          </p>
        </div>
        <hr className="my-4 border-indigo-100 dark:border-indigo-900" />
      </CardContent>

      <CardFooter>
        <div className="flex flex-col gap-3 w-full">
          <Button
            className="w-full rounded-xl shadow-md bg-indigo-600 hover:bg-indigo-700 text-white text-lg font-semibold py-3 transition"
            onClick={onCreateProject}
            size="lg"
          >
            Create New Project
          </Button>
          <Button
            className="w-full bg-indigo-50 dark:bg-indigo-900 border border-indigo-200 dark:border-indigo-800 text-indigo-700 dark:text-indigo-100 hover:bg-indigo-100 dark:hover:bg-indigo-800 transition font-semibold"
            onClick={() => signOut()}
          >
            Logout
          </Button>
        </div>
      </CardFooter>
    </Card>
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
