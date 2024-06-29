"use client";

import * as React from "react";
import Button from "@/components/core/button";
import Dialog from "@/components/core/dialog";
import AddTodoForm from "@/components/dashboard/add-todo-form";

export default function AddTodo() {
  const [open, setOpen] = React.useState(false);

  const handleFormSubmit = () => setOpen(false);

  return (
    <React.Fragment>
      <Dialog.DialogRoot open={open} onOpenChange={setOpen}>
        <Dialog.DialogTrigger asChild>
          <Button variant="default" className="gap-0.5">
            <span>Add Todo</span>
          </Button>
        </Dialog.DialogTrigger>
        <Dialog.DialogContent className="max-w-screen-md">
          <AddTodoForm onFormSubmit={handleFormSubmit} />
        </Dialog.DialogContent>
      </Dialog.DialogRoot>
    </React.Fragment>
  );
}
