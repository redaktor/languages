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
        name: 'Ir',
        nameT: 'Ir',
        iso3: 'irr',
        wiki: 'Ta%E2%80%99Oi_language',
        names: 'In,Yiir,Yir'
    });
});
//# sourceMappingURL=irr.js.map