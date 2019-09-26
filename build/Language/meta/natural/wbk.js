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
        name: 'Waigali',
        nameT: 'Waigali',
        iso3: 'wbk',
        wiki: 'Waigali_language',
        names: 'Kalasha ala,Suki,Wai,Wai-Ala,Waigala,Waigalii,Waigeli,Zhonjigali'
    });
});
//# sourceMappingURL=wbk.js.map