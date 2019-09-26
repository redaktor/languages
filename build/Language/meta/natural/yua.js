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
        name: 'Maya, Yucatán',
        nameT: 'Maya, Yucatán',
        iso3: 'yua',
        wiki: 'Yucatec_Maya_language',
        names: 'Maaya,Maaya t’aan,Maayáa,Maya,Yucantán Maya,Yucateco,Peninsular Maya,Yucatan Maya',
        hasDetect: true
    });
});
//# sourceMappingURL=yua.js.map