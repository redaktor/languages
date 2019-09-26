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
        name: 'Côông',
        nameT: 'Côông',
        iso3: 'cnc',
        wiki: 'C%C3%B4%C3%B4ng_language',
        names: 'Khoong ("Xa Coong","Xa Xam","Xa Xeng")'
    });
});
//# sourceMappingURL=cnc.js.map