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
        name: 'Mari-Meadow',
        nameT: 'Mari-Meadow',
        iso3: 'mhr',
        wiki: 'Meadow_Mari_language',
        OT: 'LMA',
        names: 'Cheremis,Eastern Mari,Low Mari,Lugovo Mari,Mari,Mari-Woods',
        hasDetect: true
    });
});
//# sourceMappingURL=mhr.js.map