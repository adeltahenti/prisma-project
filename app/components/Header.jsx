'use client';

import Link from 'next/link';
import { useState } from 'react';
import { MdOutlineDarkMode, MdOutlineLightMode } from 'react-icons/md';

const Header = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const onClickHandler = () => {
    const lMode = document.getElementById('lMode');
    const dMode = document.getElementById('dMode');

    setIsDarkMode(!isDarkMode);

    if (!isDarkMode) {
      dMode.classList.add('hidden');
      lMode.classList.remove('hidden');
      document.documentElement.classList.add('dark');
    } else {
      dMode.classList.remove('hidden');
      lMode.classList.add('hidden');
      document.documentElement.classList.remove('dark');
    }
  };

  return (
    <header className='bg-gray-100 dark:bg-darktheme'>
      <nav className='container py-4 mb-5 flex items-center justify-between'>
        <Link href='/' className='text-3xl font-bold'>
          A
        </Link>
        <span className='flex items-center gap-6'>
          <span className='flex gap-2'>
            <Link href='/'>Home</Link>
            <Link href='/about'>About</Link>
          </span>
          <span className='group flex relative'>
            <button onClick={onClickHandler}>
              <MdOutlineDarkMode id='dMode' />
              <MdOutlineLightMode id='lMode' className='hidden' />
            </button>
            <span
              className='group-hover:opacity-100 transition-opacity bg-gray-800 px-2 py-1 text-[12px] text-gray-100 rounded-md absolute left-1/2 
    -translate-x-1/2 translate-y-full opacity-0 mt-2 mx-auto'
            >
              {!isDarkMode ? 'Dark Mode' : 'Light Mode'}
            </span>
          </span>
        </span>
      </nav>
    </header>
  );
};

export default Header;
