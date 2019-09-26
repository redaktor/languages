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
        name: 'Yámana',
        nameT: 'Yámana',
        iso3: 'yag',
        wiki: 'Yaghan_language',
        names: 'Háusi Kúta,Yahgan,Tequenica,Yagán,Yaghan'
    });
});
//# sourceMappingURL=yag.js.map