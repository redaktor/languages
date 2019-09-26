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
        name: 'Maldivian',
        nameT: 'Dhivehi',
        iso1: 'dv',
        iso2: 'div',
        iso3: 'div',
        wiki: 'Maldivian_language',
        OT: 'sDIV, DHV (deprecated)',
        names: 'Dhivehi Bas,Divehi,Mahl,Malikh,Malki,Divehi Bas,Divehli,Mali'
    });
});
//# sourceMappingURL=dv.js.map