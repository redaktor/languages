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
        name: 'Irula',
        nameT: 'Irula',
        iso3: 'iru',
        wiki: 'Irula_language',
        names: 'Erukala,Irava,Irulan,Irular,Irular Mozhi,Irulavan,Iruliga,Iruligar,Kad Chensu,Korava'
    });
});
//# sourceMappingURL=iru.js.map