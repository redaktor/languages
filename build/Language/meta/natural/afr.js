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
        name: 'Afrikaans',
        nameT: 'Afrikaans',
        iso1: 'af',
        iso2: 'afr',
        iso3: 'afr',
        wiki: 'Afrikaans',
        OT: 'AFK',
        hasDetect: true
    });
});
//# sourceMappingURL=afr.js.map