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
        name: 'Nyamwezi',
        nameT: 'Nyamwezi',
        iso2: 'nym',
        iso3: 'nym',
        wiki: 'Nyamwezi_language',
        names: 'Kinyamuesi,Kinyamwesi,Kinyamwezi,Manjamuesi,Mwezi,Namwezi,Nyamwesi,Nyawezi',
        hasDetect: true
    });
});
//# sourceMappingURL=nym.js.map