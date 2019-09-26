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
        name: 'Karachay-Balkar',
        nameT: 'Karachay-Balkar',
        iso2: 'krc',
        iso3: 'krc',
        wiki: 'Karachay-Balkar_language',
        OT: 'sBAL, KAR',
        names: 'Balkarian,Balqar,Karacaylar,Karachai,Karachaitsy,Karachay,Karachayla,Malqartil,Qarachaytil,Taulu til',
        hasDetect: true
    });
});
//# sourceMappingURL=krc.js.map