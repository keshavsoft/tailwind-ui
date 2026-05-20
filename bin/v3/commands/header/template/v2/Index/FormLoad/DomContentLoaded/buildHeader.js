const buildHeader = async () => {
    const response =
        await fetch("./Index/Config/header.json");

    const headerConfig =
        await response.json();

    if (window.KSHeader?.initHeader) {
        console.log("table loaded from window.KSTable");

        await window.KSHeader.initHeader(headerConfig); // extension or CDN
    } else {
        console.log("window.KSTable not loaded...");
    };
};

export { buildHeader };