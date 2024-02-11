"use client";

import React from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { authSchema } from "~lib/validations";
import Button from "~components/core/button";
import Form from "~components/core/form";
import Input from "~components/core/input";

export default function SigninForm() {
  const form = useForm<z.infer<typeof authSchema>>({
    resolver: zodResolver(authSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const handleFormSubmit = async (_data: z.infer<typeof authSchema>) => {};

  return (
    <Form.FormRoot {...form}>
      <form
        className="space-y-4"
        onSubmit={(...args) =>
          void form.handleSubmit(handleFormSubmit)(...args)
        }
      >
        <Form.FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <Form.FormItem className="flex flex-col">
              <Form.FormLabel>Email</Form.FormLabel>
              <Form.FormMessage className="order-3" />
              <Form.FormControl>
                <Input
                  type="email"
                  placeholder="example@gmail.com"
                  autoComplete="off"
                  {...field}
                />
              </Form.FormControl>
            </Form.FormItem>
          )}
        />
        <Form.FormField
          control={form.control}
          name="password"
          render={({ field }) => (
            <Form.FormItem className="flex flex-col">
              <Form.FormLabel>Password</Form.FormLabel>
              <Form.FormMessage className="order-3" />
              <Form.FormControl>
                <Input
                  type="password"
                  placeholder="********"
                  autoComplete="off"
                  {...field}
                />
              </Form.FormControl>
            </Form.FormItem>
          )}
        />
        <Button fullWidth={true} className="!mt-8">
          Continue with email
        </Button>
      </form>
    </Form.FormRoot>
  );
}
