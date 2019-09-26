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
        name: 'Avaric',
        nameT: 'Авар',
        iso1: 'av',
        iso2: 'ava',
        iso3: 'ava',
        wiki: 'Avar_language',
        OT: 'AVR',
        names: 'Avaro,Dagestani,Bolmac,Khundzuri,Maarul Dagestani',
        hasDetect: true
    });
});
//# sourceMappingURL=ava.js.map