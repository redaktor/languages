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
        name: 'Mongolian, Halh (Cyrillic)',
        nameT: 'монгол',
        iso1: 'mn',
        iso2: 'mon',
        iso3: 'mon',
        wiki: 'Mongolian_language',
        OT: 'MNG',
        hasDetect: true
    });
});
//# sourceMappingURL=mn.js.map