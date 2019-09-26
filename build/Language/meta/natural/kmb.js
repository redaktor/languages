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
        name: 'Mbundu',
        nameT: 'Mbundu',
        iso2: 'kmb',
        iso3: 'kmb',
        wiki: 'Kimbundu',
        OT: 'MBN',
        names: 'Dongo,Kimbundo,Kindongo,Loanda Mbundu,Loande,Luanda,Lunda,N’bundo,Nbundu,Ndongo,North Mbundu',
        hasDetect: true
    });
});
//# sourceMappingURL=kmb.js.map