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
        name: 'Kentish Sign Language, Old',
        nameT: 'Kentish Sign Language, Old',
        iso3: 'okl',
        wiki: 'Old_Kentish_Sign_Language'
    });
});
//# sourceMappingURL=okl.js.map