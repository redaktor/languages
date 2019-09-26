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
        name: 'Remo',
        nameT: 'Rheno',
        iso3: 'rem',
        wiki: 'M%C3%B4a_Remo_language',
        names: 'Rheno'
    });
});
//# sourceMappingURL=rem.js.map