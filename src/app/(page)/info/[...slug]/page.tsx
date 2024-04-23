import Home from '@/app/(page)/page';

export default function page({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Home />
      {children}
    </>
  );
}
