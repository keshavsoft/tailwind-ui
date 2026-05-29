import { initShowTable, initCreate, initTableWithFooter } from "../bin/table/v2/commands/table/template/v4/entry.js";

(async () => {
    window.KSTableVersion = "v2.2.4";

    window.KSTable = {};

    window.KSTable.initShowTable = initShowTable;
    window.KSTable.initCreate = initCreate;
    window.KSTable.initTableWithFooter = initTableWithFooter;
})();