// import * as Strapi from "@strapi/strapi";
const Strapi = require("@strapi/strapi");
import fs from "fs";

let instance;

export async function setUpStrapi() {
  if (!instance) {
    await Strapi({ disDir: "./dist" }).load();
    instance = strapi;

    await instance.server.mount();
  }

  return instance;
}

export async function cleanUpStrapi() {
  const dbSettings = strapi.config.get("database.connections.default.settings");

  await strapi.server.httpServer.close();

  if (dbSettings && dbSettings.filename) {
    const tempDbFile = `${__dirname}/../${dbSettings.filename}`;

    if (fs.existsSync(tempDbFile)) {
      fs.unlinkSync(tempDbFile);
    }
  }

  // ts-ignore
  await strapi.db.connection.destroy();
}
