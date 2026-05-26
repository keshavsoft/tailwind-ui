// src/header.js

(async () => {

    window.KSTableVersion = "v1";
    window.KSHeaderTemplateVersion = "v1";

    const modules = import.meta.glob(
        "../bin/header/*/commands/header/template/*/initHeader.js"
    );

    const modulePath =
        `../bin/header/${window.KSTableVersion}/commands/header/template/${window.KSHeaderTemplateVersion}/initHeader.js`;

    const loadModule = modules[modulePath];

    if (!loadModule) {
        throw new Error(`Module not found: ${modulePath}`);
    }

    const module = await loadModule();

    window.KSHeader = module.default;

})();