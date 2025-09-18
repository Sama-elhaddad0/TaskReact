import { Calendar, ForkKnife, Home, Inbox, Search, Settings } from "lucide-react"

import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar"
import logo from '@/img/logo-BfNap0Pe.png'
import Image from "next/image"
import Link from "next/link";

const items = [
  {
    title: "Meals",
    url: "/",
    icon: ForkKnife,
  },
  {
    title: "Ingredients",
    url: "/",
    icon: ForkKnife,
  },
  {
    title: "Areas",
    url: "/",
    icon:ForkKnife ,
  },
 
]

export function AppSidebar() {
  return (
    <Sidebar className="font-cr">
      <SidebarContent>
        <SidebarGroup>
         <Image src={logo} alt="logo" width={200} height={200}/>
          <SidebarGroupContent>
            <SidebarMenu>
              {items.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild>
                    <Link href={item.url} className="flex items-center gap-2">
                      <item.icon className="w-5 h-5" />
                      <span className="font-semibold">{item.title}</span>
                    </Link>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  )
}