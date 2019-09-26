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
        name: 'Lhaovo',
        nameT: 'Lhaovo',
        iso3: 'mhx',
        wiki: 'Lhao_Vo_language',
        names: 'Diso,Lang’e,Langsu,Langwa,Laungaw,Laungwaw,Lawng,Liangsu,Lovo,Malu,Maru,Matu,Nyky,Zi,Lang,Lawgore,Mulu ("Maru")',
        hasDetect: true
    });
});
//# sourceMappingURL=mhx.js.map