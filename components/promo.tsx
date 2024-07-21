import { Button } from "@/components/ui/button";
import { HeartHandshake } from "lucide-react";
import Link from "next/link";

const Promo = () => {
  return (
    <div className="space-y-4 rounded-xl border-2 p-4 ">
      <div className="space-y-2">
        <div className="flex items-center gap-x-2">
          <HeartHandshake className="size-6 text-rose-500" />
          <h3 className="text-lg font-bold">Upgrade to Pro</h3>
        </div>
        <p className="text-muted-foreground">Get unlimited hearts and more!</p>
      </div>
      <Button variant="super" className="w-full" size="lg" asChild>
        <Link href="/shop">Upgrade today</Link>
      </Button>
    </div>
  );
};

export default Promo;
