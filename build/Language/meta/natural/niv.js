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
        name: 'Gilyak',
        nameT: 'нивхгу',
        iso3: 'niv',
        wiki: 'Nivkh_language',
        OT: 'GIL',
        names: 'Nivkh,Nivkhi'
    });
});
//# sourceMappingURL=niv.js.map