"use client";
import { useSession, signIn, signOut } from "next-auth/react";
import { WelcomeCard } from "./WelcomeCard";
import Sidebar from "./Sidebar";

export default function ClientDashboard() {
  const { data: session, status } = useSession();

  if (status === "loading") {
    return (
      <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-blue-50 to-gray-100">
        <div className="text-lg font-medium text-gray-600">Loading...</div>
      </div>
    );
  }

  if (!session) {
    return (
      <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-blue-50 to-gray-100">
        <h1 className="text-4xl font-extrabold mb-6 text-gray-800">
          Researcher AI
        </h1>
        <p className="mb-8 text-gray-600">Sign in to access your dashboard</p>
        <button
          onClick={() => signIn("github")}
          className="px-6 py-3 bg-blue-600 text-white rounded-lg shadow hover:bg-blue-700 transition font-semibold"
        >
          Sign in with GitHub
        </button>
      </div>
    );
  }

  return (
    <div className="flex min-h-screen bg-gradient-to-br from-blue-50 to-gray-100">
      <Sidebar />
      <main className="flex-1 flex items-center justify-center p-8 pl-16 md:pl-64">
        <div className="flex flex-col items-center">
          <WelcomeCard user={session.user!} onCreateProject={() => {}} />
          <button
            onClick={() => signOut()}
            className="mt-8 px-5 py-2 bg-gray-200 rounded-lg hover:bg-gray-300 transition font-medium"
          >
            Sign out
          </button>
        </div>
      </main>
    </div>
  );
}