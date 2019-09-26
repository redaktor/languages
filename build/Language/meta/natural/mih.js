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
        name: 'Mixtec, Chayuco',
        nameT: 'Mixtec, Chayuco',
        iso3: 'mih',
        wiki: 'Chayuco-Jamiltepec_Mixtec',
        names: 'Eastern Jamiltepec-Chayuco Mixtec,Mixteco de Chayucu,Tu’un savi'
    });
});
//# sourceMappingURL=mih.js.map