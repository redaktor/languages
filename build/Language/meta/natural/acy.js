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
        name: 'Arabic, Cypriot',
        nameT: 'Arabic, Cypriot',
        iso3: 'acy',
        wiki: 'Cypriot_Arabic',
        names: 'Cypriot Maronite Arabic,Kormakiti,Maronite,Sanna'
    });
});
//# sourceMappingURL=acy.js.map