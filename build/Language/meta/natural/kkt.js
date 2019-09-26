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
        name: 'Koi',
        nameT: 'Koi',
        iso3: 'kkt',
        wiki: 'Koi_language',
        names: 'Kohi,Koi Ba’a,Koyee,Koyi,Koyu'
    });
});
//# sourceMappingURL=kkt.js.map