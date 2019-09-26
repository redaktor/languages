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
        name: 'Khmu',
        nameT: 'Khmu',
        iso3: 'kjg',
        wiki: 'Khmu_language',
        names: 'Chaman,Damai,Damailao,Damaile,Kamhmu,Kammu,Kamu,Kemu,Khamu,Khamuk,Khmu’,Khomu,Lao Terng,Mou,Pouteng,Theng,Kmhmu,Pu Thenh,Tenh,Kha Khmu,Luu,Tmooy,Cam Mu,Kha Cau,Kho Mu,Mun Xen,Xa Cau'
    });
});
//# sourceMappingURL=kjg.js.map