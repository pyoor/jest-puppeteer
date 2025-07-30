/* eslint-disable no-var */
import type { JestPuppeteerGlobal } from "@mozillasecurity/jest-environment-puppeteer";

declare global {
  var browser: JestPuppeteerGlobal["browser"];
  var page: JestPuppeteerGlobal["page"];
  var context: JestPuppeteerGlobal["context"];
  var puppeteerConfig: JestPuppeteerGlobal["puppeteerConfig"];
  var jestPuppeteer: JestPuppeteerGlobal["jestPuppeteer"];
}

export = {
  globalSetup: require.resolve("@mozillasecurity/jest-environment-puppeteer/setup"),
  globalTeardown: require.resolve("@mozillasecurity/jest-environment-puppeteer/teardown"),
  testEnvironment: require.resolve("@mozillasecurity/jest-environment-puppeteer"),
  setupFilesAfterEnv: [require.resolve("@mozillasecurity/expect-puppeteer")],
};
