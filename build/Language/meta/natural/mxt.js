(function (factory) {
    if (typeof module === "object" && typeof module.exports === "object") {
        var v = factory(require, exports);
        if (v !== undefined) module.exports = v;
    }
    else if (typeof define === "function" && define.amd) {
        define(["require", "exports", "../../meta"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    const meta_1 = require("../../meta");
    exports.default = meta_1.default({
        name: 'Mixtec, Jamiltepec',
        nameT: 'Mixtec, Jamiltepec',
        iso3: 'mxt',
        wiki: 'Chayuco-Jamiltepec_Mixtec',
        names: 'Eastern Jamiltepec-San Cristobal Mixtec,Mixteco de Jamiltepec,Mixteco de Oaxaca de Costa Central Baja,Mixteco de Santa María Huazolotitlán',
        hasDetect: true
    });
});
//# sourceMappingURL=mxt.js.map