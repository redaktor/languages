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
        name: 'Sicilian',
        nameT: 'sicilianu',
        iso2: 'scn',
        iso3: 'scn',
        wiki: 'Sicilian_language',
        names: 'Calabro-Sicilian,Sicilianu,Siculu'
    });
});
//# sourceMappingURL=scn.js.map