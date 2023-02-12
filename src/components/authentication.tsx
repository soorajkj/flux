'use client';

import { signIn } from 'next-auth/react';
import Button from '@/components/button';
import Input from '@/components/input';
import Label from '@/components/label';
import Separator from '@/components/separator';

export default function Authentication() {
  return (
    <div className="my-40 mx-auto max-w-xs">
      <div className="flex flex-col">
        <div className="mb-10 space-y-4">
          <div className="space-y-1">
            <Label htmlFor="email">Email</Label>
            <Input
              id="email"
              placeholder="example@gmail.com"
              className="w-full border border-color-tertiary placeholder:text-color-tertiary-dark"
            />
          </div>
          <div className="space-y-1">
            <Label htmlFor="password">Password</Label>
            <Input
              id="password"
              placeholder="••••••••"
              className="w-full border border-color-tertiary placeholder:text-color-tertiary-dark"
            />
          </div>
          <div>
            <Button
              type="submit"
              className="mt-4 block w-full bg-color-secondary-dark py-2 px-6 text-color-primary"
            >
              Signin
            </Button>
          </div>
        </div>
        <div className="flex items-center space-x-4">
          <Separator />
          <div className="whitespace-nowrap text-center text-xs">Or with</div>
          <Separator />
        </div>
        <div className="mt-10 flex items-center space-x-4">
          <Button
            className="w-full border border-color-tertiary py-2 px-6"
            onClick={() => signIn('google')}
          >
            Google
          </Button>
          <Button
            className="w-full border border-color-tertiary py-2 px-6"
            onClick={() => signIn('github')}
          >
            Github
          </Button>
        </div>
      </div>
    </div>
  );
}
