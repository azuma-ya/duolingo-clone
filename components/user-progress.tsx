"use client";

import { Heart, InfinityIcon, Zap } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

import { Button } from "@/components/ui/button";
import type { courses } from "@/db/schema";

interface UserProgressProps {
  activeCourse: typeof courses.$inferInsert;
  hearts: number;
  points: number;
  hasActiveSubscription: boolean;
}

const UserProgress = ({
  activeCourse,
  points,
  hearts,
  hasActiveSubscription,
}: UserProgressProps) => {
  return (
    <div className="flex w-full items-center justify-between gap-x-2">
      <Button asChild variant="ghost">
        <Link href="/courses">
          <Image
            src={activeCourse.imageSrc}
            alt={activeCourse.title}
            className="rounded-md border"
            width={32}
            height={32}
          />
        </Link>
      </Button>
      <Button asChild variant="ghost" className="text-orange-500">
        <Link href="/shop">
          <Zap className="mr-2 size-4" />
          {points}
        </Link>
      </Button>
      <Button asChild variant="ghost" className="text-rose-500">
        <Link href="/shop">
          <Heart className="mr-2 size-4" />
          {hasActiveSubscription ? (
            <InfinityIcon className="storke-[3] size-4" />
          ) : (
            hearts
          )}
        </Link>
      </Button>
    </div>
  );
};

export default UserProgress;
