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
        name: 'Kintaq',
        nameT: 'Kintaq',
        iso3: 'knq',
        wiki: 'Kintaq_language',
        names: 'Bong,Kenta,Kintak,Kintaq Bong,Kintk'
    });
});
//# sourceMappingURL=knq.js.map