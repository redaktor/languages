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
        name: 'Ramopa',
        nameT: 'Ramopa',
        iso3: 'kjx',
        wiki: 'Ramopa_language',
        names: 'Kereaka,Keriaka'
    });
});
//# sourceMappingURL=kjx.js.map