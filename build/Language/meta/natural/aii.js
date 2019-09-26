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
        name: 'Assyrian Neo-Aramaic',
        nameT: 'Assyrian Neo-Aramaic',
        iso3: 'aii',
        wiki: 'Assyrian_Neo-Aramaic',
        OT: 'SWA',
        names: 'Aisorski,Sooreth,Assyrian,Assyrianci,Assyriski,Lishana Aturaya,Neo-Syriac,Suret,Sureth,Suryaya Swadaya',
        hasDetect: true
    });
});
//# sourceMappingURL=aii.js.map