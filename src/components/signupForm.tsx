"use client";

import * as React from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import { createClientComponentClient } from "@supabase/auth-helpers-nextjs";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { authSchema } from "~lib/validations";
import { Button } from "~components/core/Button";
import { Input } from "~components/core/Input";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "~components/core/Form";

export default function SignupForm() {
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

    await supabase.auth.signUp({
      email,
      password,
      options: {
        emailRedirectTo: `${location.origin}/auth/callback`,
      },
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
                <Input
                  type="password"
                  placeholder="********"
                  autoComplete="off"
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button type="submit" variant="primary" block={true}>
          Sign up
        </Button>
        <p className="space-x-1 text-center">
          <span>Already have an account?</span>
          <Link
            href="/signin"
            aria-label="signin"
            className="cursor-pointer select-none text-purple-600 underline-offset-2 transition hover:underline focus-visible:underline focus-visible:outline-none"
          >
            Sign in
          </Link>
        </p>
      </form>
    </Form>
  );
}
