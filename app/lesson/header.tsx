"use client";

import { Progress } from "@/components/ui/progress";
import { useExitModal } from "@/store/use-exit-modal";
import { Heart, InfinityIcon, X } from "lucide-react";

interface HeaderProps {
  hearts: number;
  percentage: number;
  hasActiveSubscription: boolean;
}

const Header = ({ hearts, percentage, hasActiveSubscription }: HeaderProps) => {
  const { open } = useExitModal();
  return (
    <header className="mx-auto flex w-full max-w-[1140px] items-center justify-between gap-x-7 px-10 pt-[20px] lg:pt-[50px]">
      <X
        onClick={open}
        className="cursor-pointer text-slate-500 transition hover:opacity-75"
      />
      <Progress value={percentage} />
      <div className="flex items-center font-bold text-rose-500">
        <Heart className="mr-2 size-4" />
        {hasActiveSubscription ? (
          <InfinityIcon className="size-4 shrink-0 stroke-[3]" />
        ) : (
          hearts
        )}
      </div>
    </header>
  );
};

export default Header;
