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
        name: 'Inupiatun, North Alaskan',
        nameT: 'Inupiatun, North Alaskan',
        iso3: 'esi',
        wiki: 'Inupiaq_language',
        names: 'Inupiaq,Inupiat,North Alaskan Inupiat,Eskimo,Inupiak,North Alaskan Inuktitut,North Alaskan Inupiaq,North Alaskan Iñupiaq ("Eskimo")'
    });
});
//# sourceMappingURL=esi.js.map