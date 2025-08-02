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
  user?: {
    name?: string | null;
    image?: string | null;
  };
  onCreateProject: () => void;
}

export const WelcomeCard: React.FC<WelcomeCardProps> = ({
  user,
  onCreateProject,
}) => (
  <Card className="max-w-md w-full mx-auto mt-8 shadow-lg rounded-2xl bg-white dark:bg-gray-950">
    <CardHeader>
      <div>
        <CardTitle className="text-2xl font-bold mb-1">
          Welcome, {user?.name || "Guest"}!
        </CardTitle>
      </div>
      {user?.image && (
        <Image
          src={user.image}
          alt="User Avatar"
          width={40}
          height={40}
          className="rounded-full border"
        />
      )}
    </CardHeader>
    <CardContent>
      <p className="text-gray-700 dark:text-gray-300 mb-4">
        ReSearcher AI is your collaborative platform for engineering research and CAD projects. Seamlessly manage, share, and innovate with powerful AI-driven tools designed for modern engineering teams.
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
