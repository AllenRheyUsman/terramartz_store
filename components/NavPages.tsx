// NavPages.tsx
import Link from 'next/link';
import React from 'react';

interface NavPagesProps {
  title: string;
  href: string;
}

const NavPages: React.FC<NavPagesProps> = ({ title, href }) => {
  return (
    <Link href={href} passHref>
      <p className="mx-6 flex items-center space-x-4 lg:space-x-6">
        <button className="relative p-2 rounded-lg outline-none group duration-200 ease-in-out  hover:text-green-950 hover:opacity-100 font-medium tracking-wider opacity-70">
          {title}
          <span className="absolute bottom-0 left-0 right-0 h-[.1rem] duration-200 ease-in-out  bg-green-950 opacity-0 group-hover:opacity-100 transition-opacity rounded-md"></span>
        </button>
      </p>
    </Link>
  );
};

export default NavPages;
