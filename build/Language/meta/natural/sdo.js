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
        name: 'Bidayuh, Bukar-Sadung',
        nameT: 'Bidayuh, Bukar-Sadung',
        iso3: 'sdo',
        wiki: 'Bukar_Sadong_language',
        names: 'Buka,Bukar,Bukar Sadong,Bukar Sadung Bidayah,Sabutan,Sadong,Serian,Tebakang,Sadung'
    });
});
//# sourceMappingURL=sdo.js.map