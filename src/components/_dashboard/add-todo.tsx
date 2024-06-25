"use client";

import * as React from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import Form from "@/components/core/form";
import Input from "@/components/core/input";
import Select from "@/components/core/select";

const TodoShema = z.object({
  title: z.string().min(2).max(50),
  status: z.string().min(2).max(50),
});

export default function AddTodo() {
  const form = useForm<z.infer<typeof TodoShema>>({
    resolver: zodResolver(TodoShema),
    defaultValues: {
      title: "",
      status: "",
    },
  });

  function onSubmit(values: z.infer<typeof TodoShema>) {
    // eslint-disable-next-line no-console
    console.log(values);
  }

  return (
    <Form.FormRoot {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="pt-6">
        <div className="flex flex-col gap-4">
          <Form.FormField
            control={form.control}
            name="title"
            render={({ field }) => (
              <Form.FormItem className="flex items-center space-y-0">
                <Form.FormLabel className="w-1/4">Title</Form.FormLabel>
                <Form.FormControl className="flex-1">
                  <Input placeholder="" {...field} />
                </Form.FormControl>
                <Form.FormMessage />
              </Form.FormItem>
            )}
          />
          <Form.FormField
            control={form.control}
            name="title"
            render={({ field }) => (
              <Form.FormItem className="flex items-center space-y-0">
                <Form.FormLabel className="w-1/4">Description</Form.FormLabel>
                <Form.FormControl className="flex-1">
                  <Input placeholder="" {...field} />
                </Form.FormControl>
                <Form.FormMessage />
              </Form.FormItem>
            )}
          />
          <Form.FormField
            control={form.control}
            name="status"
            render={({ field }) => (
              <Form.FormItem className="flex items-center space-y-0">
                <Form.FormLabel className="w-1/4">Status</Form.FormLabel>
                <Select.SelectRoot
                  onValueChange={field.onChange}
                  defaultValue={field.value}
                >
                  <Form.FormControl className="flex-1">
                    <Select.SelectTrigger>
                      <Select.SelectValue />
                    </Select.SelectTrigger>
                  </Form.FormControl>
                  <Select.SelectContent>
                    {["To-do", "In Progress", "Done"].map((_, i) => (
                      <Select.SelectItem key={i} value={_}>
                        {_}
                      </Select.SelectItem>
                    ))}
                  </Select.SelectContent>
                </Select.SelectRoot>
                <Form.FormMessage />
              </Form.FormItem>
            )}
          />
        </div>
      </form>
    </Form.FormRoot>
  );
}
