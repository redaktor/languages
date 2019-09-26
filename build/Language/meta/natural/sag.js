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
        name: 'Sango',
        nameT: 'Sängö',
        iso1: 'sg',
        iso2: 'sag',
        iso3: 'sag',
        wiki: 'Sango_language',
        OT: 'SGO',
        names: 'Sangho',
        hasDetect: true
    });
});
//# sourceMappingURL=sag.js.map