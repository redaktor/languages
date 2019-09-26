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
        name: 'Sewa Bay',
        nameT: 'Duau Pwata',
        iso3: 'sew',
        wiki: 'Sewa_Bay_language',
        names: 'Duau Pwata'
    });
});
//# sourceMappingURL=sew.js.map