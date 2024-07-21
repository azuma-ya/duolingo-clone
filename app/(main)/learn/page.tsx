import { redirect } from "next/navigation";

import FeedWrapper from "@/components/feed-wrapper";
import Promo from "@/components/promo";
import StickyWrapper from "@/components/sticky-wrapper";
import UserProgress from "@/components/user-progress";
import {
  getCourseProgress,
  getLessonPercentage,
  getUnits,
  getUserProgress,
  getUserSubscription,
} from "@/db/query";
import type { lessons, units as unitsSchema } from "@/db/schema";

import Quests from "@/components/quests";
import Header from "./header";
import Unit from "./unit";

const LearnPage = async () => {
  const [
    userProgress,
    coursProgress,
    lessonPercentage,
    units,
    userSubscription,
  ] = await Promise.all([
    getUserProgress(),
    getCourseProgress(),
    getLessonPercentage(),
    getUnits(),
    getUserSubscription(),
  ]);

  if (
    !userProgress ||
    !userProgress.activeCourse ||
    !coursProgress?.activeLesson
  ) {
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
        <Quests points={userProgress.points} />
      </StickyWrapper>
      <FeedWrapper>
        <Header title={userProgress.activeCourse.title} />
        {units.map((unit) => (
          <div key={unit.id} className="mb-10">
            <Unit
              id={unit.id}
              order={unit.order}
              description={unit.description}
              title={unit.title}
              lessons={unit.lessons}
              activeLesson={
                coursProgress.activeLesson as
                  | (typeof lessons.$inferSelect & {
                      unit: typeof unitsSchema.$inferSelect;
                    })
                  | undefined
              }
              activeLessonPercentage={lessonPercentage}
            />
          </div>
        ))}
      </FeedWrapper>
    </div>
  );
};

export default LearnPage;
