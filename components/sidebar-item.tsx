"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

import { Button } from "@/components/ui/button";
import type { LucideIcon } from "lucide-react";

interface SidebarProps {
  label: string;
  icon: LucideIcon;
  href: string;
}

const SidebarItem = ({ label, icon: Icon, href }: SidebarProps) => {
  const pathname = usePathname();
  const active = pathname === href;

  return (
    <Button
      variant={active ? "sidebarOutline" : "sidebar"}
      className="h-[52px] justify-start"
      asChild
    >
      <Link href={href}>
        <Icon className="mr-4 size-6" />
        {label}
      </Link>
    </Button>
  );
};

export default SidebarItem;
