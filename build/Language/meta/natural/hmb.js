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
        name: 'Songhay, Humburi Senni',
        nameT: 'Songhay, Humburi Senni',
        iso3: 'hmb',
        wiki: 'Humburi_Senni_language',
        names: 'Central Songai,Humburi Senni Songhay,Songai,Songay,Songay Senni,Songhai,Songoi,Songoy,Sonrai,Sonrhai,Hombori Songhay,Songhay,Songhoy'
    });
});
//# sourceMappingURL=hmb.js.map