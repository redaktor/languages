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
        name: 'Faroese',
        nameT: 'føroyskt',
        iso1: 'fo',
        iso2: 'fao',
        iso3: 'fao',
        wiki: 'Faroese_language',
        OT: 'FOS',
        names: 'Faeroese,Føroyskt',
        hasDetect: true
    });
});
//# sourceMappingURL=fo.js.map