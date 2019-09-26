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
        name: 'Burmese',
        nameT: 'မြန်မာ',
        iso1: 'my',
        iso2: 'bur',
        iso2T: 'mya',
        iso3: 'mya',
        wiki: 'Burmese_language',
        OT: 'BRM',
        names: 'Bama,Bamachaka,Myanmar,Myen',
        hasDetect: true
    });
});
//# sourceMappingURL=mya.js.map