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
        name: 'Isirawa',
        nameT: 'Isirawa',
        iso3: 'srl',
        wiki: 'Isirawa_language',
        names: 'Okwasar,Saberi,Saweri'
    });
});
//# sourceMappingURL=srl.js.map