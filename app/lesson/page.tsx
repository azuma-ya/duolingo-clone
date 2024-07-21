import { redirect } from "next/navigation";

import { getLesson, getUserProgress, getUserSubscription } from "@/db/query";

import Quiz from "./quiz";

const LessonPage = async () => {
  const [lesson, userProgerss, userSubscription] = await Promise.all([
    getLesson(),
    getUserProgress(),
    getUserSubscription(),
  ]);

  if (!userProgerss || !lesson) {
    redirect("/learn");
  }

  const initalPercentage =
    (lesson.challenges.filter((challenge) => challenge.completed).length /
      lesson.challenges.length) *
    100;

  return (
    <Quiz
      initialLessonId={lesson.id}
      initialLessonChallenges={lesson.challenges}
      initialHearts={userProgerss.hearts}
      initialPercentage={initalPercentage}
      userSubscription={userSubscription}
    />
  );
};

export default LessonPage;
