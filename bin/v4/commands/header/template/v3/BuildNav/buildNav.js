// /header/v2/buildNav.js

import { buildBrand } from "./buildBrand.js";
import { buildHamburger } from "./buildHamburger.js";
import { buildMenu } from "./buildMenu.js";
import { buildWrapper } from "./buildWrapper.js";

export const buildNav = (heading) => {

    const {
        nav,
        innerDiv
    } = buildWrapper();

    innerDiv.appendChild(
        buildBrand(heading)
    );

    innerDiv.appendChild(
        buildHamburger()
    );

    innerDiv.appendChild(
        buildMenu()
    );

    return nav;
};