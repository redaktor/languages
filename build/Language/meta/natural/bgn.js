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
        name: 'Balochi, Western',
        nameT: 'Balochi, Western',
        iso3: 'bgn',
        wiki: 'Balochi_language',
        names: 'Baloci,Baluchi,Baluci,Yarahmadza'
    });
});
//# sourceMappingURL=bgn.js.map