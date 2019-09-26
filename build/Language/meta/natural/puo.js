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
        name: 'Puoc',
        nameT: 'Puoc',
        iso3: 'puo',
        wiki: 'Ksingmul_language',
        names: 'Kha Niang,Kha Puhoc,Ksing Mul,Ksingmul,Lao Muh,Pou Hok,Puhoc,Puok,Xin Mul,Xing Mun,Xingmoun,Xinh Mul,Mun,Pua,Sing,Xinh-Mun'
    });
});
//# sourceMappingURL=puo.js.map