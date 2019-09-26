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
        name: 'Karakalpak',
        nameT: 'Karakalpak',
        iso2: 'kaa',
        iso3: 'kaa',
        wiki: 'Karakalpak_language',
        OT: 'KRK',
        names: 'Karaklobuk,Klobouki,Tchorny',
        hasDetect: true
    });
});
//# sourceMappingURL=kaa.js.map