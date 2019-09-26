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
        name: 'Curripaco',
        nameT: 'Curripaco',
        iso3: 'kpc',
        wiki: 'Baniwa_language',
        names: 'Cumata,Curipaco,Ipeca,Ipeka-Tapuia,Koripako,Korispaso,Kuripako,Pacu,Paku-Tapuya,Palioariene,Pato Tapuia,Pato-Tapuya,Payualiene,Payuliene,Karrupaku,Kuripaco,Kurripaco,Waquenia,Kurripako,Yaverete-Tapuya'
    });
});
//# sourceMappingURL=kpc.js.map