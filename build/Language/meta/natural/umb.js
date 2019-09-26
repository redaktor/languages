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
        name: 'Umbundu',
        nameT: 'Umbundu',
        iso2: 'umb',
        iso3: 'umb',
        wiki: 'Umbundu',
        names: 'Kimbari,Mbali,Mbari,M’bundo,Mbundu,Mbundu Benguella,Nano,Olumbali,Ovimbundu,South Mbundu,Umbundo',
        hasDetect: true
    });
});
//# sourceMappingURL=umb.js.map