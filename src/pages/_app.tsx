import type { AppProps } from 'next/app';
import DashboardLayout from '_layouts/dashboard';
import '_styles/tailwind.css';
import '_styles/app.css';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <DashboardLayout>
      <Component {...pageProps} />
    </DashboardLayout>
  );
}
