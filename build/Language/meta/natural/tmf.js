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
        name: 'Toba-Maskoy',
        nameT: 'Toba-Maskoy',
        iso3: 'tmf',
        wiki: 'Toba-Maskoy_language',
        names: 'Cabanatit,Enenxet,Machicui,Quilyilhrayrom,Toba of Paraguay'
    });
});
//# sourceMappingURL=tmf.js.map