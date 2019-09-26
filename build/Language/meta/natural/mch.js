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
        name: 'Maquiritari',
        nameT: 'Maquiritari',
        iso3: 'mch',
        wiki: 'Ye%27kuana_language',
        names: 'Makiritare,Maquiritai,Maquiritare,Mayongong,Pawana,Soto,Ye’kuana,Yekuána,Cunuana,De’cuana,De’kwana Carib,Maiongong,Ye’cuana,Yekuana'
    });
});
//# sourceMappingURL=mch.js.map