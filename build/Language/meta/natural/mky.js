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
        name: 'Makian, East',
        nameT: 'Makian, East',
        iso3: 'mky',
        wiki: 'Taba_language',
        names: 'Makian Dalam,Makian Timur'
    });
});
//# sourceMappingURL=mky.js.map