import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { Toaster } from '@/app/components/ui/toaster';
import { cn } from '@/lib/utils';
import '@/app/globals.css';
import ReactQueryProvider from './ReactQueryProvider';
import { Noto_Sans_KR } from 'next/font/google';
import Hydration from './hydration';
import { ThemeProvider } from '@/app/components/theme-provider';
import Head from 'next/head';
import { StrictMode } from 'react';

const notoSansKr = Noto_Sans_KR({
  weight: ['500'],
  subsets: ['latin']
});

export const metadata: Metadata = {
  title: 'JEJU | 제주여행 | 여행계획',
  description: '제주 여행 코스를 짤 수 있는 사이트 입니다.'
};

type Props = {
  children: React.ReactNode;
};

export default function RootLayout({ children }: Props) {
  return (
    <StrictMode>
      <ReactQueryProvider>
        <html lang='en' suppressHydrationWarning>
          <head>
            {/* <meta
            name='google-site-verification'
            content='t7k90RyFLJRCBeCvhXQ1wiD6_mFnh-MmyPfp6hynDZ4'
          /> */}
            <link rel='icon' href='/favicon.ico' sizes='any' />
            <meta property='og:url' content='http://jjeju.site' />
            <meta
              property='og:title'
              content='제주 여행 코스 - JEJU 제주여행 여행계획'
            />
            <meta
              property='og:description'
              content='제주 여행 코스를 짜고 여행을 계획할 수 있는 사이트입니다. 제주도의 다양한 관광명소와 여행 정보를 제공합니다.'
            />
            <meta property='og:type' content='website' />
            <meta property='og:image' content='http://jjeju.site/main.png' />
            <meta property='og:site_name' content='JEJU' />
            <meta property='og:locale' content='ko_KR' />
            <meta property='og:image:width' content='1200' />
            <meta property='og:image:height' content='630' />

            <meta name='twitter:card' content='summary_large_image' />
            <meta
              name='twitter:title'
              content='제주 여행 코스 - JEJU 제주여행 여행계획'
            />
            <meta
              name='twitter:description'
              content='제주 여행 코스를 짜고 여행을 계획할 수 있는 사이트입니다. 제주도의 다양한 관광명소와 여행 정보를 제공합니다.'
            />
            <meta name='twitter:image' content='/main.png' />

            <meta property='al:web:url' content='http://jjeju.site' />
          </head>
          <body
            className={cn('bg-background font-sans antialiased', notoSansKr)}
          >
            <Hydration />
            <ThemeProvider
              attribute='class'
              defaultTheme='system'
              enableSystem
              disableTransitionOnChange
            >
              {children}
            </ThemeProvider>
            {/* <ReactQueryDevtools
            initialIsOpen={process.env.NEXT_PUBLIC_MODE === 'local'}
          /> */}
            <Toaster />
          </body>
        </html>
      </ReactQueryProvider>
    </StrictMode>
  );
}
