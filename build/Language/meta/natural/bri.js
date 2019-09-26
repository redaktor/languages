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
        name: 'Mokpwe',
        nameT: 'Mokpwe',
        iso3: 'bri',
        wiki: 'Kpwe_language',
        names: 'Bakpwe,Bakueri,Bakwedi,Bakwele,Bakweri,Bakwiri,Bekwiri,Kpe,Kwedi,Kweli,Kwili,Kwiri,Mokpe,Ujuwa,Vakweli,Vambeng'
    });
});
//# sourceMappingURL=bri.js.map