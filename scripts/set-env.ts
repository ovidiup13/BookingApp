import { argv } from "yargs";

// This is good for local dev environments, when it's better to
// store a projects environment variables in a .gitignore'd file
require("dotenv").config();

const fs = require("fs");
const path = require("path");

// Would be passed to script like this:
// `ts-node set-env.ts --environment=dev`
// we get it from yargs's argv object
const environment = argv.environment;
const isProd = environment === "prod";

const srcFolder = "./src/";
const targetPath = "environments/";
const appRootPath = require("app-root-path").path;

// we can use environment.ENV.ts where ENV can be: dev, qa, prod, etc.
// keep it simple for now and use just environment.ts
const targetFile = `environment.ts`;
const envFile = "environment.ts";
const openMode = "wx";
let targetFileFD;

const data = `export const environment = {
  production: false,
  api: "${process.env.API_URL || "http://localhost:3000/api"}"
};\n`;

const dir = path.join(appRootPath, srcFolder, targetPath);
if (!fs.existsSync(dir)) {
  fs.mkdirSync(dir);
}

const targetFilePath = path.join(dir, targetFile);
targetFileFD = fs.openSync(targetFilePath, "w");

const envFilePath = path.join(dir, envFile);
fs.closeSync(fs.openSync(envFilePath, "w"));

fs.writeSync(targetFileFD, data);
fs.closeSync(targetFileFD);
