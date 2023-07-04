"use client";

import * as React from "react";
import Link from "next/link";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button } from "~components/core/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "~components/core/form";
import { loginSchema } from "~lib/validations";
import { Input } from "~components/core/input";
import { useRouter } from "next/navigation";
import { createClientComponentClient } from "@supabase/auth-helpers-nextjs";

export default function SignupForm() {
  const router = useRouter();
  const supabase = createClientComponentClient();
  const form = useForm<z.infer<typeof loginSchema>>({
    resolver: zodResolver(loginSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const handleFormSubmit = async (data: z.infer<typeof loginSchema>) => {
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
          Sign up
        </Button>
        <p className="text-center">
          Already have an account? <Link href="/signin">Login</Link>
        </p>
      </form>
    </Form>
  );
}
