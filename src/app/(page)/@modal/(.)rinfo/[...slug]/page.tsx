'use client';
import { Dialog } from '@/app/components/ui/dialog';
import { use, useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import TripReview from '@/app/components/tripreview/TripReview';

export default function Page({ params }: { params: { slug: any } }) {
  const [open, setOpen] = useState(true);
  const router = useRouter();
  useEffect(() => {
    // 페이지 언마운트시 url 메인페이지로 변경
    if (!open) router.back();
  }, [open]);

  return (
    <>
      <Dialog open={open} onOpenChange={setOpen}>
        <TripReview id={params.slug[0]} />
      </Dialog>
    </>
  );
}
