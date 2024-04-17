'use client';
import type { Metadata } from 'next';
import './globals.css';
import { Inter as FontSans } from 'next/font/google';
import { ThemeProvider } from '@/components/theme-provider';

import { cn } from '../lib/utils';
// import Navbar from '@/components/nav/Navbar';
import { usePathname, useRouter } from 'next/navigation';
import Footer from '@/components/nav/Footer';
import ReactQueryProvider from './ReactQueryProvider';
import { Toaster } from '@/components/ui/toaster';
import { useEffect, useState } from 'react';
import Hydration from './hydration';
import useUserIdStore from '@/stores/auth';
import dynamic from 'next/dynamic';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';

export const fontSans = FontSans({
  subsets: ['latin'],
  variable: '--font-sans'
});
// export const metadata: Metadata = {
//   title: 'Create Next App',
//   description: 'Generated by create next app'
// };

const Navbar = dynamic(() => import('@/components/nav/Navbar'), {
  ssr: false
});

export default function RootLayout({
  children
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  const getIsLogin = useUserIdStore.getState().isLogin;

  useEffect(() => {
    if (pathname == '/trip/') {
      window.scrollTo(0, 0);
    }
  }, [pathname]);

  return (
    <ReactQueryProvider>
      <html lang='ko' suppressHydrationWarning>
        <head>
          <link rel='icon' href='/favicon.ico' sizes='any' />
          <meta
            name='google-adsense-account'
            content='ca-pub-9925174283422185'
          />
          <meta
            name='JEJU 제주여행 여행계획'
            content='제주 여행 코스를 짤 수 있는 사이트 입니다.'
          />
          {/* <link
            rel='icon'
            href='/icon?<generated>'
            type='image/<generated>'
            sizes='<generated>'
          />
          <link
            rel='apple-touch-icon'
            href='/apple-icon?<generated>'
            type='image/<generated>'
            sizes='<generated>'
          /> */}
        </head>
        <body
          className={cn(
            pathname != '/trip/'
              ? 'bg-background font-sans antialiased'
              : 'overflow-hidden bg-background font-sans antialiased',
            fontSans.variable
          )}
        >
          <Hydration />
          <ThemeProvider
            attribute='class'
            defaultTheme='system'
            enableSystem
            disableTransitionOnChange
          >
            <Navbar getIsLogin={getIsLogin} />

            {children}
            {/* <ReactQueryDevtools
              initialIsOpen={process.env.NEXT_PUBLIC_MODE === 'local'}
            /> */}
            <Toaster />
          </ThemeProvider>
          {pathname != '/trip/' && <Footer />}
        </body>
      </html>
    </ReactQueryProvider>
  );
}
