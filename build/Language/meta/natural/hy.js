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
        name: 'East Armenian (Latin)',
        nameT: 'հայերեն',
        iso1: 'hy',
        iso2: 'arm',
        iso2T: 'hye',
        iso3: 'hye',
        wiki: 'Armenian_language',
        OT: 'HYE',
        names: 'Armjanski Yazyk,Ena,Ermeni Dili,Ermenice,Haieren,Somkhuri,Armjanski,Armani,Erâmani,Somekhuri,Armanski',
        hasDetect: true
    });
});
//# sourceMappingURL=hy.js.map