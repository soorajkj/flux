"use client";

import * as React from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { createClientComponentClient } from "@supabase/auth-helpers-nextjs";
import type { z } from "zod";
import { authSchema } from "~lib/validations";
import { Input } from "~components/core/input";
import { Button } from "~components/core/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "~components/core/form";

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
        className="mx-auto grid max-w-xs gap-4 py-6"
        onSubmit={(...args) =>
          void form.handleSubmit(handleFormSubmit)(...args)
        }
      >
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Email</FormLabel>
              <FormControl>
                <Input
                  type="text"
                  placeholder="example@gmail.com"
                  autoComplete="off"
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="password"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Password</FormLabel>
              <FormControl>
                <div className="relative">
                  <Input
                    type="password"
                    placeholder="********"
                    autoComplete="off"
                    {...field}
                  />
                </div>
              </FormControl>
              <FormMessage />
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
            className="cursor-pointer select-none text-violet-600 underline-offset-2 transition hover:underline focus-visible:underline focus-visible:outline-none"
          >
            Sign up
          </Link>
        </p>
      </form>
    </Form>
  );
}
