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
        name: 'Bai, Lama',
        nameT: 'Bai, Lama',
        iso3: 'lay',
        wiki: 'Lama_language_(Burma)',
        names: 'Lama,Lan-Bi Bai,Nama,Northern Bai'
    });
});
//# sourceMappingURL=lay.js.map