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
        name: 'Chin, Haka',
        nameT: 'Chin, Haka',
        iso3: 'cnh',
        wiki: 'Hakha_Chin_language',
        OT: 'QIN',
        names: 'Baungshe,Haka Chin,Lai,Lai Hawlh,Lai Pawi,Haka,Hakha,Lai Chin ("Haka")',
        hasDetect: true
    });
});
//# sourceMappingURL=cnh.js.map