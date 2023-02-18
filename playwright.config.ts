import { defineConfig, devices, PlaywrightTestConfig } from '@playwright/test';

const config: PlaywrightTestConfig = {
  testMatch: ["tests/buggyrating.spec.ts"],
  timeout: 30000,
  reporter: "html",
  use: {
    headless: true,
  },
  globalSetup: "src/utils/globalSetup.ts"
};

export default config;