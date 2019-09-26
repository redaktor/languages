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
        name: 'Manipa',
        nameT: 'Soow Huhelia',
        iso3: 'mqp',
        wiki: 'Manipa_language',
        names: 'Soow Huhelia'
    });
});
//# sourceMappingURL=mqp.js.map