'use client';

import { signIn } from 'next-auth/react';
import Button from '@/components/button';
import Icon from '@/components/icon';
import Input from '@/components/input';
import Label from '@/components/label';
import Separator from '@/components/separator';

export default function Auth() {
  return (
    <div className="relative block">
      <div className="container mx-auto">
        <div className="flex h-screen w-screen items-center justify-center">
          <div className="h-auto w-full max-w-sm">
            <form className="flex flex-col space-y-6">
              <div className="flex flex-col">
                <Label htmlFor="email">Email</Label>
                <Input
                  type="email"
                  id="email"
                  placeholder="you@example.com"
                  className="mt-2 border border-color-tertiary bg-color-primary-light text-color-secondary-dark"
                />
              </div>
              <div className="flex flex-col">
                <Label htmlFor="password">Password</Label>
                <Input
                  type="password"
                  id="password"
                  placeholder="••••••••"
                  className="mt-2 border border-color-tertiary bg-color-primary-light text-color-secondary-dark"
                />
              </div>
              <div className="flex flex-col">
                <Button
                  className="!mt-4 bg-color-accent-contrast px-4 py-3.5 text-color-primary"
                  block
                >
                  Sign In
                </Button>
              </div>
            </form>
            <div className="my-8 flex items-center text-xs">
              <Separator />
              <span className="whitespace-nowrap px-2">or with</span>
              <Separator />
            </div>
            <div className="flex space-x-4">
              <Button
                className="space-x-2 border border-color-tertiary px-4 py-3 text-color-secondary-light hover:border-color-accent-contrast hover:bg-color-accent-contrast hover:text-color-primary"
                onClick={() => signIn('google')}
                block
              >
                <Icon icon="google" widths={16} height={16} />
                <span>Google</span>
              </Button>
              <Button
                className="space-x-2 border border-color-tertiary px-4 py-3 text-color-secondary-light hover:border-color-accent-contrast hover:bg-color-accent-contrast hover:text-color-primary"
                onClick={() => signIn('github')}
                block
              >
                <Icon icon="github" widths={16} height={16} />
                <span>Github</span>
              </Button>
            </div>
            <div className="mt-6">
              <p className="text-center text-xs leading-normal">
                By continuing, you agree to Dashcloud&apos;s Terms of Service
                and Privacy Policy, and to receive periodic emails with updates.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
