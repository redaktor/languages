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
        name: 'Manx',
        nameT: 'Gaelg',
        iso1: 'gv',
        iso2: 'glv',
        iso3: 'glv',
        wiki: 'Manx_language',
        OT: 'MNX',
        names: 'Gailck,Manx Gaelic',
        hasDetect: true
    });
});
//# sourceMappingURL=gv.js.map