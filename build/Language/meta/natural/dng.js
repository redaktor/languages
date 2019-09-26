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
        name: 'Dungan',
        nameT: 'Хуэйзў йүян (Huejzw jyian)',
        iso3: 'dng',
        wiki: 'Dungan_language',
        OT: 'DUN',
        names: 'Dzhunyan,Huizu,Kwuizwu,Tungan,Zwn’jan'
    });
});
//# sourceMappingURL=dng.js.map