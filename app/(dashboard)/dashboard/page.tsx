import { redirect } from "next/navigation"

import { authOptions } from "@/lib/auth"
import { getCurrentUser } from "@/lib/session"
import { EmptyPlaceholder } from "@/components/shared/empty-placeholder"
import { DashboardHeader } from "@/components/dashboard/header"
import { DashboardShell } from "@/components/dashboard/shell"
import { Button } from "@/components/ui/button"

export const metadata = {
  title: "Dashboard",
}

export default async function DashboardPage() {
  const user = await getCurrentUser()

  if (!user) {
    redirect(authOptions?.pages?.signIn || "/login")
  }

  return (
    <DashboardShell>
      <DashboardHeader heading="Documents" text="Create and manage document.">
        <Button>Refresh</Button>
      </DashboardHeader>
      <div>
        <EmptyPlaceholder>
          <EmptyPlaceholder.Icon name="post" />
          <EmptyPlaceholder.Title>No document created</EmptyPlaceholder.Title>
          <EmptyPlaceholder.Description>
            You don&apos;t have any document yet. Start scanning document.
          </EmptyPlaceholder.Description>
          <Button variant="outline">Scan</Button>
        </EmptyPlaceholder>
      </div>
    </DashboardShell>
  )
}
