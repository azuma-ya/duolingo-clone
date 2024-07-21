import type { ReactNode } from "react";

const FeedWrapper = ({ children }: { children: ReactNode }) => {
  return <div className="relative top-0 flex-1 pb-10">{children}</div>;
};

export default FeedWrapper;
