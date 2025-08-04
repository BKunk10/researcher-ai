// This file exports types and interfaces used throughout the application.

export interface User {
  name?: string | null;
  image?: string | null;
}

export interface WelcomeCardProps {
  user: User;
  onCreateProject: () => void;
}

export interface SidebarItem {
  label: string;
  icon: React.ReactNode;
  path: string;
}