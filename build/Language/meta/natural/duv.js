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
        name: 'Duvle',
        nameT: 'Duvle',
        iso3: 'duv',
        wiki: 'Duvle_language',
        names: 'Duvde,Duve,Duvele,Duvre,Wiri'
    });
});
//# sourceMappingURL=duv.js.map