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
        name: 'Chontal, Lowland Oaxaca',
        nameT: 'Chontal, Lowland Oaxaca',
        iso3: 'clo',
        wiki: 'Huamelula_language',
        names: 'Chontal de la Costa de Oaxaca,Chontal de Oaxaca de la costa,Huamelula Chontal,Huamelulteco,Lajltyaygi,Yocot’an'
    });
});
//# sourceMappingURL=clo.js.map