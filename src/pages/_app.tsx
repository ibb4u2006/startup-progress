import Layout from '@/components/layout';
import StageProgressProvider from '@/context/StageProgressProvider';
import '@/styles/globals.css';
import type { AppProps } from 'next/app';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <StageProgressProvider>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </StageProgressProvider>
  );
}
