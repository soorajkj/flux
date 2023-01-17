'use client';

import { useState } from 'react';
import Link from 'next/link';
import { cva, VariantProps } from 'class-variance-authority';

const navbarStyles = cva(
  'ua-sidenav flex flex-col duration-300 ease-in-out overflow-y-auto w-full h-full',
  {
    variants: {
      collapse: {
        true: 'w-16',
        false: 'w-72',
      },
    },
  }
);

interface NavbarProps extends VariantProps<typeof navbarStyles> {}

export default function Navbar({}: NavbarProps) {
  // eslint-disable-next-line no-unused-vars
  const [collapse, setCollapse] = useState(false);

  return (
    <nav className={navbarStyles({ collapse })}>
      <div className="block h-16"></div>
      <ul className="flex flex-1 flex-col overflow-y-auto px-0">
        {[
          { href: '/', label: 'Menu one', icon: 'i' },
          { href: '/', label: 'Menu two', icon: 'i' },
          { href: '/', label: 'Menu three', icon: 'i' },
          { href: '/', label: 'Menu four', icon: 'i' },
          { href: '/', label: 'Menu five', icon: 'i' },
        ].map(({ href, label }, i) => (
          <li key={i} className="inline-flex">
            <Link
              href={href}
              className="inline-flex h-14 w-full cursor-pointer select-none items-center px-4 py-2 hover:bg-color-primary-light hover:text-color-secondary-dark"
            >
              {!collapse && <span className="transition">{label}</span>}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}
