import { Button } from "@/components/ui/button";
import Image from "next/image";

const Footer = () => {
  return (
    <footer className="hidden h-20 w-full  border-t-2 border-slate-200 p-2 lg:block">
      <div className="mx-auto flex h-full max-w-screen-lg items-center justify-evenly">
        <Button size="lg" variant="ghost" className="w-full">
          <Image
            src="/jp.svg"
            alt="Japan"
            height={32}
            width={40}
            className="mr-4 rounded-md border"
          />
          Japan
        </Button>
        <Button size="lg" variant="ghost" className="w-full">
          <Image
            src="/es.svg"
            alt="Spanish"
            height={32}
            width={40}
            className="mr-4 rounded-md"
          />
          Spanish
        </Button>
        <Button size="lg" variant="ghost" className="w-full">
          <Image
            src="/fr.svg"
            alt="French"
            height={32}
            width={40}
            className="mr-4 rounded-md"
          />
          French
        </Button>
        <Button size="lg" variant="ghost" className="w-full">
          <Image
            src="/it.svg"
            alt="Italy"
            height={32}
            width={40}
            className="mr-4 rounded-md"
          />
          Italy
        </Button>
        <Button size="lg" variant="ghost" className="w-full">
          <Image
            src="/gb.svg"
            alt="United Kingdom"
            height={32}
            width={40}
            className="mr-4 rounded-md"
          />
          UK
        </Button>
      </div>
    </footer>
  );
};

export default Footer;
