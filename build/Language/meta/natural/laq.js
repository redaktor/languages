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
        name: 'Qabiao',
        nameT: 'Qabiao',
        iso3: 'laq',
        wiki: 'Qabiao_language',
        names: 'Bendi Lolo,Ka Bao,Ka Beo,Ka Biao,Kabeo,Laqua,Man La Qua,Phubyau,Pu Beo,Pu Péo,Pubiao,Pupeo,Qa Biao,Qa Qiau,Qabiau,Qaqiau,Lolo,Pen Ti'
    });
});
//# sourceMappingURL=laq.js.map