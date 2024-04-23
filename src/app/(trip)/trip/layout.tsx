import type { Metadata } from 'next';
import '@/app/globals.css';
import { Inter as FontSans } from 'next/font/google';

import useUserIdStore from '@/stores/auth';
import dynamic from 'next/dynamic';
import Navbar from '@/app/components/nav/Navbar';

export const metadata: Metadata = {
  title: 'JEJU 여행 계획',
  description: '제주 여행 코스 짜기'
};

// const Navbar = dynamic(() => import('@/components/nav/Navbar'), {
//   ssr: false
// });

export default function RootLayout({
  children
}: {
  children: React.ReactNode;
}) {
  const getIsLogin = useUserIdStore.getState().isLogin;

  return (
    <div className='h-screen w-screen overflow-hidden'>
      <Navbar />
      {children}
    </div>
  );
}
