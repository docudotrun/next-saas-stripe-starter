import { DashboardConfig } from "types"

export const dashboardConfig: DashboardConfig = {
  mainNav: [
    {
      title: "Documentation",
      href: "/docs",
    },
    {
      title: "Support",
      href: "/support",
      disabled: true,
    },
  ],
  sidebarNav: [
    {
      title: "Documents",
      href: "/dashboard",
      icon: "page",
    },
    {
      title: "Document types",
      href: "/dashboard/types",
      icon: "text",
    },
    {
      title: "Workflows",
      href: "/dashboard/workflows",
      icon: "workflow",
    },
    {
      title: "Billing",
      href: "/dashboard/billing",
      icon: "billing",
    },
    {
      title: "Settings",
      href: "/dashboard/settings",
      icon: "settings",
    },
  ],
}
