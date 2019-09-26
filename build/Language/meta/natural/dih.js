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
        name: 'Kumiai',
        nameT: 'K’miai',
        iso3: 'dih',
        wiki: 'Kumeyaay_language',
        names: 'Campo,Cochimí,Comeya,Cuchimí,Diegueño,Kamia,Kamiai,Kamiyahi,Kamiyai,Ki-Miai,Ko’al,Ku’ahl,Kumeyaai,Kumeyaay,Kumia,Kw’aal,Quemayá,Tipai’,Tipái,Tipéi,Digueño'
    });
});
//# sourceMappingURL=dih.js.map