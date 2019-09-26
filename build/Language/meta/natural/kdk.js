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
        name: 'Numèè',
        nameT: 'Numèè',
        iso3: 'kdk',
        wiki: 'Num%C3%A8%C3%A8_language',
        names: 'Dialectes de l’Extreme Sud,Duauru,Kapone,Kunie,Kwényi,Naa Numee,Naa-Wee,Ouen,Touaouru,Truaru,Tuauru,Uen,Wen,Xere'
    });
});
//# sourceMappingURL=kdk.js.map