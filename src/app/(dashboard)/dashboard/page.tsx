import * as React from "react";
import { fetchTodos } from "@/services/todo.quries";
import ChangeViewer from "@/components/dashboard/change-viewer";

export default async function Page() {
  const todos = await fetchTodos();

  return (
    <React.Fragment>
      <ChangeViewer todos={todos} />
    </React.Fragment>
  );
}
