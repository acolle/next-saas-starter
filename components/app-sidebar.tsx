"use client"

import * as React from "react"
import {
  AudioWaveform,
  Command,
  GalleryVerticalEnd,
  Settings2,
  SquareTerminal,
} from "lucide-react"

import { NavMain } from "@/components/nav-main"
import { NavUser } from "@/components/nav-user"
import { TeamSwitcher } from "@/components/team-switcher"
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarRail,
} from "@/components/ui/sidebar"

import { useUser } from '@/lib/auth';


// This is sample data.
const data = {
  teams: [
    {
      name: "Acme Inc",
      logo: GalleryVerticalEnd,
      plan: "Enterprise",
    },
    {
      name: "Acme Corp.",
      logo: AudioWaveform,
      plan: "Startup",
    },
    {
      name: "Evil Corp.",
      logo: Command,
      plan: "Free",
    },
  ],
  navMain: [
    {
      title: "Modules",
      url: "#",
      icon: SquareTerminal,
      isActive: true,
      items: [
        {
          title: "Text Editor",
          url: "/dashboard/text-editor",
        },
        {
          title: "Schema Editor",
          url: "/dashboard/schema-editor",
        }
      ],
    },
    {
      title: "Settings",
      url: "#",
      icon: Settings2,
      isActive: true,
      items: [
        {
          title: "General",
          url: "/dashboard/settings",
        },
        {
          title: "Team",
          url: "/dashboard/team",
        },
        {
          title: "Billing",
          url: "/dashboard/pricing",
        },
        {
          title: "Activity",
          url: "/dashboard/activity",
        },
        {
          title: "Security",
          url: "/dashboard/security",
        },
      ],
    },
  ]
}


export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {

  // Retrieve user of current session
  const { user } = useUser();
  // console.log(user);

  const currentUser = {
    name: user?.name ?? "Unknown",
    email: user?.email ?? "Unknown"
  }

  return (
    <Sidebar collapsible="icon" {...props}>
      <SidebarHeader>
        <TeamSwitcher teams={data.teams} />
      </SidebarHeader>
      <SidebarContent>
        <NavMain items={data.navMain} />
      </SidebarContent>
      <SidebarFooter>
        <NavUser user={currentUser} />
      </SidebarFooter>
      <SidebarRail />
    </Sidebar>
  )
}
