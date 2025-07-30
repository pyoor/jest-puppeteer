const port = process.env.TEST_SERVER_PORT
  ? Number(process.env.TEST_SERVER_PORT)
  : 4444;

process.env.TEST_SERVER_PORT = port;

/**
 * @type {import('@mozillasecurity/jest-environment-puppeteer').JestPuppeteerConfig}
 */
const jestPuppeteerConfig = {
  launch: {
    browser: process.env.BROWSER || "chrome",
    headless: "new",
    args: ["--no-sandbox"],
  },
  browserContext: process.env.INCOGNITO ? "incognito" : "default",
  server: {
    command: `cross-env PORT=${port} node server`,
    port,
    launchTimeout: 4000,
    usedPortAction: "kill",
  },
};

module.exports = jestPuppeteerConfig;
