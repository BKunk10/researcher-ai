import React from "react";

export function Card({ children, className }: any) {
  return <div className={`p-6 bg-white rounded-xl shadow ${className}`}>{children}</div>;
}
export function CardHeader({ children }: any) {
  return <div className="mb-4">{children}</div>;
}
export function CardTitle({ children, className }: any) {
  return <h2 className={`text-xl font-bold ${className}`}>{children}</h2>;
}
export function CardContent({ children }: any) {
  return <div>{children}</div>;
}
export function CardFooter({ children }: any) {
  return <div className="mt-4">{children}</div>;
}
// filepath: c:\Users\brady\OneDrive\ai-cad-platform\researcher-ai\src\app\components\ui\card.tsx