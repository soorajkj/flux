import { LayoutProps } from '@/types/layout';
import Fonts from '@/components/Fonts';
import ThemeProvider from '@/components/ThemeProvider';
import Navigation from '@/components/Navigation';
import Splitter from '@/components/Splitter';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import '@/styles/app.css';

export default async function AppLayout({ children }: LayoutProps) {
  return (
    <html lang="en">
      <body style={{ fontFamily: 'var(--family-inter)' }}>
        <ThemeProvider>
          <Fonts />
          <div className="flex h-screen w-screen overflow-hidden">
            <div className="h-full w-auto">
              <Navigation />
            </div>
            <Splitter orientation="vertical" />
            <div className="flex h-full flex-1 flex-col">
              <div className="h-auto w-full">
                <Header />
              </div>
              <Splitter orientation="horizontal" />
              <div className="grow overflow-y-auto">{children}</div>
              <Splitter orientation="horizontal" />
              <div className="h-auto w-full">
                <Footer />
              </div>
            </div>
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
