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
        name: 'Jamaican Sign Language',
        nameT: 'JSL',
        iso3: 'jls',
        wiki: 'Varieties_of_American_Sign_Language#Jamaican_Sign_Language',
        names: 'JSL'
    });
});
//# sourceMappingURL=jls.js.map