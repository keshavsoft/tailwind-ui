import { initShowTable, initCreate, initTableWithFooter } from "../bin/table/v2/commands/table/template/v2/entry.js";

(async () => {
    window.KSVersion = "2.2.1";

    window.KSTable.initShowTable = initShowTable;
    window.KSTable.initCreate = initCreate;
    window.KSTable.initTableWithFooter = initTableWithFooter;
})();