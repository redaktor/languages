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
        name: 'Kare (Central African Republic)',
        nameT: 'Kare (Central African Republic)',
        iso3: 'kbn',
        wiki: 'Kare_language_(Adamawa)',
        names: 'Kali,Kari,Karré'
    });
});
//# sourceMappingURL=kbn.js.map