import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { Toaster } from '@/app/components/ui/toaster';
import { cn } from '@/lib/utils';
import '@/app/globals.css';
import ReactQueryProvider from './ReactQueryProvider';
import { Noto_Sans_KR } from 'next/font/google';
import Hydration from './hydration';
import { ThemeProvider } from '@/app/components/theme-provider';
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
    <ReactQueryProvider>
      <html lang='en' suppressHydrationWarning>
        <head>
          <meta
            name='google-site-verification'
            content='t7k90RyFLJRCBeCvhXQ1wiD6_mFnh-MmyPfp6hynDZ4'
          />
          <link rel='icon' href='/favicon.ico' sizes='any' />
          <title>제주 여행 코스 - JEJU 제주여행 여행계획</title>
          <meta
            name='google-adsense-account'
            content='ca-pub-9925174283422185'
          />
          <meta
            name='JEJU'
            content='제주도 여행 코스를 짤 수 있는 사이트 입니다.'
          />
          <meta
            name='description'
            content='제주 여행 코스를 짜고 여행을 계획할 수 있는 사이트입니다. 제주도의 다양한 관광명소와 여행 정보를 제공합니다.'
          />
          <meta
            property='og:title'
            content='제주 여행 코스 - JEJU 제주여행 여행계획'
          />
          <meta
            property='og:description'
            content='제주 여행 코스를 짜고 여행을 계획할 수 있는 사이트입니다. 제주도의 다양한 관광명소와 여행 정보를 제공합니다.'
          />
          <meta property='og:image' content='/main.png' />
          <meta property='og:url' content='http://jjeju.site' />

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
        <body className={cn('bg-background font-sans antialiased', notoSansKr)}>
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
  );
}
