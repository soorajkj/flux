import { AppProps } from 'next/app';
import Layout from '_components/layout';
import '_styles/tailwind.css';
import '_styles/app.css';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <Layout id="__layout">
      <Component {...pageProps} />
    </Layout>
  );
}
