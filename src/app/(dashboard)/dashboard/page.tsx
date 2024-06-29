import * as React from "react";
import { auth } from "@/auth";
import { prisma } from "@/lib/prisma";
import ChangeViewer from "@/components/dashboard/change-viewer";

const fetchTodos = async () => {
  const { user } = await auth();
  const todos = await prisma.todo.findMany({
    where: { userId: user.id },
    orderBy: [{ createdAt: "desc" }],
  });
  return todos;
};

export default async function Page() {
  const todos = await fetchTodos();

  return (
    <React.Fragment>
      <ChangeViewer todos={todos} />
    </React.Fragment>
  );
}
