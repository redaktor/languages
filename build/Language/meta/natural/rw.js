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
        name: 'Rwanda',
        nameT: 'Kinyarwandi',
        iso1: 'rw',
        iso2: 'kin',
        iso3: 'kin',
        wiki: 'Kinyarwanda',
        OT: 'RUA',
        names: 'Ruanda,Rwanda,Hima,Ikinyarwanda,Orunyarwanda,Rwandan,Urunyaruanda,Kinyarwanda,Rufumbira,Runyarwanda',
        hasDetect: true
    });
});
//# sourceMappingURL=rw.js.map