import "server-only";
import { unstable_noStore as noStore } from "next/cache";
import { auth } from "@/auth";
import { prisma } from "@/lib/prisma";

export const fetchTodos = async () => {
  noStore();
  const { user } = await auth();
  const todos = await prisma.todo.findMany({
    where: { userId: user.id },
    orderBy: [{ createdAt: "desc" }],
  });
  return todos;
};
