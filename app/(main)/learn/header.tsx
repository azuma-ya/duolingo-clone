import { ArrowLeft } from "lucide-react";
import Link from "next/link";

import { Button } from "@/components/ui/button";

interface HeaderProps {
  title: string;
}

const Header = ({ title }: HeaderProps) => {
  return (
    <div className="sticky top-0 mb-5 flex items-center justify-between border-b-2 bg-white pb-3 text-neutral-400 lg:z-50 lg:mt-[-28px] lg:pt-[28px]">
      <Button variant="ghost" size="sm" asChild>
        <Link href="/courses">
          <ArrowLeft className="size-5 stroke-2 text-neutral-400" />
        </Link>
      </Button>
      <h1 className="text-lg font-bold">{title}</h1>
      <div />
    </div>
  );
};

export default Header;
