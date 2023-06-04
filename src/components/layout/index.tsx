import { Inter } from 'next/font/google';
import Header from './Header';

const inter = Inter({ subsets: ['latin'] });

type LayoutProps = {
  children: React.ReactNode;
};

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <main className={`min-h-screen p-10 p-lg-24 ${inter.className}`}>
      <Header />
      {children}
    </main>
  );
};

export default Layout;
