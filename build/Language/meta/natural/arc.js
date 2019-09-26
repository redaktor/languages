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
        name: 'Aramaic, Official (700-300 BCE)',
        nameT: 'ܐܪܡܝܐ',
        iso2: 'arc',
        iso3: 'arc',
        wiki: 'Aramaic_language'
    });
});
//# sourceMappingURL=arc.js.map