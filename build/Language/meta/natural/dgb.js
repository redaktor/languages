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
        name: 'Dogon, Bunoge',
        nameT: 'Dogon, Bunoge',
        iso3: 'dgb',
        wiki: 'Budu_Dogon',
        names: 'Budu-Tagu,Bunoge,Korandabo'
    });
});
//# sourceMappingURL=dgb.js.map