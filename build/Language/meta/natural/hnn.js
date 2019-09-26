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
        name: 'Hanunoo',
        nameT: 'Hanunoo',
        iso3: 'hnn',
        wiki: 'Hanun%C3%B3%27o_language',
        names: 'Hanonoo',
        hasDetect: true
    });
});
//# sourceMappingURL=hnn.js.map