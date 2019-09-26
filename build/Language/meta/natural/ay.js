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
        name: 'Aymara, Central',
        nameT: 'Aymar',
        iso1: 'ay',
        iso2: 'aym',
        iso3: 'aym',
        wiki: 'Aymara_language',
        OT: 'AYM',
        hasDetect: true
    });
});
//# sourceMappingURL=ay.js.map