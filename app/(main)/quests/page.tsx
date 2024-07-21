import FeedWrapper from "@/components/feed-wrapper";
import Promo from "@/components/promo";
import StickyWrapper from "@/components/sticky-wrapper";
import { Progress } from "@/components/ui/progress";
import UserProgress from "@/components/user-progress";
import { quests } from "@/constants";
import { getUserProgress, getUserSubscription } from "@/db/query";
import { Swords, Zap } from "lucide-react";
import { redirect } from "next/navigation";

const QuestsPage = async () => {
  const [userProgress, userSubscription] = await Promise.all([
    getUserProgress(),
    getUserSubscription(),
  ]);

  if (!userProgress || !userProgress.activeCourse) {
    redirect("/courses");
  }

  const isPro = !!userSubscription?.isActive;

  return (
    <div className="flex flex-row-reverse gap-[48px] px-6">
      <StickyWrapper>
        <UserProgress
          activeCourse={userProgress.activeCourse}
          hearts={userProgress.hearts}
          points={userProgress.points}
          hasActiveSubscription={isPro}
        />
        {!isPro && <Promo />}
      </StickyWrapper>
      <FeedWrapper>
        <div className="flex w-full flex-col items-center ">
          <Swords className="size-16 text-neutral-700" />
          <h1 className="text-center text-2xl font-bold text-neutral-800">
            quests
          </h1>
          <p className="mb-6 text-center text-lg text-muted-foreground">
            Complete quests by earning points
          </p>
          <ul className="w-full">
            {quests.map((quest) => (
              <li
                key={quest.title}
                className="flex w-full items-center gap-x-4 border-t-2 p-4"
              >
                <Zap className="mr-2 size-6 text-orange-500" />
                <div className="flex w-full flex-col gap-y-2">
                  <p className="text-bold text-neutral-700">{quest.title}</p>
                  <Progress
                    value={(userProgress.points / quest.value) * 100}
                    className="h-3"
                  />
                </div>
              </li>
            ))}
          </ul>
        </div>
      </FeedWrapper>
    </div>
  );
};

export default QuestsPage;
