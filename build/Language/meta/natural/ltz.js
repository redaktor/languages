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
        name: 'Luxembourgish, Letzeburgesch, Luxembourgeois',
        nameT: 'Lëtzebuergesch',
        iso1: 'lb',
        iso2: 'ltz',
        iso3: 'ltz',
        wiki: 'Luxembourgish_language',
        OT: 'LTZ',
        names: 'Letzburgisch,Luxembourgeois,Luxemburgian,Moselle Franconian,Frankish,Platt,Luxemburgish',
        hasDetect: true
    });
});
//# sourceMappingURL=ltz.js.map