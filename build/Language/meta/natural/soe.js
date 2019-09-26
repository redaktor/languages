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
        name: 'Songomeno',
        nameT: 'Songomeno',
        iso3: 'soe',
        wiki: 'Hendo_language',
        names: 'Hendo,Lohendo'
    });
});
//# sourceMappingURL=soe.js.map