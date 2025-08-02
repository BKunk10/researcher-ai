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
  <Card className="max-w-xl w-full mx-auto mt-8 shadow-lg rounded-2xl bg-white dark:bg-gray-950">
    <CardHeader>
      <div className="flex flex-row items-center gap-4">
        <Image
          src={user.image || "/default-avatar.png"}
          alt="User Avatar"
          width={48}
          height={48}
          className="rounded-full border shadow"
        />
        <CardTitle className="text-2xl font-semibold">
          Welcome, {user.name || "User"}!
        </CardTitle>
      </div>
    </CardHeader>

    <CardContent>
      <p className="text-gray-700 dark:text-gray-300 mb-4 leading-relaxed">
        ReSearcher AI is your collaborative workspace for engineering research
        and CAD innovation. Manage, test, and iterate on designs faster—with
        built-in AI tools tailored for modern engineering teams.
      </p>
    </CardContent>

    <CardFooter>
      <Button
        className="w-full rounded-xl shadow-md"
        onClick={onCreateProject}
        size="lg"
      >
        Create New Project
      </Button>
    </CardFooter>
  </Card>
);
