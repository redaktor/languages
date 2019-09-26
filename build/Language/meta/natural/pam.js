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
        name: 'Pampangan',
        nameT: 'Pampangan',
        iso2: 'pam',
        iso3: 'pam',
        wiki: 'Kapampangan_language',
        names: 'Kapampangan,Pampango,Pampangueño',
        hasDetect: true
    });
});
//# sourceMappingURL=pam.js.map