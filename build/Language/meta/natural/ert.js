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
        name: 'Eritai',
        nameT: 'Eritai',
        iso3: 'ert',
        wiki: 'Eritai_language',
        names: 'Aliki,Babiruwa,Babrua,Babruwa,Baburiwa,Barua,Editode Edai,Erai,Eri,Haya'
    });
});
//# sourceMappingURL=ert.js.map