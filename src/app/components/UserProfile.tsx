"use client";
import { useSession, signOut } from "next-auth/react";
import Image from "next/image";

export const UserProfile = () => {
  const { data: session } = useSession();

  if (!session) return null;

  return (
    <div className="flex items-center gap-4 p-4 bg-white rounded-lg shadow">
      {session.user?.image && (
        <Image
          src={session.user.image}
          alt="User Avatar"
          width={40}
          height={40}
          className="rounded-full"
        />
      )}
      <div>
        <p className="font-medium">{session.user?.name}</p>
        <button
          onClick={() => signOut()}
          className="text-sm text-red-500 hover:underline"
        >
          Sign out
        </button>
      </div>
    </div>
  );
};
