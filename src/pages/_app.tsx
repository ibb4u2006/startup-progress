import ErrorBoundary from '@/components/errors/ErrorBoundary';
import Layout from '@/components/layout';
import StageProgressProvider from '@/context/StageProgressProvider';
import '@/styles/globals.css';
import type { AppProps } from 'next/app';
import { QueryClient, QueryClientProvider } from 'react-query';

// Create react query client
const queryClient = new QueryClient();

export default function App({ Component, pageProps }: AppProps) {
  return (
    <Layout>
      <ErrorBoundary>
        <QueryClientProvider client={queryClient}>
          <StageProgressProvider>
            <Component {...pageProps} />
          </StageProgressProvider>
        </QueryClientProvider>
      </ErrorBoundary>
    </Layout>
  );
}
