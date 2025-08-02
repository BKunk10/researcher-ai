"use client";
import React from "react";
import { Card, CardContent, CardHeader, CardTitle, CardFooter } from "./ui/card";
import { Button } from "./ui/button";

interface WelcomeCardProps {
  userName: string;
  onCreateProject: () => void;
}

export const WelcomeCard: React.FC<WelcomeCardProps> = ({ userName, onCreateProject }) => (
  <Card className="max-w-md w-full mx-auto mt-8 shadow-lg rounded-2xl bg-white dark:bg-gray-950">
    <CardHeader>
      <CardTitle className="text-2xl font-bold mb-2">
        Welcome, {userName}!
      </CardTitle>
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