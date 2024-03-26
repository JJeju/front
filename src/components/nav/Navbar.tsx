'use client';
import * as React from 'react';
import Link from 'next/link';
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger
} from '@/components/ui/sheet';
import { Button, buttonVariants } from '@/components/ui/button';

import { cn } from '@/lib/utils';
import { AiOutlineAlignRight } from 'react-icons/ai';
import { useTheme } from 'next-themes';
import { Moon, Sun } from 'lucide-react';
import { useEffect, useState } from 'react';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger
} from '@/components/ui/dropdown-menu';
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger
} from '@/components/ui/navigation-menu';
import { Dialog, DialogTrigger } from '@/components/ui/dialog';
import Account from '../account';
import Journey from '../journey';
import authApi from '@/service/auth';
import useUserIdStore from '@/stores/auth';
import { useIsLoggedIn } from '@/utility/hooks/useIsLogin';
import { ToastAction } from '@/components/ui/toast';
import { useToast } from '@/components/ui/use-toast';
import { useStore } from 'zustand';
import { useRouter } from 'next/navigation';

const logincomponents: { title: string; href: string }[] = [
  {
    title: '이벤트',
    href: '/event'
  },
  {
    title: '마이페이지',
    href: '/mypage'
  },
  {
    title: '공지사항',
    href: '/notice'
  },
  {
    title: '문의하기',
    href: '/faq'
  },
  {
    title: '사업장 전환하기',
    href: '/business'
  },
  {
    title: '여행 리뷰',
    href: '/travelreview'
  }
];

const components: { title: string; href?: string; toast?: boolean }[] = [
  {
    title: '이벤트',
    href: '/event'
  },
  {
    title: '마이페이지',
    toast: true
  },
  {
    title: '공지사항',
    href: '/notice'
  },
  {
    title: '문의하기',
    href: '/faq'
  },
  {
    title: '사업장 전환하기',
    toast: true
  },
  {
    title: '여행 리뷰',
    toast: true
  }
];

