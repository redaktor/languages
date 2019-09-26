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
        name: 'Khasi',
        nameT: 'Khasi',
        iso2: 'kha',
        iso3: 'kha',
        wiki: 'Khasi_language',
        OT: 'KSI',
        names: 'Cossyah,Kahasi,Khasie,Khasiyas,Khassee,Khuchia,Kyi,Kassi,Khasa,Khashi',
        hasDetect: true
    });
});
//# sourceMappingURL=kha.js.map