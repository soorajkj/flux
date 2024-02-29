"use client";

import React, { Fragment } from "react";
import Link from "next/link";
import { zodResolver } from "@hookform/resolvers/zod";
import { handleSigninFormSubmit } from "~app/(auth)/action";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { hrefs } from "~constants/routes";
import { authSchema } from "~lib/validations";
import Button from "~components/core/button";
import Form from "~components/core/form";
import Input from "~components/core/input";
import Separator from "~components/core/separator";
import Typography from "~components/core/typography";
import AuthProviders from "~components/_auth/auth-providers";

export type SigninFormFields = z.infer<typeof authSchema>;

export default function SigninForm() {
  const form = useForm<SigninFormFields>({
    resolver: zodResolver(authSchema),
    defaultValues: { email: "", password: "" },
  });

  const processForm = async (formData: SigninFormFields) => {
    await handleSigninFormSubmit(formData);
  };

  return (
    <Fragment>
      <div className="space-y-1.5 text-center">
        <Typography.Title variant="5/semibold">
          Log in to your account
        </Typography.Title>
        <Typography.Text>
          Welcome back! Please enter your details.
        </Typography.Text>
      </div>
      <Form.FormRoot {...form}>
        <form onSubmit={form.handleSubmit(processForm)} className="space-y-4">
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
                    disabled
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
                    placeholder="●●●●●●●●"
                    autoComplete="off"
                    disabled
                    {...field}
                  />
                </Form.FormControl>
              </Form.FormItem>
            )}
          />
          <div className="relative !mt-8">
            <Button variant="primary" fullWidth disabled>
              Continue with Email
            </Button>
          </div>
        </form>
      </Form.FormRoot>
      <Separator>or</Separator>
      <AuthProviders />
      <Typography.Text className="text-center">
        Don&apos;t have an account? <Link href={hrefs.signup}>Sign up</Link>
      </Typography.Text>
    </Fragment>
  );
}
