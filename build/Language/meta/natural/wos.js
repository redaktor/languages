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
        name: 'Hanga Hundi',
        nameT: 'Hanga Hundi',
        iso3: 'wos',
        wiki: 'Kwasengen_language',
        names: 'Kwasengen,West Wosera'
    });
});
//# sourceMappingURL=wos.js.map