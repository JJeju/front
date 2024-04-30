import type { Metadata } from 'next';
import '@/app/globals.css';

import Navbar from '@/app/components/nav/Navbar';

export const metadata: Metadata = {
  title: 'JEJU 여행 계획',
  description: '제주 여행 코스 짜기'
};

export default function RootLayout({
  children,
  modal
}: //
{
  children: React.ReactNode;
  modal: React.ReactNode;
}) {
  return (
    <div className='h-screen w-screen overflow-hidden'>
      <Navbar />
      {children}
      {modal}
    </div>
  );
}
