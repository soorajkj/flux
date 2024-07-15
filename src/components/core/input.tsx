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
  "relative",
  "inline-flex",
  "h-9",
  "w-full",
  "appearance-none",
  "rounded-lg",
  "border",
  "border-gray-300",
  "bg-white",
  "px-3",
  "py-0.5",
  "text-sm",
  "text-gray-900",
  "placeholder-gray-500",
  "shadow-sm",
  "ring-offset-brand-100",
  "focus-visible:border-brand-300",
  "focus-visible:outline-none",
  "focus-visible:ring-0",
  "focus-visible:ring-transparent",
  "focus-visible:ring-offset-4",
  "disabled:cursor-not-allowed",
  "disabled:border-gray-300",
  "disabled:bg-gray-50",
  "disabled:text-gray-500",
  "peer-[.error]:border-error-500",
]);

Input.displayName = "Input";

export default Input;
