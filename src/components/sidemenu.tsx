'use client';

import { useState } from 'react';
import Link from 'next/link';
import { cva } from 'class-variance-authority';
import { InfRoute } from '_types';
import { routes } from '_constants';
import Icon from '_components/core/icon';

const SidemenuStyles = cva('group h-full transition-all', {
  variants: {
    state: {
      true: 'w-64',
      false: 'w-14',
    },
  },
});

export default function Sidemenu() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className={SidemenuStyles({ state: isOpen })}>
      <div className="mx-2 h-14 w-full">
        <button onClick={() => setIsOpen((pre) => !pre)}>*</button>
      </div>
      <div className="h-full w-full pb-14">
        <ul className="flex h-full w-full flex-col space-y-2 overflow-y-auto px-2">
          {routes.map(({ id, path, label, icon, active }: InfRoute) => (
            <li key={id} className="inline-flex">
              <Link
                href={path}
                className="flex h-10 w-full items-center overflow-hidden rounded bg-color-primary text-color-secondary-light
                hover:bg-color-primary-dark group-[.w-14]:justify-center group-[.w-64]:px-4"
                data-active={active}
              >
                <span className="inline-block">
                  <Icon icon={icon} width={18} height={18} />
                </span>
                <span className="ml-2 truncate capitalize group-[.w-64]:block group-[.w-14]:hidden">
                  {label}
                </span>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}
