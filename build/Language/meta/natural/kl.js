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
        name: 'Inuktitut, Greenlandic',
        nameT: 'Kalaallisut',
        iso1: 'kl',
        iso2: 'kal',
        iso3: 'kal',
        wiki: 'Greenlandic_language',
        OT: 'GRN',
        names: 'Greenlandic Kalaallisut,Inuktitut,Greenlandic Inuktitut',
        hasDetect: true
    });
});
//# sourceMappingURL=kl.js.map