'use client';

import { useState, useEffect } from 'react';
import useConversation from '../../hooks/useConversation';
import useRoutes from '../../hooks/useRoutes';
import MobileItem from './MobileItem';
import React from 'react';
import { FaBrain, FaRobot } from 'react-icons/fa'; // Import both AI and Robot icons

const MobileFooter = () => {
  const routes = useRoutes();
  const { isOpen } = useConversation();
  const [botpressInitialized, setBotpressInitialized] = useState(false);

  useEffect(() => {
    const loadBotpressScripts = () => {
      // Create and load the inject.js script
      const script1 = document.createElement('script');
      script1.src = 'https://cdn.botpress.cloud/webchat/v2.1/inject.js';
      script1.async = true;
      document.body.appendChild(script1);

      // Create and load the config.js script
      const script2 = document.createElement('script');
      script2.src = 'https://mediafiles.botpress.cloud/a2caf725-9f4c-41a3-b6f8-60b2a6960430/webchat/v2.1/config.js';
      script2.async = true;
      script2.onload = () => {
        if (window.botpress) {
          setBotpressInitialized(true);
          console.log('Botpress initialized successfully');
        } else {
          console.error('Botpress not found on window object.');
        }
      };

      script2.onerror = (e) => {
        console.error('Error loading Botpress config script', e);
      };

      // Make sure script1 loads before script2
      script1.onload = () => {
        document.body.appendChild(script2);
      };

      script1.onerror = (e) => {
        console.error('Error loading Botpress inject script', e);
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
      <div
        onClick={handleRobotClick}
        className="
          cursor-pointer
          transition
          text-gray-300
          hover:text-white
          dark:text-gray-300
          dark:hover:text-white
          p-2
          rounded-full
          hover:bg-gray-700
          w-12
          h-12
          flex
          items-center
          justify-center
        "
      >
        <FaRobot size={24} />
      </div>
    </div>
  );
}

export default MobileFooter;
