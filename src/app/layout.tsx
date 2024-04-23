import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { cn } from '@/lib/utils';
import '@/app/globals.css';
import ReactQueryProvider from './ReactQueryProvider';
import { Noto_Sans_KR } from 'next/font/google';

const notoSansKr = Noto_Sans_KR({
  weight: ['500'],
  subsets: ['latin']
});

export const metadata: Metadata = {
  title: 'JEJU 제주여행 여행계획',
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
          <link rel='icon' href='/favicon.ico' sizes='any' />
          <meta
            charSet='UTF-8'
            name='google-adsense-account'
            content='ca-pub-9925174283422185'
          />
          <meta
            name='JEJU'
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
        <body className={cn('bg-background font-sans antialiased', notoSansKr)}>
          {children}
          {/* <ReactQueryDevtools
            initialIsOpen={process.env.NEXT_PUBLIC_MODE === 'local'}
          /> */}
        </body>
      </html>
    </ReactQueryProvider>
  );
}
