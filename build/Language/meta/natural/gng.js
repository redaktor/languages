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
        name: 'Ngangam',
        nameT: 'Ngangam',
        iso3: 'gng',
        wiki: 'Ngangam_language',
        names: 'Dye,Gamgan,Gangam,Gangum,Migangam,Mijiem,Nbangam,Ngangan'
    });
});
//# sourceMappingURL=gng.js.map