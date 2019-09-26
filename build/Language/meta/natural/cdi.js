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
        name: 'Chodri',
        nameT: 'Chodri',
        iso3: 'cdi',
        wiki: 'Chodri_language',
        names: 'Bhil,Chaudhari,Chaudri,Chodhari,Choudhara,Choudhary,Chowdhary'
    });
});
//# sourceMappingURL=cdi.js.map