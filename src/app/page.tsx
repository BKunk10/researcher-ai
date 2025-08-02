"use client"

import { useSession } from "next-auth/react"
import { WelcomeCard } from "./components/WelcomeCard"
import { AuthButtons } from "./components/AuthButtons"

export default function Home() {
  const { data: session } = useSession()

  const handleCreateProject = () => {
    alert("Create New Project clicked!")
  }

  const userName = session?.user?.name || "Guest"

  return (
    <main className="p-4 space-y-4">
      <AuthButtons />
      <WelcomeCard userName={userName} onCreateProject={handleCreateProject} />
    </main>
  )
}
