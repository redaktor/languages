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
        name: 'Bubi',
        nameT: 'Bubi',
        iso3: 'buw',
        wiki: 'Vove_language',
        names: 'Bhubhi,Eviia,Gevove,Ghevove,Ibhubhi,Ibubi,Pove,Vove'
    });
});
//# sourceMappingURL=buw.js.map