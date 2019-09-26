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
        name: 'Parecis',
        nameT: 'Parecis',
        iso3: 'pab',
        wiki: 'Paresi_language',
        names: 'Arití,Haliti,Pareás,Paresí,Paressí',
        hasDetect: true
    });
});
//# sourceMappingURL=pab.js.map