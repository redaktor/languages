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
        name: 'Estonian, Standard',
        nameT: 'Estonian, Standard',
        iso3: 'ekk',
        wiki: 'Estonian_language',
        names: 'Eesti,Eesti Kirjakeel'
    });
});
//# sourceMappingURL=ekk.js.map