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
        name: 'Songhai, Koyraboro Senni',
        nameT: 'Songhai, Koyraboro Senni',
        iso3: 'ses',
        wiki: 'Koyraboro_Senni',
        names: 'East Songhay,Gao Songhay,Koroboro Senni,Koyra Senni,Koyra Senni Songhay,Songai,Songay,Songay Senni,Songhai,Songhay,Songoi,Songoy,Sonrai,Sonrhai'
    });
});
//# sourceMappingURL=ses.js.map