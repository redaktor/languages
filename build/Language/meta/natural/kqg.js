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
        name: 'Khe',
        nameT: 'Khe',
        iso3: 'kqg',
        wiki: 'Khe_(Gur_language)',
        names: 'Bambadion-Kheso,Kheso'
    });
});
//# sourceMappingURL=kqg.js.map