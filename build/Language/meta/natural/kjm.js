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
        name: 'Kháng',
        nameT: 'Kháng',
        iso3: 'kjm',
        wiki: 'Kh%C3%A1ng_language',
        names: 'Bren,Hang,Khaang,Ksakautenh,Pouteng,Putenh,Quang Lam,Tay Hay,Tayhay,Teng,Theng,Xa,Xa Ai,Xa Bung,Xa Dang,Xa Don,Xa Hoc,Xá Khao,Xa Xua'
    });
});
//# sourceMappingURL=kjm.js.map