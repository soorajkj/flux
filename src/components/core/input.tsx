import * as React from "react";
import { cva, VariantProps } from "class-variance-authority";
import { classnames } from "~lib/utlis";

const inputStyles = cva(
  "file:bg-transparent flex h-10 w-full rounded-lg border border-color-neutral-300 bg-color-neutral-025 px-4 py-2 text-color-neutral-900 shadow-sm file:border-0 file:text-sm file:font-medium placeholder:text-sm placeholder:font-normal placeholder:tracking-wide placeholder:text-color-neutral-500 focus-visible:border-color-primary-400 focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-color-primary-100 focus-visible:ring-offset-0 disabled:cursor-not-allowed disabled:opacity-50"
);

interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement>,
    VariantProps<typeof inputStyles> {}

const Input = React.forwardRef<HTMLInputElement, InputProps>((props, ref) => {
  const { type = "text", className, ...rest } = props;

  return (
    <input
      ref={ref}
      type={type}
      className={classnames(inputStyles({ className }))}
      {...rest}
    />
  );
});

Input.displayName = "Input";

export { Input };
