import * as React from "react";
import { cva, VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement>,
    VariantProps<typeof InputStyles> {}

const Input = React.forwardRef<HTMLInputElement, InputProps>((props, ref) => {
  const { className, type, ...rest } = props;

  return (
    <input
      ref={ref}
      type={type}
      className={cn(InputStyles({ className }))}
      {...rest}
    ></input>
  );
});

const InputStyles = cva([
  "inline-flex",
  "h-10",
  "w-full",
  "select-none",
  "appearance-none",
  "items-center",
  "gap-2",
  "rounded-lg",
  "border",
  "border-zinc-300",
  "bg-transparent",
  "px-3",
  "py-2",
  "text-base",
  "text-zinc-900",
  "placeholder-zinc-400",
  "shadow-sm",
  "outline-none",
  "disabled:cursor-not-allowed",
  "peer-[.error]:border-red-300",
  "peer-[.error]:ring-red-600/20",
  "dark:bg-transparent",
  "dark:border-zinc-800",
  "dark:text-zinc-200",
  "dark:placeholder-zinc-700",
]);

Input.displayName = "Input";

export default Input;
