import * as React from "react";

export function Avatar({ children }: { children: React.ReactNode }) {
  return (
    <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-gray-200 dark:bg-gray-700 overflow-hidden">
      {children}
    </span>
  );
}

export function AvatarImage({ src }: { src?: string }) {
  if (!src) return null;
  return (
    <img
      src={src}
      alt="User avatar"
      className="w-10 h-10 object-cover"
      referrerPolicy="no-referrer"
    />
  );
}

export function AvatarFallback({ children }: { children: React.ReactNode }) {
  return (
    <span className="text-lg font-semibold text-gray-600 dark:text-gray-300 flex items-center justify-center w-10 h-10">
      {children}
    </span>
  );
}