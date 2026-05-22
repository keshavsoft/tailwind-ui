import { locateSource } from "./header/steps/locateSource.js";
import { locateDestination } from "./header/steps/locateDestination.js";

import { createProject } from "./header/steps/createProject.js";
import { announce } from "./header/steps/announce.js";

import resolveFolderName from "./header/steps/resolveFolderName.js";
import checks from "./header/steps/checks.js";

export default ({ folderName = "", toPath = process.cwd(), inAnnounce = true }) => {
    const fromChecks = checks({ toPath, inAnnounce });

    if (fromChecks) return false;

    const resolvedFolderName = resolveFolderName({
        name: folderName
    });

    const source = locateSource();
    const destination = locateDestination({ inResolvedFolderName: resolvedFolderName });

    createProject({ source, destination });

    if (inAnnounce) announce({ inResolvedFolderName: resolvedFolderName });
};