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
        name: 'Azha',
        nameT: 'Azha',
        iso3: 'aza',
        wiki: 'Azha_language',
        names: 'Aji,Ajiwa,A’ndze,A’ntsaozo,Azan,Black Phula,Cowtail Phula,Golden Phula,Han Phula,Hei Phula,Hua Phula,Hua Yi,Jin Phula,Nimitso,Niuweiba Phula,Phula,Phuphje,Shaoji Phula,Sifter Basket Phula'
    });
});
//# sourceMappingURL=aza.js.map