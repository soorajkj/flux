import Link from 'next/link';
import Icon from '@/components/icon';

export default function Header() {
  return (
    <header className="h-auto w-full">
      <div className="container">
        <div className="flex h-14 w-full items-center">
          <Link
            href="/dashboard"
            className="inline-flex cursor-pointer select-none items-center justify-center rounded border border-color-tertiary-light bg-color-primary-light px-1 py-1"
          >
            <Icon icon="daybook" width={24} height={24} />
            <span className="sr-only">DayBook</span>
          </Link>
        </div>
      </div>
    </header>
  );
}
