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
  "w-full",
  "rounded-md",
  "border",
  "border-zinc-800/10",
  "bg-zinc-700/5",
  "px-4",
  "py-2.5",
  "text-base",
  "leading-none",
  "transition-colors",
  "file:border-0",
  "file:bg-transparent",
  "file:text-sm",
  "file:font-medium",
  "placeholder:text-zinc-400",
  "focus-visible:outline-none",
  "focus-visible:ring-1",
  "focus-visible:ring-zinc-900/50",
  "disabled:cursor-not-allowed",
  "disabled:opacity-50",
  "peer-[.error]:border-red-400",
  "peer-[.error]:ring-red-100",
]);
