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
        name: 'Taiwan Sign Language',
        nameT: 'Taiwan Ziran Shouyu',
        iso3: 'tss',
        wiki: 'Taiwanese_Sign_Language',
        names: 'Taiwan Ziran Shouyu'
    });
});
//# sourceMappingURL=tss.js.map