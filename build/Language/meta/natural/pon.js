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
        name: 'Pohnpeian',
        nameT: 'Pohnpeian',
        iso2: 'pon',
        iso3: 'pon',
        wiki: 'Pohnpeian_language',
        names: 'Ponapean',
        hasDetect: true
    });
});
//# sourceMappingURL=pon.js.map