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
        name: 'Washo',
        nameT: 'Washoe',
        iso2: 'was',
        iso3: 'was',
        wiki: 'Washo_language',
        names: 'Washoe'
    });
});
//# sourceMappingURL=was.js.map