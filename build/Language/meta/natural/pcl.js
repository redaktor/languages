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
        name: 'Pardhi',
        nameT: 'Pardhi',
        iso3: 'pcl',
        wiki: 'Pardhi_language',
        names: 'Bahelia,Chita Pardhi,Lango Pardhi,Paidia,Paradi,Paria,Phans Pardhi,Takankar,Takia'
    });
});
//# sourceMappingURL=pcl.js.map