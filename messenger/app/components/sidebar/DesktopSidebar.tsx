'use client';

import { useState } from "react";
import { User } from "@prisma/client";
import useRoutes from "../../hooks/useRoutes";
import Avatar from "../Avatar";
import DesktopItem from "./DesktopItem";
import SettingsModal from "./SettingsModal";
import React from "react";
import { FaBrain } from 'react-icons/fa'; 

interface DesktopSidebarProps {
  currentUser: User
}

const DesktopSidebar: React.FC<DesktopSidebarProps> = ({
  currentUser
}) => {
  const routes = useRoutes();
  const [isOpen, setIsOpen] = useState(false);

  const enhancedRoutes = [
    ...routes,
    {
      label: "AI",
      href: "https://solutions.imbesideyou.com/",
      icon: FaBrain, 
      active: false
    }
  ];

  return (
    <>
      <SettingsModal
        currentUser={currentUser}
        isOpen={isOpen}
        onClose={() => setIsOpen(false)}
      />
      <div
        className="
          hidden
          lg:fixed
          lg:inset-y-0
          lg:left-0
          lg:z-40
          lg:w-20
          xl:px-6
          lg:overflow-y-auto
          lg:bg-gray-900
          lg:border-r-[1px]
          lg:border-gray-800
          lg:pb-4
          lg:flex
          lg:flex-col
          justify-between
          dark:bg-gray-900
          dark:border-gray-800
        "
      >
        <nav
          className="
            mt-4
            flex
            flex-col
            justify-between
          "
        >
          <ul
            role="list"
            className="
              flex
              flex-col
              items-center
              space-y-1
            "
          >
            {enhancedRoutes.map((item) => (
              <DesktopItem
                key={item.label}
                href={item.href}
                label={item.label}
                icon={item.icon}
                active={item.active}
                onClick={item.onClick}
              />
            ))}
          </ul>
        </nav>
        <nav
          className="
            mt-4
            flex
            flex-col
            justify-between
            items-center
          "
        >
          <div
            onClick={() => setIsOpen(true)}
            className="
              cursor-pointer
              hover:opacity-75
              transition
              text-gray-300
              hover:text-white
              dark:text-gray-300
              dark:hover:text-white
            "
          >
            <Avatar user={currentUser} />
          </div>
        </nav>
      </div>
    </>
   );
}
 
export default DesktopSidebar;
