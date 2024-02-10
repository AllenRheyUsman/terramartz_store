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
        <button className="relative p-2 rounded-lg outline-none group hover:text-purple-500 font-bold">
          {title}
          <span className="absolute bottom-0 left-0 right-0 h-1 bg-purple-500 opacity-0 group-hover:opacity-100 transition-opacity "></span>
        </button>
      </p>
    </Link>
  );
};

export default NavPages;
