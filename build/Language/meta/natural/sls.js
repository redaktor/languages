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
        name: 'Singapore Sign Language',
        nameT: 'Singapore Sign Language',
        iso3: 'sls',
        wiki: 'Sign_language_in_Singapore',
        names: 'Natural Sign Language,SgSL'
    });
});
//# sourceMappingURL=sls.js.map