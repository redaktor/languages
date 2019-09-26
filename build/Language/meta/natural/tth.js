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
        name: 'Ta’oih, Upper',
        nameT: 'Kantua',
        iso3: 'tth',
        wiki: 'Ta%E2%80%99Oi_language',
        names: 'Katang,Ta Hoi,Ta-Oi,Ta-oiq,Ta-Oy,Tau Oi,Tà-Oi,Toi-Oi,T-Oy'
    });
});
//# sourceMappingURL=tth.js.map