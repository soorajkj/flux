'use client';

import { useState } from 'react';
import { cva } from 'class-variance-authority';
import Icon from '@/components/atoms/icon';
import Toggle from '@/components/atoms/toggle';

const SidebarStyles = cva('group relative h-full transition-all', {
  variants: {
    isOpen: {
      true: 'w-0 lg:w-64',
      false: 'w-0 lg:w-14',
    },
  },
});

export default function Sidebar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className={SidebarStyles({ isOpen })}>
      <Toggle
        aria-label="toggle sidebar"
        className="absolute -right-3 top-4 flex h-6 w-6 items-center justify-center rounded-full bg-color-primary-dark text-color-secondary transition hover:bg-color-primary-contrast hover:text-color-secondary-dark"
        onClick={() => setIsOpen((pre) => !pre)}
      >
        <Icon
          icon="arrowRight"
          width={14}
          height={14}
          className={!isOpen ? 'rotate-0' : 'rotate-180'}
        />
      </Toggle>
    </nav>
  );
}
