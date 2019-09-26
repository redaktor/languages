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
        name: 'Anii',
        nameT: 'Anii',
        iso3: 'blo',
        wiki: 'Anii_language',
        names: 'Baseca,Basila,Bassila,Gisida,Akpe ("Ouinji-Ouinji","Winji-Winji","Ounji-Ounji")'
    });
});
//# sourceMappingURL=blo.js.map