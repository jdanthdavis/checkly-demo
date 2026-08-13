import { defineConfig } from 'checkly'

const config = defineConfig({
  projectName: 'checkly-demo',
  logicalId: 'checkly-demo-astronomy-shop',
  checks: {
    frequency: 10,
    locations: ['us-east-1', 'eu-central-1'],
    runtimeId: '2025.04',
    checkMatch: '**/*.check.ts',
    playwrightConfig: {
      timeout: 30000,
      use: {
        baseURL: 'https://checkly-demo-astronomy-shop.onrender.com',
        viewport: { width: 1280, height: 720 },
      },
    },
    browserChecks: {
      testMatch: 'checkly/tests/**/*.spec.ts',
    },
  },
  cli: {
    runLocation: 'eu-central-1',
    reporters: ['list'],
    retries: 0,
  },
})

export default config
