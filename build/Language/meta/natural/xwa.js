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
        name: 'Kwaza',
        nameT: 'Kwaza',
        iso3: 'xwa',
        wiki: 'Kwaza_language',
        names: 'Coaia,Koaiá,Koaya,Quaiá'
    });
});
//# sourceMappingURL=xwa.js.map