// src/main.js

import getLatestVersion from "../bin/core/getLatestVersion.js";

const v = getLatestVersion();

const { default: templateLatestVersion } =
    await import(`../bin/${v}/commands/header/steps/getLatestVersion.js`);

const module = await import(
    `../bin/${v}/commands/header/template/${templateLatestVersion}/initHeader.js`
);

window.KSHeader = module.default;