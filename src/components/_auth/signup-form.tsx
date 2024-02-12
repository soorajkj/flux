"use client";

import React from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { handleSignupFormSubmit } from "~app/(auth)/action";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { authSchema } from "~lib/validations";
import Button from "~components/core/button";
import Form from "~components/core/form";
import Input from "~components/core/input";

export type SignupFormFields = z.infer<typeof authSchema>;

export default function SignupForm() {
  const form = useForm<SignupFormFields>({
    resolver: zodResolver(authSchema),
    defaultValues: {
      email: "soorajkj2001@gmail.com",
      password: "123QWEasd!",
    },
  });

  const processForm = async (data: SignupFormFields) => {
    await handleSignupFormSubmit(data);
  };

  return (
    <Form.FormRoot {...form}>
      <form className="space-y-4" onSubmit={form.handleSubmit(processForm)}>
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
