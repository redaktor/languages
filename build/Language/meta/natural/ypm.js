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
        name: 'Phuma',
        nameT: 'Phuma',
        iso3: 'ypm',
        wiki: 'Muji_language',
        names: 'Black Muji,Hei Muji,Muji,Paotlo,Phula,Phuli,Shaoji Phula,Sifter Basket Phula'
    });
});
//# sourceMappingURL=ypm.js.map