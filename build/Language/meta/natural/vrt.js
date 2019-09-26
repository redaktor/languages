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
        name: 'Banam Bay',
        nameT: 'Banam Bay',
        iso3: 'vrt',
        wiki: 'Burmbar_language',
        names: 'Banan Bay,Burmbar,Vartavo'
    });
});
//# sourceMappingURL=vrt.js.map