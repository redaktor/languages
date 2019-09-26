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
        name: 'Tsou',
        nameT: 'Tsou',
        iso3: 'tsu',
        wiki: 'Tsou_language',
        names: 'Cou,Namakaban,Niitaka,Tibola,Tibolah,Tibolak,Tibolal,Tso,Tsoo,Tsuou,Tsu-U,Tsu-Wo,Tzo'
    });
});
//# sourceMappingURL=tsu.js.map