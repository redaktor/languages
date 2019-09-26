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
        name: 'Sranan Tongo',
        nameT: 'Sranan Tongo',
        iso2: 'srn',
        iso3: 'srn',
        wiki: 'Sranan_Tongo',
        names: 'Surinaams,Suriname Creole English,Surinamese,Taki-Taki',
        hasDetect: true
    });
});
//# sourceMappingURL=srn.js.map