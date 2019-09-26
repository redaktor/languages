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
        name: 'Dangme, Adangme',
        nameT: 'Adangbɛ',
        iso2: 'ada',
        iso3: 'ada',
        wiki: 'Dangme_language',
        OT: 'DNG',
        names: 'Adangme',
        hasDetect: true
    });
});
//# sourceMappingURL=ada.js.map