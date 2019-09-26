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
        name: 'Mahali',
        nameT: 'Mahali',
        iso3: 'mjx',
        wiki: 'Santali_language',
        names: 'Mahle,Mahili,Mahli'
    });
});
//# sourceMappingURL=mjx.js.map