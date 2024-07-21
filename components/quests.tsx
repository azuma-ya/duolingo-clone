import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { quests } from "@/constants";
import { Swords, Zap } from "lucide-react";
import Link from "next/link";

interface QuestsProps {
  points: number;
}

const Quests = ({ points }: QuestsProps) => {
  return (
    <div className="space-y-4 rounded-xl border-2 p-4 ">
      <div className="flex w-full items-center justify-between space-y-2">
        <div className="flex items-center gap-x-2">
          <Swords className="size-6" />
          <h3 className="text-lg font-bold">Quests</h3>
        </div>
        <Button variant="primaryOutline" size="sm" asChild>
          <Link href="/quests">View all</Link>
        </Button>
      </div>
      <ul className="w-full space-y-4">
        {quests.map((quest) => (
          <li
            key={quest.title}
            className="flex w-full items-center gap-x-3 border-t-2 p-4"
          >
            <Zap className="mr-2 size-6 text-orange-500" />
            <div className="flex w-full flex-col gap-y-2">
              <p className="text-bold text-neutral-700">{quest.title}</p>
              <Progress value={(points / quest.value) * 100} className="h-2" />
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Quests;
