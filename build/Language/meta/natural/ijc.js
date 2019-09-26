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
        name: 'Izon',
        nameT: 'Izon',
        iso3: 'ijc',
        wiki: 'Izon_language',
        OT: 'IJO',
        names: 'Central-Western Ijo,Ijaw,Ijo,Izo,Uzo'
    });
});
//# sourceMappingURL=ijc.js.map