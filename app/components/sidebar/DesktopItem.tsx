'use client';

import clsx from "clsx";
import Link from "next/link";
import React from "react";

interface DesktopItemProps {
  label: string;
  icon: any;
  href: string;
  onClick?: () => void;
  active?: boolean;
}

const DesktopItem: React.FC<DesktopItemProps> = ({
  label,
  icon: Icon,
  href,
  onClick,
  active
}) => {
  const handleClick = () => {
    if (onClick) {
      return onClick();
    }
  };

  return ( 
    <li 
      onClick={handleClick}
      className={clsx(`
        transition-transform 
        duration-300 
        ease-in-out 
        transform 
        hover:scale-105
      `)}
    >
      <Link 
        href={href}
        className={clsx(`
          group
          flex
          items-center
          gap-x-3
          rounded-md
          p-3
          text-sm
          font-semibold
          transition-colors
          duration-300
          ease-in-out
          text-gray-300
          hover:text-white
          hover:bg-gray-800
          dark:text-gray-400
          dark:hover:text-gray-100
          dark:hover:bg-gray-700
        `,
          active && 'bg-gray-800 text-white dark:bg-gray-600 dark:text-gray-100'
        )}
      >
        <Icon className="h-6 w-6 shrink-0" />
        <span className="sr-only">{label}</span>
      </Link>
    </li>
   );
}
 
export default DesktopItem;