export default function Navbar({ getIsLogin }: any) {
  const { setTheme } = useTheme();
  const isLogin = useUserIdStore(state => state.isLogin);
  const setIsLogin = useUserIdStore(state => state.setIsLogin);
  const isLoggedIn = useIsLoggedIn();
  const mutateLogout = authApi.GetLogout();
  const { isError, error, mutate } = mutateLogout;
  const { toast } = useToast();
  const [hydrated, setHydrated] = useState(false);

  const router = useRouter();

  useEffect(() => {
    setHydrated(true);
  }, []);

  const handleLogout = () => {
    mutate();
    setIsLogin(false);
    router.replace('/');

    // clearUserIdStorage();
  };

  return (
    <nav className=' w-full h-auto '>
      <div className='flex lg:p-4 p-4  md:justify-around justify-between'>
        <Link href='/' className='text-3xl font-semibold md:text-3xl'>
          J E J U
        </Link>
        <div className='flex ju00stify-end items-center gap-3'>
          <NavigationMenu className='hidden md:block'>
            <NavigationMenuList>
              <NavigationMenuItem>
                <NavigationMenuTrigger>메뉴</NavigationMenuTrigger>
                <NavigationMenuContent>
                  <ul className=' w-[150px] gap-3 p-4 '>
                    {isLogin
                      ? logincomponents.map(component => (
                          <ListItem
                            className='hover:text-amber-400'
                            key={component.title}
                            title={component.title}
                            href={component.href}
                          ></ListItem>
                        ))
                      : components.map(component => (
                          <ListItem
                            className='hover:text-amber-400'
                            key={component.title}
                            title={component.title}
                            href={component.href}
                            onClick={() =>
                              component.toast &&
                              toast({
                                title: '로그인이 필요합니다.',
                                description: '로그인 후 이용해주세요.',
                                action: (
                                  <ToastAction altText='Try again'>
                                    확인
                                  </ToastAction>
                                )
                              })
                            }
                          ></ListItem>
                        ))}
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>

          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant='outline' size='icon'>
                <Sun className='h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0' />
                <Moon className='absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100' />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align='end'>
              <DropdownMenuItem onClick={() => setTheme('light')}>
                Light
              </DropdownMenuItem>
              <DropdownMenuItem onClick={() => setTheme('dark')}>
                Dark
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
          <Sheet>
            <SheetTrigger>
              <AiOutlineAlignRight className='block md:hidden' />
            </SheetTrigger>
            <SheetContent>
              <SheetHeader>
                <SheetTitle className='font-semibold text-2xl'>
                  J E J U
                </SheetTitle>
                <SheetDescription>
                  나만의 여행코스를 만들어보세요. <br />
                  편리하게 여행코스를 관리할 수 있습니다.
                </SheetDescription>
              </SheetHeader>
              {isLogin && isLoggedIn ? (
                <Button
                  size='lg'
                  className='w-full my-4'
                  onClick={() => handleLogout()}
                >
                  로그아웃
                </Button>
              ) : (
                <div className='my-8 gap-3 flex flex-col font-bold text-sm '>
                  로그인이 필요합니다.
                  <Dialog>
                    <DialogTrigger asChild>
                      <Button size='lg' className=''>
                        로그인
                      </Button>
                    </DialogTrigger>
                    <Account />
                  </Dialog>
                </div>
              )}

              <ul className='flex  flex-col justify-center w-full items-center '>
                <li className='border-b-2 p-3 w-full text-center'>
                  {isLogin ? (
                    <Dialog>
                      <DialogTrigger>
                        <button className='hover:text-amber-400'>
                          여행 짜러가기
                        </button>
                      </DialogTrigger>
                      <Journey />
                    </Dialog>
                  ) : (
                    <button
                      className='hover:text-amber-400'
                      onClick={() => {
                        toast({
                          title: '로그인이 필요합니다.',
                          description: '로그인 후 이용해주세요.',
                          action: (
                            <ToastAction altText='Try again'>확인</ToastAction>
                          )
                        });
                      }}
                    >
                      여행 짜러가기
                    </button>
                  )}
                </li>
                <li className='border-b-2 p-3 w-full text-center'>
                  <Link href='/evnet' className='hover:text-amber-400'>
                    이벤트
                  </Link>
                </li>
                <li className='border-b-2 p-3 w-full text-center'>
                  {isLogin ? (
                    <Link
                      href='/mypage'
                      prefetch={false}
                      className='hover:text-amber-400'
                    >
                      마이페이지
                    </Link>
                  ) : (
                    <Link
                      className='hover:text-amber-400'
                      href=''
                      onClick={() => {
                        toast({
                          title: '로그인이 필요합니다.',
                          description: '로그인 후 이용해주세요.',
                          action: (
                            <ToastAction altText='Try again'>확인</ToastAction>
                          )
                        });
                      }}
                    >
                      마이페이지
                    </Link>
                  )}
                </li>
                <li className='border-b-2 p-3 w-full text-center'>
                  <Link href='/notice' className='hover:text-amber-400'>
                    공지사항
                  </Link>
                </li>
                {isLogin ? (
                  <li className='border-b-2 p-3 w-full text-center'>
                    <Link href='/travelreview' className='hover:text-amber-400'>
                      여행 리뷰
                    </Link>
                  </li>
                ) : (
                  <li className='border-b-2 p-3 w-full text-center'>
                    <Link
                      className='hover:text-amber-400'
                      href=''
                      onClick={() => {
                        toast({
                          title: '로그인이 필요합니다.',
                          description: '로그인 후 이용해주세요.',
                          action: (
                            <ToastAction altText='Try again'>확인</ToastAction>
                          )
                        });
                      }}
                    >
                      여행 리뷰
                    </Link>
                  </li>
                )}
                <li className='border-b-2  p-3 w-full text-center'>
                  <Link href='/faq' className='hover:text-amber-400'>
                    사업장 전환하기
                  </Link>
                </li>
                <li className='border-b-2 p-3 w-full text-center'>
                  {isLogin ? (
                    <Link href='/business' className='hover:text-amber-400'>
                      사업장 전환하기
                    </Link>
                  ) : (
                    <Link
                      className='hover:text-amber-400'
                      href=''
                      onClick={() => {
                        toast({
                          title: '로그인이 필요합니다.',
                          description: '로그인 후 이용해주세요.',
                          action: (
                            <ToastAction altText='Try again'>확인</ToastAction>
                          )
                        });
                      }}
                    >
                      마이페이지
                    </Link>
                  )}
                </li>
              </ul>
              <SheetFooter>
                <SheetClose asChild></SheetClose>
              </SheetFooter>
            </SheetContent>
          </Sheet>
          {isLogin && isLoggedIn ? (
            <Button className='hidden md:block' onClick={() => handleLogout()}>
              로그아웃
            </Button>
          ) : (
            <Dialog>
              <DialogTrigger asChild>
                <Button className='hidden md:block'>로그인</Button>
              </DialogTrigger>
              <Account />
            </Dialog>
          )}
        </div>
      </div>
    </nav>
  );
}

const ListItem = React.forwardRef<
  React.ElementRef<'a'>,
  React.ComponentPropsWithoutRef<'a'>
>(({ className, title, children, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <a
          ref={ref}
          className={cn(
            'block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground',
            className
          )}
          {...props}
        >
          <div className='text-sm font-medium leading-none'>{title}</div>
          <p className='line-clamp-2 text-sm leading-snug text-muted-foreground'>
            {children}
          </p>
        </a>
      </NavigationMenuLink>
    </li>
  );
});
ListItem.displayName = 'ListItem';
