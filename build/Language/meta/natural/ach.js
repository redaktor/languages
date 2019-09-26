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
        name: 'Acoli',
        nameT: 'Acoli',
        iso2: 'ach',
        iso3: 'ach',
        wiki: 'Acholi_dialect',
        names: 'Acoli,Acooli,Akoli,Atscholi,Dok Acoli,Gang,Log Acoli,Lwo,Shuli,Lëbacoli,Lwoo'
    });
});
//# sourceMappingURL=ach.js.map