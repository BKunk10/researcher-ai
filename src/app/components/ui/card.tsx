import React, { ReactNode } from "react";

interface CardProps {
  children: ReactNode;
  className?: string;
}

export function Card({ children, className }: CardProps) {
  return <div className={`p-6 bg-white rounded-xl shadow ${className ?? ""}`}>{children}</div>;
}

export function CardHeader({ children }: { children: ReactNode }) {
  return <div className="mb-4">{children}</div>;
}

export function CardTitle({ children, className }: { children: ReactNode; className?: string }) {
  return <h2 className={`text-xl font-bold ${className ?? ""}`}>{children}</h2>;
}

export function CardContent({ children }: { children: ReactNode }) {
  return <div>{children}</div>;
}

export function CardFooter({ children }: { children: ReactNode }) {
  return <div className="mt-4">{children}</div>;
}
// filepath: c:\Users\brady\OneDrive\ai-cad-platform\researcher-ai\src\app\components\ui\card.tsx