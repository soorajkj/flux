import * as React from "react";
import { cva, VariantProps } from "class-variance-authority";
import { classnames } from "~lib/utlis";

const inputStyles = cva(
  "flex h-10 w-full rounded-md border border-neutral-800 bg-transparent px-3 py-2 text-sm ring-offset-neutral-900 file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-neutral-800 focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
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
