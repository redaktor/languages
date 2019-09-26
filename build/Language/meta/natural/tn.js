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
        name: 'Tswana',
        nameT: 'Setswana',
        iso1: 'tn',
        iso2: 'tsn',
        iso3: 'tsn',
        wiki: 'Tswana_language',
        OT: 'TNA',
        names: 'Beetjuans,Chuana,Coana,Cuana,Sechuana,Tsiwaha,Chwana,Tshwana',
        hasDetect: true
    });
});
//# sourceMappingURL=tn.js.map