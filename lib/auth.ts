import { auth } from "@clerk/nextjs/server";

const allowedIds = ["user_2jRNZ3IpybNT0lr0BjDhQ5SAcw2"];

export const isAdmin = () => {
  const { userId } = auth();

  return !!allowedIds.includes(userId!);
};
