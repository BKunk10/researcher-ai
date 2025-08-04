// Sidebar.tsx
"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  LayoutDashboard,
  Folder,
  Box,
  FlaskConical,
  BarChart3,
  BookOpen,
  Users,
  Settings,
} from "lucide-react";
import { cn } from "../lib/utils";

const navItems = [
  { name: "Dashboard", href: "/dashboard", icon: LayoutDashboard },
  { name: "Projects", href: "/projects", icon: Folder },
  { name: "Components", href: "/components", icon: Box },
  { name: "Testing Lab", href: "/testing-lab", icon: FlaskConical },
  { name: "Analysis", href: "/analysis", icon: BarChart3 },
  { name: "Research", href: "/research", icon: BookOpen },
  { name: "Collaboration", href: "/collaboration", icon: Users },
  { name: "Settings", href: "/settings", icon: Settings },
];

type SidebarProps = {
  className?: string;
};

export default function Sidebar({ className }: SidebarProps) {
  const pathname = usePathname() ?? ""; // Fix: default to empty string

  return (
    <aside
      className={cn(
        // Remove: "fixed z-30 inset-y-0 left-0"
        "w-16 md:w-64 bg-background border-r border-border flex flex-col transition-all",
        className
      )}
    >
      <div className="flex items-center justify-center md:justify-start h-16 px-4 border-b border-border">
        <span className="font-bold text-lg tracking-tight">AI CAD</span>
      </div>
      <nav className="flex-1 flex flex-col gap-2 mt-4 px-2">
        {navItems.map((item) => {
          const isActive = pathname.startsWith(item.href);
          return (
            <Link
              key={item.name}
              href={item.href}
              className={cn(
                "group flex items-center gap-3 rounded-md px-3 py-2 text-sm font-medium transition-colors",
                isActive
                  ? "bg-primary text-primary-foreground"
                  : "text-muted-foreground hover:bg-accent hover:text-accent-foreground"
              )}
            >
              <item.icon
                className={cn(
                  "h-5 w-5 transition-colors",
                  isActive
                    ? "text-primary-foreground"
                    : "text-muted-foreground group-hover:text-accent-foreground"
                )}
              />
              <span className="hidden md:inline">{item.name}</span>
            </Link>
          );
        })}
      </nav>
    </aside>
  );
}
