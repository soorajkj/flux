"use client";

import * as React from "react";
import { classnames } from "~lib/utlis";

const Input = React.forwardRef<
  HTMLInputElement,
  React.InputHTMLAttributes<HTMLInputElement>
>((props, ref) => {
  const { type = "text", className, ...rest } = props;

  return (
    <input
      ref={ref}
      type={type}
      className={classnames(
        "flex h-10 w-full rounded-md border border-color-base-200 bg-color-base-000 px-3 py-2 text-base text-color-base-800 ring-offset-color-primary-400 file:border-0 file:bg-color-transparent file:text-sm file:font-medium placeholder:text-color-base-400 focus-visible:border-color-primary-200 focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-color-primary-100 focus-visible:ring-offset-0 disabled:bg-color-base-100 disabled:opacity-50 peer-[.error]:border-color-error-400 peer-[.error]:ring-color-error-100",
        className
      )}
      {...rest}
    />
  );
});

Input.displayName = "Input";

export { Input };
