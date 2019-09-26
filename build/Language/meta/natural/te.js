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
        name: 'Telugu',
        nameT: 'తెలుగు',
        iso1: 'te',
        iso2: 'tel',
        iso3: 'tel',
        wiki: 'Telugu_language',
        OT: 'TEL',
        names: 'Andhra,Gentoo,Tailangi,Telangire,Telegu,Telgi,Tengu,Terangi,Tolangan',
        hasDetect: true
    });
});
//# sourceMappingURL=te.js.map