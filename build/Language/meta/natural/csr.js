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
        name: 'Costa Rican Sign Language',
        nameT: 'Costa Rican Sign Language',
        iso3: 'csr',
        wiki: 'Varieties_of_American_Sign_Language#Costa_Rican_Sign_Language'
    });
});
//# sourceMappingURL=csr.js.map