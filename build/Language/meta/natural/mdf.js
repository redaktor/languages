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
        name: 'Moksha',
        nameT: 'Moksha',
        iso2: 'mdf',
        iso3: 'mdf',
        wiki: 'Moksha_language',
        OT: 'MOK',
        names: 'Moksha Mordvin,Mokshan,Mordoff,Mordov,Mordvin-Moksha',
        hasDetect: true
    });
});
//# sourceMappingURL=mdf.js.map