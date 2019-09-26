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
        name: 'Lao',
        nameT: 'ລາວ',
        iso1: 'lo',
        iso2: 'lao',
        iso3: 'lao',
        wiki: 'Lao_language',
        OT: 'LAO',
        names: 'Eastern Thai,Lào,Lao Kao,Lao Wiang,Lao-Lum,Lao-Noi,Lao-Tai,Laotian,Laotian Tai,Lum Lao,Phou Lao,Rong Kong,Tai Lao',
        hasDetect: true
    });
});
//# sourceMappingURL=lo.js.map