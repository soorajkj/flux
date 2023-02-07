import * as React from 'react';
import Link, { LinkProps } from 'next/link';
import { cva, VariantProps } from 'class-variance-authority';

const ActiveRouteStyles = cva('route');

interface ActiveRouteProps
  extends LinkProps,
    VariantProps<typeof ActiveRouteStyles> {
  children?: React.ReactNode;
  className?: any;
}

export default function ActiveRoute(props: ActiveRouteProps) {
  const { children, href, className, ...rest } = props;

  return (
    <Link href={href} className={ActiveRouteStyles({ className })} {...rest}>
      {children}
    </Link>
  );
}
