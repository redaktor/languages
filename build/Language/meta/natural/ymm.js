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
        name: 'Maay',
        nameT: 'Maay',
        iso3: 'ymm',
        wiki: 'Maay_Maay',
        names: 'Af-Maay,Af-Maay Tiri,Af-May,Af-Maymay,Rahanween,Rahanweyn'
    });
});
//# sourceMappingURL=ymm.js.map