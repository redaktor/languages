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
        name: 'Mokole',
        nameT: 'Mokole',
        iso3: 'mkl',
        wiki: 'Mokole_language_(Benin)',
        names: 'Féri,Mokollé,Mokwale,Monkole'
    });
});
//# sourceMappingURL=mkl.js.map