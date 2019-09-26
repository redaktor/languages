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
        name: 'Manobo, Obo',
        nameT: 'Manobo, Obo',
        iso3: 'obo',
        wiki: 'Obo_language',
        names: 'Bagobo,Kidapawan Manobo,Manobo,Obo Bagobo'
    });
});
//# sourceMappingURL=obo.js.map