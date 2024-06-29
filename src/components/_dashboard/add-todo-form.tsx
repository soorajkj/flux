"use client";

import * as React from "react";
import { PRIORITIES, STATUSES, TodoSchema } from "@/schemas/todo";
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
  const { onFormSubmit } = props;
  const form = useForm<z.infer<typeof TodoSchema>>({
    resolver: zodResolver(TodoSchema),
    defaultValues: {
      title: "",
      description: "",
      due: new Date(),
      priority: "Low",
      status: "Not started",
    },
  });

  const onSubmit = async (values: z.infer<typeof TodoSchema>) => {
    await addTodo(values);
    onFormSubmit();
  };

  return (
    <Form.FormRoot {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="flex flex-col gap-4"
      >
        <Form.FormField
          control={form.control}
          name="title"
          render={({ field }) => (
            <Form.FormItem>
              <Form.FormLabel>Title</Form.FormLabel>
              <Form.FormControl>
                <Input {...field} />
              </Form.FormControl>
              <Form.FormMessage />
            </Form.FormItem>
          )}
        />
        <Form.FormField
          control={form.control}
          name="description"
          render={({ field }) => (
            <Form.FormItem>
              <Form.FormLabel>Description</Form.FormLabel>
              <Form.FormControl>
                <Input {...field} />
              </Form.FormControl>
              <Form.FormMessage />
            </Form.FormItem>
          )}
        />
        <Form.FormField
          control={form.control}
          name="status"
          render={({ field }) => (
            <Form.FormItem>
              <Form.FormLabel>Status</Form.FormLabel>
              <Form.FormControl>
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
                    {STATUSES.map((status, i) => (
                      <Select.SelectItem key={i} value={status}>
                        {status}
                      </Select.SelectItem>
                    ))}
                  </Select.SelectContent>
                </Select.SelectRoot>
              </Form.FormControl>
              <Form.FormMessage />
            </Form.FormItem>
          )}
        />
        <Form.FormField
          control={form.control}
          name="priority"
          render={({ field }) => (
            <Form.FormItem>
              <Form.FormLabel>Priority</Form.FormLabel>
              <Form.FormControl>
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
                    {PRIORITIES.map((priority, i) => (
                      <Select.SelectItem key={i} value={priority}>
                        {priority}
                      </Select.SelectItem>
                    ))}
                  </Select.SelectContent>
                </Select.SelectRoot>
              </Form.FormControl>
              <Form.FormMessage />
            </Form.FormItem>
          )}
        />
        <Form.FormField
          control={form.control}
          name="due"
          render={({ field }) => (
            <Form.FormItem>
              <Form.FormLabel>Due Date</Form.FormLabel>
              <Popover.PopoverRoot>
                <Popover.PopoverTrigger asChild>
                  <Form.FormControl>
                    <Button variant="outline" className="flex">
                      {field.value && format(field.value, "PPP")}
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
              <Form.FormMessage />
            </Form.FormItem>
          )}
        />
        <div className="flex items-center gap-4">
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
          <Button type="submit" variant="default">
            Save Todo
          </Button>
        </div>
      </form>
    </Form.FormRoot>
  );
}
