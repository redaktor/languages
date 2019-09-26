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
        name: 'Sierra Leone Sign Language',
        nameT: 'Sierra Leone Sign Language',
        iso3: 'sgx',
        wiki: 'Varieties_of_American_Sign_Language#Sierra_Leonean_Sign_Language'
    });
});
//# sourceMappingURL=sgx.js.map