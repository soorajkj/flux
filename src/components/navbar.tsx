/* eslint-disable no-unused-vars */
'use client';

import { useState } from 'react';
import Link from 'next/link';
import { cva, VariantProps } from 'class-variance-authority';
import { routes } from '_constants';
import Pane from '_components/pane';

const styles = cva(
  'absolute left-0 top-0 flex flex-col w-full h-full overflow-y-auto transition-all bg-color-primary border-r border-r-color-tertiary lg:static',
  {
    variants: {
      collapse: {
        true: 'w-60 lg:w-16',
        false: 'w-60 lg:w-60',
      },
      show: {
        true: 'translate-x-0 lg:translate-x-0',
        false: '-translate-x-full lg:translate-x-0',
      },
    },
  }
);

interface NavbarProps extends VariantProps<typeof styles> {}

export default function Navbar({}: NavbarProps) {
  const [collapse, setCollapse] = useState<boolean>(false);
  const [show, setShow] = useState<boolean>(false);

  return (
    <nav className={styles({ collapse, show })}>
      <div className="block h-12"></div>
      <Pane />
      <ul className="flex flex-1 flex-col overflow-y-auto px-0">
        {routes.map(({ href, label }, index) => (
          <li key={index} className="inline-flex">
            <Link
              href={href}
              className="inline-flex h-12 w-full cursor-pointer select-none items-center px-4 py-2 hover:bg-color-primary-light hover:text-color-secondary-dark"
            >
              {label}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}
