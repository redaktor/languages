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
        name: 'Kensiu',
        nameT: 'Kensiu',
        iso3: 'kns',
        wiki: 'Kensiu_language',
        names: 'Kenseu,Kensieu,Kensiw,Mendi,Monik,Moniq,Ngok Pa,Orang Bukit,Orang Liar,Belubn,Kense,Maniq,Mawas,Mengo,Meni,Menik,Moni,Mos,Sakai,Tiong'
    });
});
//# sourceMappingURL=kns.js.map