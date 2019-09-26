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
        name: 'Dogri (individual language)',
        nameT: 'Dogri (individual language)',
        iso3: 'dgo',
        wiki: 'Dogri_language',
        names: 'Dhogaryali,Dogari,Dogri Jammu,Dogri Pahari,Dogri-Kangri,Dongari,Hindi Dogri,Tokkaru'
    });
});
//# sourceMappingURL=dgo.js.map