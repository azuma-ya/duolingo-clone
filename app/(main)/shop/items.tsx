"use client";

import { Heart, HeartHandshake, Zap } from "lucide-react";
import { useTransition } from "react";
import { toast } from "sonner";

import { refillHearts } from "@/actions/user-progress";
import { createStripeUrl } from "@/actions/user-subscription";
import { Button } from "@/components/ui/button";
import { POINTS_TO_REFILL } from "@/constants/shop";

interface ItemsProps {
  hearts: number;
  points: number;
  hasActiveSubscription: boolean;
}

const Items = ({ hearts, points, hasActiveSubscription }: ItemsProps) => {
  const [pending, startTransiton] = useTransition();

  const handleRefillHearts = () => {
    if (pending || hearts === 5 || points < POINTS_TO_REFILL) return;

    startTransiton(() => {
      refillHearts().catch(() => toast.error("Something went wrong"));
    });
  };

  const handleUpgrade = () => {
    startTransiton(() => {
      createStripeUrl()
        .then((res) => {
          if (res.data) {
            window.location.href = res.data;
          }
        })
        .catch(() => toast.error("Something went wrong"));
    });
  };

  return (
    <ul className="w-full">
      <div
        className="flex w-full items-center gap-x-4
     border-t-2 p-4"
      >
        <Heart className="size-12 text-rose-500" />
        <div className="flex-1">
          <p className="text-base font-bold text-neutral-700 lg:text-xl">
            Refill hearts
          </p>
        </div>
        <Button
          onClick={handleRefillHearts}
          disabled={pending || hearts === 5 || points < POINTS_TO_REFILL}
        >
          {hearts === 5 ? (
            "full"
          ) : (
            <div className="flex items-center gap-2">
              <Zap className="size-5 text-orange-500" />
              <p className="">{POINTS_TO_REFILL}</p>
            </div>
          )}
        </Button>
      </div>
      <div
        className="flex w-full items-center gap-x-4
       border-t-2 p-4 pt-8"
      >
        <HeartHandshake className="size-12 text-rose-500" />
        <div className="flex-1">
          <p className="text-base font-bold text-neutral-700 lg:text-xl">
            Unlimited hearts
          </p>
        </div>
        <Button onClick={handleUpgrade} disabled={pending}>
          {hasActiveSubscription ? "settings" : "upgreade"}
        </Button>
      </div>
    </ul>
  );
};

export default Items;
