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
        name: 'Karipúna',
        nameT: 'Karipúna',
        iso3: 'kgm',
        wiki: 'Palik%C3%BAr_language',
        names: 'Karipuna do Amapá,Karipuna do Uaçá'
    });
});
//# sourceMappingURL=kgm.js.map