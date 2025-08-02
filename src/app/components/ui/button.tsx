import React from "react";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  size?: "sm" | "md" | "lg";
}

export function Button({ children, className, onClick, size, ...props }: ButtonProps) {
  return (
    <button
      className={`px-4 py-2 bg-blue-600 text-white rounded ${className}`}
      onClick={onClick}
      {...props}
    >
      {children}
    </button>
  );
}
// filepath: c:\Users\brady\OneDrive\ai-cad-platform\researcher-ai\src\app\components\ui\button.tsx