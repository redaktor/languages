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
        name: 'Mannan',
        nameT: 'Mannan',
        iso3: 'mjv',
        wiki: 'Mannan_language',
        names: 'Inavan petch,Mannan Pasha,Manne,Mannyod'
    });
});
//# sourceMappingURL=mjv.js.map