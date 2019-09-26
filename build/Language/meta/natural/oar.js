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
        name: 'Aramaic, Old (up to 700 BCE)',
        nameT: 'Aramaic, Old (up to 700 BCE)',
        iso3: 'oar',
        wiki: 'Old_Aramaic_language'
    });
});
//# sourceMappingURL=oar.js.map