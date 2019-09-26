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
        name: 'Mixtec, Pinotepa Nacional',
        nameT: 'Mixtec, Pinotepa Nacional',
        iso3: 'mio',
        wiki: 'Pinotepa_Mixtec',
        names: 'Coastal Mixtec,Jicaltepec Mixtec,Lowland Jicaltepec Mixtec,Mixteco de Pinotepa Nacional,Western Jamiltepec Mixtec'
    });
});
//# sourceMappingURL=mio.js.map