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
        name: 'Waray (Australia)',
        nameT: 'Waray (Australia)',
        iso3: 'wrz',
        wiki: 'Warray_language',
        names: 'Arwur,Awarai,Awarra,Warrai,Warray'
    });
});
//# sourceMappingURL=wrz.js.map