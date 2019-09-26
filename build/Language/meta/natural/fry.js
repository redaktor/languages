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
        name: 'Frisian, Western',
        nameT: 'Frysk',
        iso1: 'fy',
        iso2: 'fry',
        iso3: 'fry',
        wiki: 'West_Frisian_language',
        OT: 'FRI',
        names: 'Fries',
        hasDetect: true
    });
});
//# sourceMappingURL=fry.js.map