"use client";

import Image from "next/image";
import Link from "next/link";

import SidebarItem from "@/components/sidebar-item";
import { cn } from "@/lib/utils";
import { ClerkLoaded, ClerkLoading, UserButton } from "@clerk/nextjs";
import { Home, Loader, Store, Swords, Trophy } from "lucide-react";

interface SidebarProps {
  className?: string;
}

const Sidebar = ({ className }: SidebarProps) => {
  return (
    <div
      className={cn(
        "h-full lg:w-[256px] lg:fixed flex left-0 top-0 px-4 border-r-2 flex-col",
        className,
      )}
    >
      <Link href="/learn">
        <div className="flex items-center gap-x-3 pb-7 pl-4 pt-8">
          <Image
            src="/mascot.png"
            alt="Mascot"
            height={40}
            width={40}
            className="mb-3"
          />
          <h1 className="text-2xl font-extrabold tracking-wide text-green-600">
            Azlingo
          </h1>
        </div>
      </Link>
      <div className="flex flex-1 flex-col gap-y-2">
        <SidebarItem label="Learn" href="/learn" icon={Home} />
        <SidebarItem label="Leaderboard" href="/leaderboard" icon={Trophy} />
        <SidebarItem label="Quests" href="/quests" icon={Swords} />
        <SidebarItem label="Shop" href="/shop" icon={Store} />
      </div>
      <div className="p-4">
        <ClerkLoading>
          <Loader className="size-5 animate-spin text-muted-foreground" />
        </ClerkLoading>
        <ClerkLoaded>
          <UserButton />
        </ClerkLoaded>
      </div>
    </div>
  );
};

export default Sidebar;
