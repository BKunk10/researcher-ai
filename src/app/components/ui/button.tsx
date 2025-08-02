import React from "react";

export function Button({ children, className, onClick, size }: any) {
  return (
    <button
      className={`px-4 py-2 bg-blue-600 text-white rounded ${className}`}
      onClick={onClick}
    >
      {children}
    </button>
  );
}
// filepath: c:\Users\brady\OneDrive\ai-cad-platform\researcher-ai\src\app\components\ui\button.tsx