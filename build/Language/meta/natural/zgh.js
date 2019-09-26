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
        name: 'Standard Moroccan Tamazight',
        nameT: 'Standard Moroccan Tamazight',
        iso3: 'zgh',
        wiki: 'Standard_Moroccan_Berber',
        names: 'Amazighe standard marocain',
        hasDetect: true
    });
});
//# sourceMappingURL=zgh.js.map