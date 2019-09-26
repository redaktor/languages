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
        name: 'Indian Sign Language',
        nameT: 'Indian Sign Language',
        iso3: 'ins',
        wiki: 'Indo-Pakistani_Sign_Language',
        names: 'Bangladesh Sign Language,Bangladeshi Sign Language,Bengali Sign Language,Indo-Pakistani Sign Language,Urban Indian Sign Language'
    });
});
//# sourceMappingURL=ins.js.map