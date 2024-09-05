import { useEffect } from 'react';
import Script from 'next/script';

const MyApp = ({ Component, pageProps }) => {
  useEffect(() => {
    // Function to initialize Botpress after scripts are loaded
    const initializeBotpress = () => {
      if (window.botpress) {
        window.botpress.init({
          clientId: '5f2510d1-8ae4-49e7-be12-31883d6dd2b2',
          botId: 'a2caf725-9f4c-41a3-b6f8-60b2a6960430',
          style: 'https://mediafiles.botpress.cloud/a2caf725-9f4c-41a3-b6f8-60b2a6960430/webchat/v2.1/style.css',
          configuration: {
            botAvatar: 'https://files.bpcontent.cloud/2024/09/04/11/20240904110413-ZNW88D2F.png',
            botDescription: 'This is a Simple bot, which is built only for testing purposes.',
            botName: 'IBY Messenger Bot',
          },
        });
      } else {
        console.error('Botpress not found on window object.');
      }
    };

    // Load scripts dynamically
    const script1 = document.createElement('script');
    script1.src = 'https://cdn.botpress.cloud/webchat/v2.1/inject.js';
    script1.async = true;
    script1.onload = initializeBotpress;
    document.body.appendChild(script1);

    const script2 = document.createElement('script');
    script2.src = 'https://mediafiles.botpress.cloud/a2caf725-9f4c-41a3-b6f8-60b2a6960430/webchat/v2.1/config.js';
    script2.async = true;
    script2.onload = initializeBotpress;
    document.body.appendChild(script2);

    return () => {
      // Clean up script tags
      const scripts = document.querySelectorAll('script[src*="botpress"]');
      scripts.forEach(script => document.body.removeChild(script));
    };
  }, []);

  return <Component {...pageProps} />;
};

export default MyApp;

