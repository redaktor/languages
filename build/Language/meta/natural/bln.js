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
        name: 'Bikol, Southern Catanduanes',
        nameT: 'Bikol, Southern Catanduanes',
        iso3: 'bln',
        wiki: 'Southern_Catanduanes_Bikol_language',
        names: 'Southern Catanduanes Bikolano,Virac'
    });
});
//# sourceMappingURL=bln.js.map