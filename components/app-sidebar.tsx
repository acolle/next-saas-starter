"use client"

import * as React from "react";
import { use } from 'react';
import { useRouter } from 'next/navigation'

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
  SidebarMenuButton,
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

  const { userPromise } = useUser();
  const user = use(userPromise);

  console.log(user)

  return (
    <Sidebar collapsible="icon" {...props}>
      <SidebarHeader>
        {/* TODO: With multiple teams */}
        {/* <TeamSwitcher teams={data.teams} /> */}
        <SidebarMenuButton size="lg">
          <div className="flex aspect-square size-8 items-center justify-center rounded-md bg-sidebar-primary text-sidebar-primary-foreground">
            <Command className="size-4" />
          </div>
          <div className="grid flex-1 text-left text-sm leading-tight">
            <span className="truncate font-semibold">{user?.teamName}</span>
            <span className="truncate text-xs">{user?.role}</span>
          </div>
        </SidebarMenuButton>
      </SidebarHeader>
      <SidebarContent>
        <NavMain items={data.navMain} />
      </SidebarContent>
      <SidebarFooter>
        <NavUser user={user} />
      </SidebarFooter>
      <SidebarRail />
    </Sidebar>
  );
}
