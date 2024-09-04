// global.d.ts

interface BotpressConfig {
    clientId: string;
    botId: string;
    style: string;
    configuration: {
      botAvatar: string;
      botDescription: string;
      botName: string;
    };
  }
  
  interface Window {
    botpress?: {
      init: (config: BotpressConfig) => void;
      open: () => void;
    };
  }
  