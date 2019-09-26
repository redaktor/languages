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
        name: 'Maaka',
        nameT: 'Maaka',
        iso3: 'mew',
        wiki: 'Maaka_language',
        names: 'Maga,Magha,Maha,Maka'
    });
});
//# sourceMappingURL=mew.js.map