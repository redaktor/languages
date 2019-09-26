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
        name: 'Djangun',
        nameT: 'Djangun',
        iso3: 'djf',
        wiki: 'Guugu_Yalandji_language',
        names: 'Adho-Adhom,Butju,Chungki,Chunkumberries,Chunkunburra,Jangun Djanggun,Koko-Mudju,Koko-Tyankun,Mutyu,Ngaigungo'
    });
});
//# sourceMappingURL=djf.js.map