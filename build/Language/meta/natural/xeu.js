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
        name: 'Keoru-Ahia',
        nameT: 'Keoru-Ahia',
        iso3: 'xeu',
        wiki: 'Keoru_language',
        names: 'Ahia,Ahiave,Haura,Haura Haela,Horo,Houro,Hovoiroro,Hovoyo,Ke’oru,Keuro,Keuru,Kouri,Lavau,Lower Ahia,O’o Moko,Pairi,Velepa'
    });
});
//# sourceMappingURL=xeu.js.map