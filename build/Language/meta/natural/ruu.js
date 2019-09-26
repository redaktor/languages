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
        name: 'Lobu, Lanas',
        nameT: 'Lobu, Lanas',
        iso3: 'ruu',
        wiki: 'Kinabatangan_language',
        names: 'Keningau Lobu,Lobu ("Labou")'
    });
});
//# sourceMappingURL=ruu.js.map