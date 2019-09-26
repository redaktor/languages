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
        name: 'Tangchangya',
        nameT: 'Tanchangya',
        iso3: 'tnv',
        wiki: 'Tanchangya_language',
        names: 'Tanchangya'
    });
});
//# sourceMappingURL=tnv.js.map