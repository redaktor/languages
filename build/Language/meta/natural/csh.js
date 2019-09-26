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
        name: 'Chin, Asho',
        nameT: 'Chin, Asho',
        iso3: 'csh',
        wiki: 'Sh%C3%B6_language',
        OT: 'QIN',
        names: 'Khyang,Khyeng,Qin,Sho,Shoa,Asho,Ashu,Hyow,Khamaw,Khamoe,Kyang,Saingbaung'
    });
});
//# sourceMappingURL=csh.js.map