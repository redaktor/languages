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
        name: 'Dzongkha',
        nameT: 'ཇོང་ཁ',
        iso1: 'dz',
        iso2: 'dzo',
        iso3: 'dzo',
        wiki: 'Dzongkha',
        OT: 'DZN',
        names: 'Bhotia of Bhutan,Bhotia of Dukpa,Bhutanese,Drukha,Drukke,Dukpa,Jonkha,Rdzongkha,Zongkhar,Drukpa,Hloka,Lhoskad',
        hasDetect: true
    });
});
//# sourceMappingURL=dz.js.map