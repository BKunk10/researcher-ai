"use client"

import { signIn, signOut, useSession } from "next-auth/react"
import { Button } from "./ui/button"

export function AuthButtons() {
  const { data: session } = useSession()

  if (session) {
    return (
      <div className="flex items-center gap-4">
        <p>Welcome, {session.user?.name}!</p>
        <Button onClick={() => signOut()}>Log out</Button>
      </div>
    )
  }

  return <Button onClick={() => signIn("github")}>Log in with GitHub</Button>
}
