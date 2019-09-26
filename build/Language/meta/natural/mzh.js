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
        name: 'Wichí Lhamtés Güisnay',
        nameT: 'Wichí Lhamtés Güisnay',
        iso3: 'mzh',
        wiki: 'Wich%C3%AD_Lhamt%C3%A9s_G%C3%BCisnay',
        names: 'Güisnay,Wichí,Wichí Lhamtés ("Mataco","Mataco Güisnay","Mataco Pilcomayo")'
    });
});
//# sourceMappingURL=mzh.js.map