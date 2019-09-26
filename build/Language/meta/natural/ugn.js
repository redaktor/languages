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
        name: 'Ugandan Sign Language',
        nameT: 'USL',
        iso3: 'ugn',
        wiki: 'Ugandan_Sign_Language',
        names: 'USL'
    });
});
//# sourceMappingURL=ugn.js.map