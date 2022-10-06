import { beforeAll, afterAll, it, expect } from "@jest/globals";
import { setUpStrapi, cleanUpStrapi } from "./helpers/strapi";

beforeAll(async () => {
  await setUpStrapi();
});

afterAll(async () => {
  await cleanUpStrapi();
});

it("Strapi is defined", () => {
  expect(strapi).toBeDefined();
});
