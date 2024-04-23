'use client';
import { useEffect, useState } from 'react';
import { useRouter, usePathname, useSearchParams } from 'next/navigation';

function ScrollToTop() {
  const [prevPath, setPrevPath] = useState('');
  const pathname = usePathname();
  const searchParams = useSearchParams();

  useEffect(() => {
    // 페이지 전환 시 스크롤 위치 저장 및 복원
    const handleScroll = () => {
      sessionStorage.setItem(prevPath, window.scrollY.toString());
    };

    // 이전 페이지로 이동 시 스크롤 위치 복원
    const storedScrollY = sessionStorage.getItem(prevPath);
    if (storedScrollY !== null) {
      window.scrollTo(0, parseInt(storedScrollY, 10));
    }

    // 스크롤 이벤트 리스너 추가
    window.addEventListener('scroll', handleScroll);

    // 컴포넌트 언마운트 시 스크롤 이벤트 리스너 제거
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [pathname, searchParams]);

  return null;
}

export default ScrollToTop;
