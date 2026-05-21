// /header/v1/buildBrand.js

export const buildBrand = (heading = "KeshavSoft") => {

    const div = document.createElement("div");

    div.className = "text-xl font-semibold";

    div.innerText = heading;

    return div;
};