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
        name: 'Nung (Viet Nam)',
        nameT: 'Nung (Viet Nam)',
        iso3: 'nut',
        wiki: 'Nung_language_(Tai)',
        names: 'Nong,Bu-Nong,Highland Nung,Lungchow,Tai Nung,Tay,Tày Nùng'
    });
});
//# sourceMappingURL=nut.js.map