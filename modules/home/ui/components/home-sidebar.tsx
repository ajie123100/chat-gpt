"use client";
import { assets } from "@/assets/assets";
import { Button } from "@/components/ui/button";
import {
  Sidebar,
  SidebarHeader,
  SidebarTrigger,
  useSidebar,
} from "@/components/ui/sidebar";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import Image from "next/image";

export const HomeSidebar = () => {
  const { toggleSidebar } = useSidebar();
  return (
    <Sidebar className="border-none w-[260px] pl-3">
      <SidebarHeader className="p-0 pr-3 ">
        <div className="flex items-center justify-between h-14">
          <TooltipProvider>
            <Tooltip>
              <TooltipTrigger asChild>
                <Button size="icon" onClick={() => toggleSidebar()}>
                  Hover
                </Button>
              </TooltipTrigger>
              <TooltipContent
                align="end"
                side="right"
                className="h-10 bg-black text-white"
              >
                <p>Add to library</p>
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>
        </div>
      </SidebarHeader>
    </Sidebar>
  );
};
