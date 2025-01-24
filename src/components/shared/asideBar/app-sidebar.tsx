"use client";
import * as React from "react";
import { ChevronRight, GalleryVerticalEnd } from "lucide-react";

import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarMenuSub,
  SidebarMenuSubButton,
  SidebarMenuSubItem,
  SidebarRail,
} from "@/components/ui/sidebar";

import Link from "next/link";
import { usePathname } from "next/navigation";

// This is sample data.
interface navData {
  title: string;
  url: string;
  items?: navData[];
}
const data: navData[] = [
  {
    title: "Dealer",
    url: "#",
    items: [
      {
        title: "Order entry",
        url: "/dashboard/dealer/order-entry",
      },
      {
        title: "Damage Entry",
        url: "/dashboard/dealer/damage-entry",
      },
      {
        title: "Incentive",
        url: "/dashboard/dealer/incentive",
      },
      {
        title: "Product List",
        url: "/dashboard/dealer/product-list",
      },
      {
        title: "Undelivered",
        url: "/dashboard/dealer/undelivered",
      },
      {
        title: "View Order",
        url: "/dashboard/dealer/view-order",
      },
    ],
  },
  {
    title: "Accounts",
    url: "#",
    items: [
      {
        title: "Profile",
        url: "/dashboard/accounts/profile",
      },
      {
        title: "Bank Info",
        url: "/dashboard/accounts/bank-info",
        // isActive: true,
      },
      {
        title: "Change Password",
        url: "/dashboard/accounts/change-password",
      },
      {
        title: "Credit Info",
        url: "/dashboard/accounts/credit-info",
      },
      {
        title: "MR Info",
        url: "/dashboard/accounts/mr-info",
      },
      {
        title: "Nishchinto Fund",
        url: "/dashboard/accounts/nishchinto-fund",
      },
    ],
  },
];

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  const path = usePathname();
  return (
    <Sidebar {...props}>
      <SidebarHeader>
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton size="lg" asChild>
              <a href="#">
                <div className="flex aspect-square size-8 items-center justify-center rounded-lg bg-sidebar-primary text-sidebar-primary-foreground">
                  <GalleryVerticalEnd className="size-4" />
                </div>
                <div className="flex flex-col gap-0.5 leading-none">
                  <span className="font-semibold">Trade Asia</span>
                 
                </div>
              </a>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarHeader>
      <SidebarContent>
        <SidebarGroup>
          <SidebarMenu>
            {data?.map((item, index) => (
              <Collapsible
                key={item.title}
                defaultOpen={index === 1}
                className="group/collapsible"
                // className=""
              >
                <SidebarMenuItem>
                  <CollapsibleTrigger asChild>
                    <SidebarMenuButton className="font-semibold" size={"lg"}>
                      {item.title}{" "}
                      <ChevronRight className="ml-auto transition-transform group-data-[state=open]/collapsible:rotate-90" />
                    </SidebarMenuButton>
                  </CollapsibleTrigger>
                  {item.items?.length ? (
                    <CollapsibleContent>
                      <SidebarMenuSub>
                        {item.items.map((item) => (
                          <SidebarMenuSubItem key={item.title}>
                            <SidebarMenuSubButton
                              size="sm"
                              className="font-semibold"
                              asChild
                              isActive={path === item?.url ? true : false}
                            >
                              <Link href={item?.url}>{item?.title}</Link>
                            </SidebarMenuSubButton>
                          </SidebarMenuSubItem>
                        ))}
                      </SidebarMenuSub>
                    </CollapsibleContent>
                  ) : null}
                </SidebarMenuItem>
              </Collapsible>
            ))}
          </SidebarMenu>
        </SidebarGroup>
      </SidebarContent>
      <SidebarRail />
    </Sidebar>
  );
}
