"use client";

import * as React from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { createClientComponentClient } from "@supabase/auth-helpers-nextjs";
import type { z } from "zod";
import { authSchema } from "~lib/validations";
import { Input } from "~components/core/Input";
import { Button } from "~components/core/Button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "~components/core/Form";

export default function SigninForm() {
  const router = useRouter();
  const supabase = createClientComponentClient();
  const form = useForm<z.infer<typeof authSchema>>({
    resolver: zodResolver(authSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const handleFormSubmit = async (data: z.infer<typeof authSchema>) => {
    const { email, password } = data;

    await supabase.auth.signInWithPassword({
      email,
      password,
    });

    router.refresh();
  };

  return (
    <Form {...form}>
      <form
        className="space-y-4"
        onSubmit={(...args) =>
          void form.handleSubmit(handleFormSubmit)(...args)
        }
      >
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem className="flex flex-col">
              <FormLabel>Email</FormLabel>
              <FormMessage className="order-3" />
              <FormControl>
                <Input
                  type="text"
                  placeholder="example@gmail.com"
                  autoComplete="off"
                  {...field}
                />
              </FormControl>
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="password"
          render={({ field }) => (
            <FormItem className="flex flex-col">
              <FormLabel>Password</FormLabel>
              <FormMessage className="order-3" />
              <FormControl>
                <Input
                  type="password"
                  placeholder="********"
                  autoComplete="off"
                  {...field}
                />
              </FormControl>
            </FormItem>
          )}
        />
        <Button type="submit" variant="primary" block={true}>
          Sign in
        </Button>
        <p className="space-x-1 text-center">
          <span>Don&apos;t have an account?</span>
          <Link
            href="/signup"
            aria-label="signup"
            className="cursor-pointer select-none font-semibold text-color-primary-600 transition hover:underline focus-visible:underline focus-visible:outline-none"
          >
            Sign up
          </Link>
        </p>
      </form>
    </Form>
  );
}
