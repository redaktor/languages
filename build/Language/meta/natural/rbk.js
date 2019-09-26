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
        name: 'Bontok, Northern',
        nameT: 'Bontok, Northern',
        iso3: 'rbk',
        wiki: 'Bontoc_language',
        names: 'Bontoc,Bontoc,Central,Bontoc,Northern'
    });
});
//# sourceMappingURL=rbk.js.map