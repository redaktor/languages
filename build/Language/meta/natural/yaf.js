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
        name: 'Yaka (Democratic Republic of Congo)',
        nameT: 'Yaka (Democratic Republic of Congo)',
        iso3: 'yaf',
        wiki: 'Yaka_language_(Congo%E2%80%93Angola)',
        names: 'Iaca,Iaka,Iyaka,Kiyaka'
    });
});
//# sourceMappingURL=yaf.js.map