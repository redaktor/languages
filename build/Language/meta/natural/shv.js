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
        name: 'Shehri',
        nameT: 'Shehri',
        iso3: 'shv',
        wiki: 'Shehri_language',
        names: 'Ehkili,Geblet,Jibali,Jibbali,Qarawi,Sehri,Shahari,Sheret,South Arabian'
    });
});
//# sourceMappingURL=shv.js.map