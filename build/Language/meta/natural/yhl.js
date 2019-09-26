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
        name: 'Phowa, Hlepho',
        nameT: 'Phowa, Hlepho',
        iso3: 'yhl',
        wiki: 'Phowa_language',
        names: 'Abo,Boren,Bozi,Conehead Phula,Cowtail Phula,Daizhanpho,Digaopho,Flowery Phula,Hua Phula,Jiantou Phula,Minjia,Niuweiba Phula,Paola,Pho,Phula,Sandaohong Phula,Shaoji Phula,Sifter Basket Phula,Thrice Striped Red Phula,Xiuba'
    });
});
//# sourceMappingURL=yhl.js.map