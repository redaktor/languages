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
        name: 'Mang',
        nameT: 'Mang',
        iso3: 'zng',
        wiki: 'Mang_language',
        names: 'Ba’e,Chaman,Manbu,Mang U,Nieng Ó,Xá Lá Vàng,Xá Mang,Xá Ó,Xamang,Lá Vàng,Xá'
    });
});
//# sourceMappingURL=zng.js.map