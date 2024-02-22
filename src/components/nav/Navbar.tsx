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
import { useState } from 'react';
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
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger
} from '@/components/ui/dialog';
import Account from '../account';
const components: { title: string; href: string }[] = [
  {
    title: '여행 짜러가기',
    href: '/trip'
  },
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
  }
];
export default function Navbar() {
  const { setTheme } = useTheme();
  const [isTheme, setIsTheme] = useState(true);
  return (
    <nav className=' w-full h-auto '>
      <div className='flex lg:p-4 p-4  md:justify-around justify-between'>
        <Link href='/' className='text-3xl font-semibold md:text-3xl'>
          J E J U
        </Link>
        <div className='flex justify-end items-center gap-3'>
          <NavigationMenu className='hidden md:block'>
            <NavigationMenuList>
              <NavigationMenuItem>
                <NavigationMenuTrigger>메뉴</NavigationMenuTrigger>
                <NavigationMenuContent>
                  <ul className=' w-[150px] gap-3 p-4 '>
                    {components.map(component => (
                      <ListItem
                        className='hover:text-amber-400'
                        key={component.title}
                        title={component.title}
                        href={component.href}
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
              <ul className='flex  flex-col justify-center w-full items-center '>
                <li className='border-b-2 p-3 w-full text-center'>
                  <Link href='/trip' className='hover:text-amber-400'>
                    여행 짜러가기
                  </Link>
                </li>
                <li className='border-b-2 p-3 w-full text-center'>
                  <Link href='/evnet' className='hover:text-amber-400'>
                    이벤트
                  </Link>
                </li>
                <li className='border-b-2 p-3 w-full text-center'>
                  <Link href='/mypage' className='hover:text-amber-400'>
                    마이페이지
                  </Link>
                </li>
                <li className='border-b-2 p-3 w-full text-center'>
                  <Link href='/notice' className='hover:text-amber-400'>
                    공지사항
                  </Link>
                </li>
                <li className='border-b-2  p-3 w-full text-center'>
                  <Link href='/faq' className='hover:text-amber-400'>
                    문의하기
                  </Link>
                </li>
                <li className='border-b-2 p-3 w-full text-center'>
                  <Link href='/business' className='hover:text-amber-400'>
                    사업장 전환하기
                  </Link>
                </li>
              </ul>
              <SheetFooter>
                <SheetClose asChild></SheetClose>
              </SheetFooter>
            </SheetContent>
          </Sheet>
          <Dialog>
            <DialogTrigger asChild>
              <Button className='hidden md:block'>로그인</Button>
            </DialogTrigger>
            <Account />
          </Dialog>
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
