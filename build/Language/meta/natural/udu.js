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
        name: 'Uduk',
        nameT: 'Tw’ampa',
        iso3: 'udu',
        wiki: 'Uduk_language',
        names: 'T’wampa,Kebeirka,Korara,Kumus,Kwanim Pa,Othan,Twampa',
        hasDetect: true
    });
});
//# sourceMappingURL=udu.js.map