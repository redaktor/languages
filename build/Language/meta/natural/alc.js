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
        name: 'Qawasqar',
        nameT: 'alacalufe',
        iso3: 'alc',
        wiki: 'Kaw%C3%A9sqar_language',
        names: 'Alacalouf,Alacaluf,Alacalufe,Alaculoof,Alaculuf,Alakaluf,Alikaluf,Alikhoolip,Alikuluf,Alilkoolif,Alokolup,Alooculoof,Alookooloop,Alucaluf,Alukoeluf,Alukulup,Halakwulup,Kaweskar,Kawesqar'
    });
});
//# sourceMappingURL=alc.js.map