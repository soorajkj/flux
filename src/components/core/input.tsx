import React, { InputHTMLAttributes } from "react";
import { cva, VariantProps } from "class-variance-authority";
import { cx } from "~lib/utils";

export interface InputProps
  extends InputHTMLAttributes<HTMLInputElement>,
    VariantProps<typeof InputStyles> {}

const Input = React.forwardRef<HTMLInputElement, InputProps>((props, ref) => {
  const { className, type, ...rest } = props;

  return (
    <input
      ref={ref}
      type={type}
      className={cx(InputStyles({ className }))}
      {...rest}
    />
  );
});

Input.displayName = "Input";

export default Input;

const InputStyles = cva([
  "tesseract-input",
  "flex",
  "h-11",
  "w-auto",
  "rounded-md",
  "border",
  "bg-neutral-100",
  "text-neutral-900",
  "border-neutral-300",
  "px-4",
  "py-2.5",
  "text-base",
  "leading-none",
  "transition-colors",
  "file:border-0",
  "file:bg-transparent",
  "file:text-sm",
  "file:font-medium",
  "placeholder:text-neutral-400",
  "focus-visible:outline-none",
  "focus-visible:ring-1",
  "focus-visible:ring-zinc-900/50",
  "disabled:cursor-not-allowed",
  "disabled:opacity-90",
  "peer-[.error]:border-red-400",
  "peer-[.error]:ring-red-100",
]);
