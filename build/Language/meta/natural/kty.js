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
        name: 'Kango (Bas-Uélé District)',
        nameT: 'Likango',
        iso3: 'kty',
        wiki: 'Kango_language_(Bas-U%C3%A9l%C3%A9_District)',
        names: 'Likango'
    });
});
//# sourceMappingURL=kty.js.map