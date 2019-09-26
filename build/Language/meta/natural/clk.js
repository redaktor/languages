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
        name: 'Idu-Mishmi',
        nameT: 'Idu-Mishmi',
        iso3: 'clk',
        wiki: 'Idu_Mishmi_language',
        names: 'Chulikata,Idu Lhoba,Idu Mishmi,Lhoba,Lho-Pa,Yidu,Ida,Idu,Midhi,Midu,Sulikota,Yidu Luoba ("Chulikata","Chulikotta")'
    });
});
//# sourceMappingURL=clk.js.map