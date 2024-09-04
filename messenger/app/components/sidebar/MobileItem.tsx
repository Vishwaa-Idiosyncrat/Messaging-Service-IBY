"use client";

import Link from "next/link";
import clsx from "clsx";
import React from "react";

interface MobileItemProps {
  href: string;
  icon: any;
  active?: boolean;
  onClick?: () => void;
}

const MobileItem: React.FC<MobileItemProps> = ({
  href,
  icon: Icon,
  active,
  onClick
}) => {
  const handleClick = () => {
    if (onClick) {
      return onClick();
    }
  }

  return ( 
    <Link 
      onClick={handleClick}
      href={href}
      className={clsx(`
        group
        flex
        gap-x-3
        text-sm
        leading-6
        font-semibold
        w-full
        justify-center
        p-4
        text-gray-400
        hover:text-white
        hover:bg-gray-700
        dark:text-gray-400
        dark:hover:text-white
        dark:hover:bg-gray-700
      `,
        active && "bg-gray-800 text-white dark:bg-gray-700"
      )}
    >
      <Icon className="h-6 w-6" />
    </Link>
   );
}
 
export default MobileItem;
