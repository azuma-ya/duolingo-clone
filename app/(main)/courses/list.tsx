"use client";

import type { courses, userProgress } from "@/db/schema";

import { upsertUserProgress } from "@/actions/user-progress";
import { useRouter } from "next/navigation";
import { useTransition } from "react";
import { toast } from "sonner";
import Card from "./card";

interface ListProps {
  courses: (typeof courses.$inferSelect)[];
  activeCourseId?: typeof userProgress.$inferSelect.activeCourseId;
}

const List = ({ courses, activeCourseId }: ListProps) => {
  const router = useRouter();
  const [pending, startTransition] = useTransition();

  const handleClick = (id: number) => {
    if (pending) return;

    if (id === activeCourseId) {
      router.push("/learn");
    }

    startTransition(() => {
      upsertUserProgress(id).catch(() => toast.error("Something went worng."));
    });
  };

  return (
    <div className="grid grid-cols-2 gap-4 pt-6 lg:grid-cols-[repeat(auto-fill,minmax(210px,1fr))]">
      {courses.map((course) => (
        <Card
          key={course.id}
          id={course.id}
          title={course.title}
          imageSrc={course.imageSrc}
          active={course.id === activeCourseId}
          onClick={handleClick}
          disabled={pending}
        />
      ))}
    </div>
  );
};

export default List;
