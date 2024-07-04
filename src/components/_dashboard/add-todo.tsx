"use client";

import * as React from "react";
import { Plus } from "lucide-react";
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
          <Button variant="primary" className="space-x-2">
            <Plus className="h-4 w-4" />
            <span>New</span>
          </Button>
        </Dialog.DialogTrigger>
        <Dialog.DialogContent className="max-w-lg px-6 py-6">
          <Dialog.DialogHeader>
            <Dialog.DialogTitle>Create task</Dialog.DialogTitle>
            <Dialog.DialogDescription>
              Fill in the details below to create a new task.
            </Dialog.DialogDescription>
          </Dialog.DialogHeader>
          <AddTodoForm onFormSubmit={handleFormSubmit} />
        </Dialog.DialogContent>
      </Dialog.DialogRoot>
    </React.Fragment>
  );
}
