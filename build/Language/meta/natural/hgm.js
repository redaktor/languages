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
        name: 'Haiǁom',
        nameT: 'Haiǁom',
        iso3: 'hgm',
        wiki: '%C7%82Aakhoe_dialect',
        names: 'Haikom,Haikum,Hei||om,Heikom,Heikom Bushman,Heikum,Oshikwankala Hai||om,Xwaga'
    });
});
//# sourceMappingURL=hgm.js.map