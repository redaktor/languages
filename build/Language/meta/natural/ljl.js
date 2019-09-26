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
        name: 'Li’o',
        nameT: 'Li’o',
        iso3: 'ljl',
        wiki: 'Li%27o_language',
        names: 'Aku,Lio,Lionese,Tanah Kunu'
    });
});
//# sourceMappingURL=ljl.js.map