import { AppProps } from 'next/app';
import { Inter } from '@next/font/google';
import '_styles/tailwind.css';
import '_styles/app.css';

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' });

export default function App({ Component, pageProps }: AppProps) {
  return (
    <div className={`${inter.variable} font-inter`}>
      <Component {...pageProps} />
    </div>
  );
}
