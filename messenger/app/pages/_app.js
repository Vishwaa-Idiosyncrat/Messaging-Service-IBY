// _app.tsx
import { useEffect } from 'react';
import Script from 'next/script';

const MyApp = ({ Component, pageProps }) => {
  useEffect(() => {
    // Check if botpress is initialized
    const checkBotpress = () => {
      if (window.botpress) {
        console.log('Botpress initialized');
      } else {
        console.log('Botpress not initialized');
      }
    };
    // Check botpress every second
    const interval = setInterval(() => {
      checkBotpress();
    }, 1000);

    // Clear interval on component unmount
    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <Script
        src="https://cdn.botpress.cloud/webchat/v2.1/inject.js"
        strategy="beforeInteractive"
        onLoad={() => console.log('Botpress script loaded')}
        onError={(e) => console.error('Error loading Botpress script', e)}
      />
      <Script
        src="https://mediafiles.botpress.cloud/a2caf725-9f4c-41a3-b6f8-60b2a6960430/webchat/v2.1/config.js"
        strategy="beforeInteractive"
        onLoad={() => console.log('Botpress config loaded')}
        onError={(e) => console.error('Error loading Botpress config script', e)}
      />
      <Component {...pageProps} />
    </>
  );
};

export default MyApp;
