import * as React from "react";
import { cva, VariantProps } from "class-variance-authority";
import { classnames } from "~utils/classnames";

const inputStyles = cva(
  "flex h-10 w-full rounded border bg-transparent px-4 py-2 text-sm file:border-0 file:bg-transparent file:text-sm file:font-medium focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
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
