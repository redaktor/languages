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
        name: 'Bekati’',
        nameT: 'Bakati Nyam',
        iso3: 'bei',
        wiki: 'Bakati%E2%80%99_language',
        names: 'Bakati Riok,Bakatiq,Bekati'
    });
});
//# sourceMappingURL=bei.js.map