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
        name: 'Yupik, Central',
        nameT: 'Central Alaskan Yupik',
        iso3: 'esu',
        wiki: 'Yup%27ik_language',
        names: 'Central Alaskan Yupik'
    });
});
//# sourceMappingURL=esu.js.map