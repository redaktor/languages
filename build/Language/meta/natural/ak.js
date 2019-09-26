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
        name: 'Akan',
        nameT: 'Akana',
        iso1: 'ak',
        iso2: 'aka',
        iso3: 'aka',
        wiki: 'Akan_language',
        OT: 'TWI',
        hasDetect: true
    });
});
//# sourceMappingURL=ak.js.map