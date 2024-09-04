"use client";

import useConversation from "../../hooks/useConversation";
import useRoutes from "../../hooks/useRoutes";
import MobileItem from "./MobileItem";
import React from "react";
import { FaBrain } from 'react-icons/fa'; // Import AI icon

const MobileFooter = () => {
  const routes = useRoutes();
  const { isOpen } = useConversation();

  if (isOpen) {
    return null;
  }

  // Add the AI route
  const enhancedRoutes = [
    ...routes,
    {
      label: "AI",
      href: "https://solutions.imbesideyou.com/",
      icon: FaBrain, // Use the AI icon
      active: false
    }
  ];

  return ( 
    <div
      className="
        fixed
        bottom-0
        w-full
        z-40
        flex
        items-center
        justify-between
        bg-gray-900
        border-t-[1px]
        border-gray-800
        lg:hidden
        dark:bg-gray-900
        dark:border-gray-800
      "
    >
      {enhancedRoutes.map((route) => (
        <MobileItem
          key={route.href}
          href={route.href}
          active={route.active}
          icon={route.icon}
          onClick={route.onClick}
        />
      ))}
    </div>
   );
}
 
export default MobileFooter;
