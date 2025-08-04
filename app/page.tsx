"use client";
export const dynamic = "force-dynamic";
import { useSession, signIn, signOut } from "next-auth/react";
import { WelcomeCard } from "../components/WelcomeCard";

export default function DashboardPage() {
  const { data: session, status } = useSession();

  if (status === "loading") {
    return <div className="text-center mt-10">Loading...</div>;
  }

  if (!session) {
    return (
      <div className="flex flex-col items-center justify-center h-screen">
        <h1 className="text-3xl font-bold mb-6">Sign in to Researcher AI</h1>
        <button
          onClick={() => signIn("github")}
          className="px-6 py-2 bg-black text-white rounded hover:bg-gray-800 transition"
        >
          Sign in with GitHub
        </button>
      </div>
    );
  }

  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <WelcomeCard user={session.user!} onCreateProject={() => {}} />
      <button
        onClick={() => signOut()}
        className="mt-6 px-4 py-2 bg-gray-200 rounded hover:bg-gray-300 transition"
      >
        Sign out
      </button>
    </div>
  );
}