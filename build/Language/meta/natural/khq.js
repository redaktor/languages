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
        name: 'Songhay, Koyra Chiini',
        nameT: 'Songhay, Koyra Chiini',
        iso3: 'khq',
        wiki: 'Koyra_Chiini_language',
        names: 'Songai,Songay,Songhai,Songhay,Songhoy,Songoi,Songoy,Sonrai,Sonrhai,Timbuktu Songhoy,West Songhoy'
    });
});
//# sourceMappingURL=khq.js.map