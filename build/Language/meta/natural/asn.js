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
        name: 'Asuriní, Xingú',
        nameT: 'Asuriní, Xingú',
        iso3: 'asn',
        wiki: 'Xingu_Asurini_language',
        names: 'Assuriní,Assurinikin,Asuriní de Koatinema,Asurini do Xingú,Awaeté,Awaté,Kuben-Kamrektí'
    });
});
//# sourceMappingURL=asn.js.map