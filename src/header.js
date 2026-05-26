// src/header.js

(async () => {
    window.KSTableVersion = "v1";
    window.KSHeaderTemplateVersion = "v1";

    const module = await import(
        `../bin/header/${window.KSTableVersion}/commands/header/template/${window.KSHeaderTemplateVersion}/initHeader.js`
    );

    window.KSHeader = module.default;
})();
