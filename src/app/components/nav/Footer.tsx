import { FacebookIcon, LinkedinIcon, TwitterIcon } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

export default function Footer() {
  return (
    <footer className='w-full border-t'>
      <div className='container grid gap-6 py-8 md:grid-cols-2 md:py-12 lg:gap-8 lg:py-10 xl:gap-12 xl:py-14'>
        <div className='flex items-center space-x-4'>
          <p className='text-sm text-gray-500 dark:text-gray-400'>
            © 2021 Travel
          </p>
        </div>

        <div className='grid gap-1 text-sm md:justify-self-end lg:text-base xl:gap-2'>
          <p className='text-gray-500 dark:text-gray-400'>
            sanguu516@example.com
          </p>
          <p className='text-gray-500 dark:text-gray-400'>+1 (123) 456-7890</p>
          <div className='flex  gap-4 text-2xl mt-3'>
            <Link
              className='text-gray-400 hover:text-gray-600 dark:hover:text-gray-300'
              href='#'
            >
              <FacebookIcon className='w-6 h-6' />
              <span className='sr-only'>Facebook</span>
            </Link>
            <Link
              className='text-gray-400 hover:text-gray-600 dark:hover:text-gray-300'
              href='#'
            >
              <TwitterIcon className='w-6 h-6' />
              <span className='sr-only'>Twitter</span>
            </Link>
            <Link
              className='text-gray-400 hover:text-gray-600 dark:hover:text-gray-300'
              href='#'
            >
              <LinkedinIcon className='w-6 h-6' />
              <span className='sr-only'>LinkedIn</span>
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
