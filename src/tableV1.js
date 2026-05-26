// src/main.js

(async () => {
    window.KSTableVersion = "v1";
    window.KSHeaderTemplateVersion = "v1";

    const module = await import(
        `../bin/table/${window.KSTableVersion}/commands/table/template/${window.KSHeaderTemplateVersion}/entry.js`
    );

    window.KSTable = module.default;
})();
