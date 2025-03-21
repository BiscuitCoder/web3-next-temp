import '@/styles/globals.scss';
import 'remixicon/fonts/remixicon.css';

import clsx from 'clsx';
import {
  Metadata,
  Viewport,
} from 'next';

import { Navbar } from '@/components/Navbar';
import { fontSans } from '@/config/fonts';
import { siteConfig } from '@/config/site';
import StyledComponentsRegistry from '@/lib/registry';
import { Link } from '@heroui/link';

import { Providers } from './providers';
import WalletProvider from './walletProvider';

export const metadata: Metadata = {
  title: {
    default: siteConfig.name,
    template: `%s - ${siteConfig.name}`,
  },
  description: siteConfig.description,
  icons: {
    icon: "/favicon.ico",
  },
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "white" },
    { media: "(prefers-color-scheme: dark)", color: "black" },
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html suppressHydrationWarning lang="en">
      <head />
      <body
        className={clsx(
          "min-h-screen bg-background font-sans antialiased",
          fontSans.variable,
        )}
      >
        <StyledComponentsRegistry>
         
            <Providers themeProps={{ attribute: "class", defaultTheme: "dark" }}>
              <WalletProvider>
                <div className="relative flex flex-col h-screen">
                  <Navbar />
                  <main className="container mx-auto max-w-7xl pt-16 px-6 flex-grow">
                    {children}
                  </main>
                  <footer className="w-full flex items-center justify-center py-3">
                    <Link
                      isExternal
                      className="flex items-center gap-1 text-current"
                      href="https://0xspace.tech/"
                      title="heroui.com homepage"
                    >
                      <span className="text-default-600">Powered by</span>
                      <span className="text-primary underline">0xSapce</span>
                    </Link>
                  </footer>
                </div>
              </WalletProvider>
            </Providers>
          </StyledComponentsRegistry>
      </body>
    </html>
  );
}
