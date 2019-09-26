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
        name: 'Multiple languages',
        nameT: 'Multiple languages',
        iso2: 'mul',
        iso3: 'mul',
        wiki: 'ISO_639-3#Non-language_codes'
    });
});
//# sourceMappingURL=mul.js.map