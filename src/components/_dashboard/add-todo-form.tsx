"use client";

import * as React from "react";
import dynamic from "next/dynamic";
import { Priorities, Statuses, TodoSchema } from "@/schemas/todo";
import { addTodo } from "@/services/todo.action";
import { zodResolver } from "@hookform/resolvers/zod";
import { format } from "date-fns";
import { CalendarIcon } from "lucide-react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import Button from "@/components/core/button";
import Calendar from "@/components/core/calendar";
import Form from "@/components/core/form";
import Input from "@/components/core/input";
import Popover from "@/components/core/popover";
import Select from "@/components/core/select";

interface AddTodoFormProps {
  onFormSubmit: () => void;
}

export default function AddTodoForm(props: AddTodoFormProps) {
  const Editor = React.useMemo(
    () =>
      dynamic(() => import("@/components/dashboard/editor"), { ssr: false }),
    []
  );

  const [isPending, startTransition] = React.useTransition();
  const { onFormSubmit } = props;
  const form = useForm<z.infer<typeof TodoSchema>>({
    resolver: zodResolver(TodoSchema),
    defaultValues: {
      title: "",
      description: "",
      due: new Date(),
      priority: "Low",
      status: "Not started",
      document: [],
    },
  });

  const onSubmit = (values: z.infer<typeof TodoSchema>) => {
    startTransition(async () => {
      await addTodo(values);
      onFormSubmit();
    });
  };

  return (
    <Form.FormRoot {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="flex flex-col gap-5"
      >
        <Form.FormField
          control={form.control}
          name="title"
          render={({ field }) => (
            <Form.FormItem className="flex flex-col">
              <Form.FormLabel>Title</Form.FormLabel>
              <Form.FormMessage className="order-3" />
              <Form.FormControl>
                <Input {...field} />
              </Form.FormControl>
            </Form.FormItem>
          )}
        />
        <Form.FormField
          control={form.control}
          name="description"
          render={({ field }) => (
            <Form.FormItem className="flex flex-col">
              <Form.FormLabel>Description</Form.FormLabel>
              <Form.FormMessage className="order-3" />
              <Form.FormControl>
                <Input {...field} />
              </Form.FormControl>
            </Form.FormItem>
          )}
        />
        <Form.FormField
          control={form.control}
          name="status"
          render={({ field }) => (
            <Form.FormItem className="flex flex-col">
              <Form.FormLabel>Status</Form.FormLabel>
              <Form.FormMessage className="order-3" />
              <Select.SelectRoot
                onValueChange={field.onChange}
                defaultValue={field.value}
              >
                <Form.FormControl>
                  <Select.SelectTrigger>
                    <Select.SelectValue />
                  </Select.SelectTrigger>
                </Form.FormControl>
                <Select.SelectContent>
                  {Statuses.map((status, i) => (
                    <Select.SelectItem key={i} value={status}>
                      {status}
                    </Select.SelectItem>
                  ))}
                </Select.SelectContent>
              </Select.SelectRoot>
            </Form.FormItem>
          )}
        />
        <Form.FormField
          control={form.control}
          name="priority"
          render={({ field }) => (
            <Form.FormItem className="flex flex-col">
              <Form.FormLabel>Priority</Form.FormLabel>
              <Form.FormMessage className="order-3" />
              <Select.SelectRoot
                onValueChange={field.onChange}
                defaultValue={field.value}
              >
                <Form.FormControl>
                  <Select.SelectTrigger>
                    <Select.SelectValue />
                  </Select.SelectTrigger>
                </Form.FormControl>
                <Select.SelectContent>
                  {Priorities.map((priority, i) => (
                    <Select.SelectItem key={i} value={priority}>
                      {priority}
                    </Select.SelectItem>
                  ))}
                </Select.SelectContent>
              </Select.SelectRoot>
            </Form.FormItem>
          )}
        />
        <Form.FormField
          control={form.control}
          name="due"
          render={({ field }) => (
            <Form.FormItem className="flex flex-col">
              <Form.FormLabel>Due Date</Form.FormLabel>
              <Form.FormMessage className="order-3" />
              <Popover.PopoverRoot>
                <Popover.PopoverTrigger asChild>
                  <Form.FormControl>
                    <Button variant="outline" full>
                      <span>{field.value && format(field.value, "PPP")}</span>
                      <CalendarIcon className="ml-2 h-4 w-4 opacity-50" />
                    </Button>
                  </Form.FormControl>
                </Popover.PopoverTrigger>
                <Popover.PopoverContent className="w-auto p-0" align="start">
                  <Calendar
                    mode="single"
                    selected={field.value}
                    onSelect={field.onChange}
                    initialFocus
                  />
                </Popover.PopoverContent>
              </Popover.PopoverRoot>
            </Form.FormItem>
          )}
        />
        <Form.FormField
          control={form.control}
          name="document"
          render={({ field }) => (
            <Form.FormItem className="flex flex-col">
              <Form.FormLabel>Additional Note</Form.FormLabel>
              <Form.FormMessage className="order-3" />
              <Form.FormControl>
                <Editor onChange={(content) => field.onChange(content)} />
              </Form.FormControl>
            </Form.FormItem>
          )}
        />
        <div className="mt-8 flex items-center justify-end gap-4">
          <Button
            type="reset"
            variant="outline"
            onClick={() => {
              form.reset();
              onFormSubmit();
            }}
          >
            Cancel
          </Button>
          <Button type="submit" variant="primary" disabled={isPending}>
            Create
          </Button>
        </div>
      </form>
    </Form.FormRoot>
  );
}
