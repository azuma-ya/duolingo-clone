import { cn } from "@/lib/utils";
import { Check } from "lucide-react";
import Image from "next/image";

interface CardProps {
  title: string;
  id: number;
  imageSrc: string;
  active?: boolean;
  disabled?: boolean;
  onClick: (id: number) => void;
}

const Card = ({
  title,
  id,
  imageSrc,
  active,
  disabled,
  onClick,
}: CardProps) => {
  return (
    <div
      onClick={() => onClick(id)}
      className={cn(
        "h-full border-2 rounded-xl border-b-4 hover:bg-black/5 active:border-b-2 flex flex-col items-center justify-between p-3 pb-6 min-h-[217px] min-w-[180px]",
        disabled && "pointer-events-none opacity-50",
      )}
      role="button"
    >
      <div className="min-[24px] flex w-full items-center justify-end">
        {active && (
          <div className="flex items-center justify-center rounded-md bg-green-600 p-1.5">
            <Check className="size-4 stroke-[4] text-white" />
          </div>
        )}
      </div>
      <Image
        src={imageSrc}
        alt={title}
        height={70}
        width={93.33}
        className="rounded-lg border object-cover drop-shadow-md"
      />
      <p className="mt-3 text-center font-bold text-neutral-700">{title}</p>
    </div>
  );
};

export default Card;
