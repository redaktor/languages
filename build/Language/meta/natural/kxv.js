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
        name: 'Kuvi',
        nameT: 'Kuvi',
        iso3: 'kxv',
        wiki: 'Kuvi_language',
        names: 'Jatapu,Khondh,Khondi,Kond,Kuvi Kond,Kuvinga,Kuwi'
    });
});
//# sourceMappingURL=kxv.js.map