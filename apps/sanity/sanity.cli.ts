import { defineCliConfig } from 'sanity/cli';

export default defineCliConfig({
  api: {
    projectId: '4t7pp8z5',
    dataset: 'production',
  },
  deployment: {
    autoUpdates: true,
    appId: 'b9458a9921829aaf5de228ac',
  },
});
