import { AppProps } from 'next/app';
import '_styles/tailwind.css';
import '_styles/app.css';

export default function App({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}
