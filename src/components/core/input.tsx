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
  "h-9",
  "w-full",
  "select-none",
  "appearance-none",
  "items-center",
  "gap-2",
  "rounded-md",
  "border",
  "border-neutral-200",
  "bg-white",
  "px-3",
  "py-0.5",
  "text-sm",
  "text-neutral-900",
  "placeholder-neutral-400",
  "shadow-sm",
  "outline-none",
  "disabled:cursor-not-allowed",
  "peer-[.error]:border-red-400",
]);

Input.displayName = "Input";

export default Input;
