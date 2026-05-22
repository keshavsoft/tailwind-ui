// src/main.js

(async () => {
    window.KSHeaderVersion = "v5";
    window.KSHeaderTemplateVersion = "v4";

    const module = await import(
        `../bin/${window.KSHeaderVersion}/commands/header/template/${window.KSHeaderTemplateVersion}/initHeader.js`
    );

    window.KSHeader = module.default;
})();
