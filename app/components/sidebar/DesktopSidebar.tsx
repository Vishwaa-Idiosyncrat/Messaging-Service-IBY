'use client';

import { useState, useEffect } from 'react';
import { User } from '@prisma/client';
import useRoutes from '../../hooks/useRoutes';
import Avatar from '../Avatar';
import DesktopItem from './DesktopItem';
import SettingsModal from './SettingsModal';
import React from 'react';
import { FaBrain, FaRobot } from 'react-icons/fa';

interface DesktopSidebarProps {
  currentUser: User;
}

const DesktopSidebar: React.FC<DesktopSidebarProps> = ({ currentUser }) => {
  const routes = useRoutes();
  const [isOpen, setIsOpen] = useState(false);
  const [botpressInitialized, setBotpressInitialized] = useState(false);

  useEffect(() => {
    // Function to append script tags
    const loadBotpressScripts = () => {
      const script1 = document.createElement('script');
      script1.src = 'https://cdn.botpress.cloud/webchat/v2.1/inject.js';
      script1.async = true;
      document.body.appendChild(script1);

      const script2 = document.createElement('script');
      script2.src = 'https://mediafiles.botpress.cloud/a2caf725-9f4c-41a3-b6f8-60b2a6960430/webchat/v2.1/config.js';
      script2.async = true;
      document.body.appendChild(script2);

      // Initialize Botpress after scripts load
      script2.onload = () => {
        if (window.botpress) {
          setBotpressInitialized(true);
        } else {
          console.error('Botpress not found on window object.');
        }
      };

      script2.onerror = (e) => {
        console.error('Error loading Botpress config script', e);
      };
    };

    loadBotpressScripts();

    return () => {
      // Cleanup script tags
      const scripts = document.querySelectorAll('script[src="https://cdn.botpress.cloud/webchat/v2.1/inject.js"], script[src="https://mediafiles.botpress.cloud/a2caf725-9f4c-41a3-b6f8-60b2a6960430/webchat/v2.1/config.js"]');
      scripts.forEach(script => document.body.removeChild(script));
    };
  }, []);

  const handleRobotClick = () => {
    if (botpressInitialized && window.botpress) {
      window.botpress.open(); // or window.botpress.show()
    } else {
      console.error('Botpress not initialized.');
    }
  };

  const enhancedRoutes = [
    ...routes,
    {
      label: 'AI',
      href: 'https://solutions.imbesideyou.com/',
      icon: FaBrain,
      active: false,
    },
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
            <li
              onClick={handleRobotClick}
              className="
                cursor-pointer
                transition
                text-gray-300
                hover:text-white
                dark:text-gray-300
                dark:hover:text-white
                mt-4
                p-2
                rounded-md
                hover:bg-gray-700
                w-12
                h-12
                flex
                items-center
                justify-center
              "
            >
              <FaRobot size={24} />
            </li>
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
};

export default DesktopSidebar;
